import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { registerSpecularEffect } from './specularEffectsRuntime'

const ogl = vi.hoisted(() => ({
  renderers: [] as Array<{
    gl: Record<string, any>
    render: ReturnType<typeof vi.fn>
    setSize: ReturnType<typeof vi.fn>
  }>,
  programs: [] as Array<{ uniforms: Record<string, { value: any }> }>,
  loseContext: vi.fn(),
}))

vi.mock('ogl', () => {
  class Color {
    r = 0
    g = 0
    b = 0

    constructor(value: string) {
      this.set(value)
    }

    set(value: string) {
      const normalized = value.startsWith('#') ? value.slice(1) : '000000'
      const expanded =
        normalized.length === 3
          ? normalized
              .split('')
              .map((part) => part + part)
              .join('')
          : normalized
      this.r = Number.parseInt(expanded.slice(0, 2), 16) / 255
      this.g = Number.parseInt(expanded.slice(2, 4), 16) / 255
      this.b = Number.parseInt(expanded.slice(4, 6), 16) / 255
      return this
    }
  }

  class Renderer {
    dpr: number
    gl: Record<string, any>
    render = vi.fn()
    setSize: ReturnType<typeof vi.fn>

    constructor(options: { dpr: number }) {
      this.dpr = options.dpr
      const canvas = document.createElement('canvas')
      this.gl = {
        canvas,
        BLEND: 1,
        ONE: 2,
        ONE_MINUS_SRC_ALPHA: 3,
        SCISSOR_TEST: 4,
        COLOR_BUFFER_BIT: 5,
        clearColor: vi.fn(),
        enable: vi.fn(),
        disable: vi.fn(),
        blendFunc: vi.fn(),
        clear: vi.fn(),
        scissor: vi.fn(),
        getExtension: vi.fn((name: string) =>
          name === 'WEBGL_lose_context' ? { loseContext: ogl.loseContext } : null,
        ),
      }
      this.setSize = vi.fn((width: number, height: number) => {
        canvas.width = width * this.dpr
        canvas.height = height * this.dpr
      })
      ogl.renderers.push(this)
    }
  }

  class Program {
    uniforms: Record<string, { value: any }>

    constructor(_gl: unknown, options: { uniforms: Record<string, { value: any }> }) {
      this.uniforms = options.uniforms
      ogl.programs.push(this)
    }
  }

  class Triangle {
    attributes: Record<string, unknown> = { uv: {} }
  }

  return { Color, Mesh: class {}, Program, Renderer, Triangle }
})

interface MediaRecord {
  query: string
  listeners: Set<(event: MediaQueryListEvent) => void>
}

let mediaRecords: MediaRecord[] = []
let frameId = 0
let frames = new Map<number, FrameRequestCallback>()
let cleanups: Array<() => void> = []
let finePointer = true

function makeAction(left: number | (() => number)): HTMLButtonElement {
  const action = document.createElement('button')
  action.getBoundingClientRect = () => {
    const currentLeft = typeof left === 'function' ? left() : left
    return ({
      x: currentLeft,
      y: 100,
      left: currentLeft,
      top: 100,
      right: currentLeft + 160,
      bottom: 148,
      width: 160,
      height: 48,
      toJSON: () => ({}),
    }) as DOMRect
  }
  document.body.appendChild(action)
  return action
}

function dispatchTransition(
  target: Element,
  type: 'transitionrun' | 'transitionend' | 'transitioncancel',
  propertyName: string,
) {
  const event = new Event(type, { bubbles: true })
  Object.defineProperty(event, 'propertyName', { value: propertyName })
  target.dispatchEvent(event)
}

function dispatchAnimation(
  target: Element,
  type: 'animationstart' | 'animationend' | 'animationcancel',
  animationName: string,
) {
  const event = new Event(type, { bubbles: true })
  Object.defineProperty(event, 'animationName', { value: animationName })
  target.dispatchEvent(event)
}

describe('specularEffectsRuntime', () => {
  beforeEach(() => {
    ogl.renderers.length = 0
    ogl.programs.length = 0
    ogl.loseContext.mockClear()
    mediaRecords = []
    frames = new Map()
    frameId = 0
    cleanups = []
    finePointer = true

    vi.stubGlobal('WebGLRenderingContext', class MockWebGLRenderingContext {})

    vi.stubGlobal(
      'matchMedia',
      vi.fn((query: string) => {
        const listeners = new Set<(event: MediaQueryListEvent) => void>()
        mediaRecords.push({ query, listeners })
        return {
          matches: query === '(pointer: fine)' ? finePointer : false,
          media: query,
          onchange: null,
          addEventListener: vi.fn(
            (_type: string, listener: (event: MediaQueryListEvent) => void) => {
              listeners.add(listener)
            },
          ),
          removeEventListener: vi.fn(
            (_type: string, listener: (event: MediaQueryListEvent) => void) => {
              listeners.delete(listener)
            },
          ),
          addListener: vi.fn(),
          removeListener: vi.fn(),
          dispatchEvent: vi.fn(() => true),
        }
      }),
    )
    vi.stubGlobal(
      'requestAnimationFrame',
      vi.fn((callback: FrameRequestCallback) => {
        const id = ++frameId
        frames.set(id, callback)
        return id
      }),
    )
    vi.stubGlobal(
      'cancelAnimationFrame',
      vi.fn((id: number) => {
        frames.delete(id)
      }),
    )
    class MockResizeObserver {
      observe = vi.fn()
      unobserve = vi.fn()
      disconnect = vi.fn()
    }
    vi.stubGlobal('ResizeObserver', MockResizeObserver)
    vi.spyOn(window, 'devicePixelRatio', 'get').mockReturnValue(2)
    vi.spyOn(window, 'innerWidth', 'get').mockReturnValue(1200)
    vi.spyOn(window, 'innerHeight', 'get').mockReturnValue(800)
    vi.spyOn(document, 'hidden', 'get').mockReturnValue(false)
  })

  afterEach(async () => {
    cleanups.forEach((dispose) => dispose())
    await Promise.resolve()
    document.querySelectorAll('.specular-effects-canvas, button').forEach((node) => node.remove())
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  it('shares one fullscreen renderer, canvas, and pointer listener across actions', async () => {
    const addWindowListener = vi.spyOn(window, 'addEventListener')
    const removeDocumentListener = vi.spyOn(document, 'removeEventListener')
    const first = makeAction(100)
    const second = makeAction(340)

    cleanups.push(registerSpecularEffect(first, () => ({ autoAnimate: true })))
    cleanups.push(registerSpecularEffect(second, () => ({ proximity: 300 })))

    expect(ogl.renderers).toHaveLength(1)
    expect(document.querySelectorAll('.specular-effects-canvas')).toHaveLength(1)
    expect(document.querySelector<HTMLCanvasElement>('.specular-effects-canvas')?.style.pointerEvents).toBe(
      'none',
    )
    expect(
      addWindowListener.mock.calls.filter(([eventName]) => eventName === 'pointermove'),
    ).toHaveLength(1)
    expect(first.dataset.specularState).toBe('ready')
    expect(second.dataset.specularState).toBe('ready')

    window.dispatchEvent(new MouseEvent('pointermove', { clientX: 180, clientY: 124 }))
    const pendingFrame = frames.entries().next().value as
      | [number, FrameRequestCallback]
      | undefined
    expect(pendingFrame).toBeDefined()
    if (pendingFrame) {
      frames.delete(pendingFrame[0])
      pendingFrame[1](performance.now() + 16)
    }

    expect(ogl.renderers[0]?.gl.scissor).toHaveBeenCalled()
    expect(ogl.renderers[0]?.render).toHaveBeenCalled()

    cleanups.splice(0).forEach((dispose) => dispose())
    await Promise.resolve()
    expect(document.querySelector('.specular-effects-canvas')).toBeNull()
    expect(ogl.loseContext).toHaveBeenCalledTimes(1)
    for (const eventName of [
      'transitionrun',
      'transitionend',
      'transitioncancel',
      'animationstart',
      'animationend',
      'animationcancel',
    ]) {
      expect(
        removeDocumentListener.mock.calls.filter(
          ([registeredEvent, , capture]) => registeredEvent === eventName && capture === true,
        ),
      ).toHaveLength(1)
    }
  })

  it('falls back cleanly if the shared context is lost', () => {
    const action = makeAction(100)
    cleanups.push(registerSpecularEffect(action, () => ({ autoAnimate: true })))
    const canvas = document.querySelector<HTMLCanvasElement>('.specular-effects-canvas')!
    const event = new Event('webglcontextlost', { cancelable: true })

    canvas.dispatchEvent(event)

    expect(event.defaultPrevented).toBe(true)
    expect(action.dataset.specularState).toBe('unavailable')
    expect(document.querySelector('.specular-effects-canvas')).toBeNull()
    expect(frames.size).toBe(0)
  })

  it('uses a static frame on coarse pointers even when auto animation is enabled', () => {
    finePointer = false
    const action = makeAction(100)

    cleanups.push(registerSpecularEffect(action, () => ({ autoAnimate: true })))

    expect(ogl.renderers[0]?.render).toHaveBeenCalled()
    expect(frames.size).toBe(0)

    window.dispatchEvent(new Event('scroll'))
    expect(frames.size).toBe(1)
    const pendingFrame = frames.entries().next().value as [number, FrameRequestCallback]
    frames.delete(pendingFrame[0])
    pendingFrame[1](performance.now() + 16)

    expect(frames.size).toBe(0)
  })

  it('renders pointer updates on demand without a sustained loop when every action is static', () => {
    const action = makeAction(100)

    cleanups.push(registerSpecularEffect(action, () => ({ autoAnimate: false })))

    expect(frames.size).toBe(0)
    window.dispatchEvent(new MouseEvent('pointermove', { clientX: 180, clientY: 124 }))
    expect(frames.size).toBe(1)

    const pendingFrame = frames.entries().next().value as [number, FrameRequestCallback]
    frames.delete(pendingFrame[0])
    pendingFrame[1](performance.now() + 16)

    expect(ogl.renderers[0]?.render).toHaveBeenCalledTimes(2)
    expect(frames.size).toBe(0)
  })

  it('aligns the effect geometry with the center of the CSS border', () => {
    const action = makeAction(100)

    cleanups.push(registerSpecularEffect(action, () => ({ radius: 18 })))

    expect(ogl.programs[0]?.uniforms.uHalfSize?.value).toEqual([119.25, 35.25])
    expect(ogl.programs[0]?.uniforms.uRadius?.value).toBe(26.25)
  })

  it('tracks ancestor geometry transitions and renders the final position on coarse pointers', () => {
    finePointer = false
    const position = { left: 100 }
    const action = makeAction(() => position.left)
    const movingAncestor = document.createElement('div')
    document.body.appendChild(movingAncestor)
    movingAncestor.appendChild(action)
    cleanups.push(registerSpecularEffect(action, () => ({ autoAnimate: false })))

    dispatchTransition(movingAncestor, 'transitionrun', 'width')
    expect(frames.size).toBe(1)

    position.left = 300
    const movingFrame = frames.entries().next().value as [number, FrameRequestCallback]
    frames.delete(movingFrame[0])
    movingFrame[1](performance.now() + 16)
    expect(frames.size).toBe(1)
    expect(ogl.programs[0]?.uniforms.uCenter?.value[0]).toBe(570)

    dispatchTransition(movingAncestor, 'transitionend', 'width')
    const finalFrame = frames.entries().next().value as [number, FrameRequestCallback]
    frames.delete(finalFrame[0])
    finalFrame[1](performance.now() + 32)
    expect(frames.size).toBe(0)

    dispatchTransition(movingAncestor, 'transitionrun', 'background-color')
    expect(frames.size).toBe(0)
  })

  it('tracks ancestor entrance animations and recovers when only the end event is observed', () => {
    finePointer = false
    const position = { left: 100 }
    const action = makeAction(() => position.left)
    const animatedAncestor = document.createElement('div')
    document.body.appendChild(animatedAncestor)
    animatedAncestor.appendChild(action)
    cleanups.push(registerSpecularEffect(action, () => ({ autoAnimate: false })))

    dispatchAnimation(animatedAncestor, 'animationstart', 'landing-fade-up')
    expect(frames.size).toBe(1)
    position.left = 260

    const movingFrame = frames.entries().next().value as [number, FrameRequestCallback]
    frames.delete(movingFrame[0])
    movingFrame[1](performance.now() + 16)
    expect(frames.size).toBe(1)
    expect(ogl.programs[0]?.uniforms.uCenter?.value[0]).toBe(510)

    dispatchAnimation(animatedAncestor, 'animationend', 'landing-fade-up')
    const finalFrame = frames.entries().next().value as [number, FrameRequestCallback]
    frames.delete(finalFrame[0])
    finalFrame[1](performance.now() + 32)
    expect(frames.size).toBe(0)

    position.left = 320
    dispatchAnimation(animatedAncestor, 'animationend', 'missed-start')
    expect(frames.size).toBe(1)
  })

  it('prunes an active ancestor animation when its only registered action unmounts', () => {
    finePointer = false
    const animatedAction = makeAction(100)
    const stableAction = makeAction(360)
    const animatedAncestor = document.createElement('div')
    document.body.appendChild(animatedAncestor)
    animatedAncestor.appendChild(animatedAction)

    const unregisterAnimated = registerSpecularEffect(animatedAction, () => ({ autoAnimate: false }))
    cleanups.push(unregisterAnimated)
    cleanups.push(registerSpecularEffect(stableAction, () => ({ autoAnimate: false })))

    dispatchAnimation(animatedAncestor, 'animationstart', 'landing-fade-up')
    expect(frames.size).toBe(1)

    unregisterAnimated()

    expect(frames.size).toBe(1)
    const cleanupFrame = frames.entries().next().value as [number, FrameRequestCallback]
    frames.delete(cleanupFrame[0])
    cleanupFrame[1](performance.now() + 16)
    expect(frames.size).toBe(0)
    expect(document.querySelector('.specular-effects-canvas')).not.toBeNull()
  })
})
