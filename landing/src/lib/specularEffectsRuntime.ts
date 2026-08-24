import { Color, Mesh, Program, Renderer, Triangle } from 'ogl'

const EFFECT_PADDING = 20
const BORDER_CENTER_INSET = 0.5
const INITIAL_ANGLE = 2.4
const MAX_DPR = 1.5
const GEOMETRY_TRANSITION_PROPERTIES = new Set([
  'bottom',
  'height',
  'left',
  'margin-bottom',
  'margin-left',
  'margin-right',
  'margin-top',
  'right',
  'top',
  'transform',
  'width',
])

const VERTEX_SHADER = `
attribute vec2 position;

void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`

// A viewport-space version of the supplied SpecularButton shader. Every
// registered action shares this program and is isolated with a scissor rect.
const FRAGMENT_SHADER = `
precision highp float;

uniform vec2 uCenter;
uniform vec2 uHalfSize;
uniform float uRadius;
uniform float uAngle;
uniform float uPx;
uniform vec3 uLineColor;
uniform vec3 uBaseColor;
uniform float uIntensity;
uniform float uShineSize;
uniform float uShineFade;
uniform float uThickness;
uniform float uBaseWidth;

float sdRoundedRect(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

float gaussianLine(float d, float sigma) {
  float x = d / (sigma + 0.000001);
  float k = mix(1.0, 1.6, smoothstep(0.0, 1.5, x));
  return exp(-k * x * x);
}

void main() {
  vec2 p = gl_FragCoord.xy - uCenter;
  float d = sdRoundedRect(p, uHalfSize, uRadius);
  vec2 lightDirection = vec2(cos(uAngle), sin(uAngle));

  float base = (1.0 - smoothstep(0.0, uBaseWidth, abs(d))) * 0.45;
  vec2 ellipticalNormal = normalize(p / (uHalfSize * uHalfSize) + 0.000001);
  float phi = acos(clamp(abs(dot(ellipticalNormal, lightDirection)), 0.0, 1.0));
  float rim = 1.0 - smoothstep(
    uShineSize - uShineFade,
    uShineSize + uShineFade + 0.0001,
    phi
  );
  float line = gaussianLine(d, uThickness);
  float edgeClamp = 1.0 - smoothstep(0.5 * uPx, 3.0 * uPx, abs(d));
  float highlight = line * rim * edgeClamp * uIntensity;

  vec3 color = uBaseColor * base + uLineColor * highlight;
  float alpha = clamp(base + highlight, 0.0, 1.0);
  gl_FragColor = vec4(color, alpha);
}
`

export interface SpecularEffectOptions {
  radius?: number
  lineColor?: string
  baseColor?: string
  intensity?: number
  shineSize?: number
  shineFade?: number
  thickness?: number
  speed?: number
  followMouse?: boolean
  proximity?: number
  autoAnimate?: boolean
  disabled?: boolean
}

interface ResolvedSpecularEffectOptions {
  radius: number
  lineColor: string
  baseColor: string
  intensity: number
  shineSize: number
  shineFade: number
  thickness: number
  speed: number
  followMouse: boolean
  proximity: number
  autoAnimate: boolean
  disabled: boolean
}

interface Registration {
  element: HTMLElement
  readOptions: () => SpecularEffectOptions
  angle: number
  idleAngle: number
  brightness: number
}

const DEFAULT_OPTIONS: ResolvedSpecularEffectOptions = {
  radius: 18,
  lineColor: '#ffffff',
  baseColor: '#525252',
  intensity: 1,
  shineSize: 10,
  shineFade: 40,
  thickness: 1,
  speed: 0.35,
  followMouse: true,
  proximity: 250,
  autoAnimate: false,
  disabled: false,
}

function resolveOptions(options: SpecularEffectOptions): ResolvedSpecularEffectOptions {
  return { ...DEFAULT_OPTIONS, ...options }
}

function setMediaListener(
  query: MediaQueryList,
  method: 'add' | 'remove',
  listener: (event: MediaQueryListEvent) => void,
) {
  if (method === 'add') {
    if (typeof query.addEventListener === 'function') query.addEventListener('change', listener)
    else query.addListener(listener)
    return
  }

  if (typeof query.removeEventListener === 'function') query.removeEventListener('change', listener)
  else query.removeListener(listener)
}

class SpecularEffectsRuntime {
  private readonly renderer: Renderer
  private readonly gl: Renderer['gl']
  private readonly program: Program
  private readonly mesh: Mesh
  private readonly canvas: HTMLCanvasElement
  private readonly registrations = new Set<Registration>()
  private readonly activeGeometryTransitions = new Map<Element, Set<string>>()
  private readonly activeGeometryAnimations = new Map<Element, Set<string>>()
  private readonly lineColor = new Color('#ffffff')
  private readonly baseColor = new Color('#525252')
  private readonly reducedMotionQuery: MediaQueryList
  private readonly finePointerQuery: MediaQueryList
  private readonly resizeObserver: ResizeObserver | null
  private frameId: number | null = null
  private lastFrameTime = performance.now()
  private pointerX = 0
  private pointerY = 0
  private pointerSeen = false
  private reducedMotion: boolean
  private finePointer: boolean
  private documentVisible = !document.hidden
  private contextLost = false
  private disposed = false
  private pointerListenerAttached = false

  constructor() {
    this.renderer = new Renderer({
      alpha: true,
      depth: false,
      stencil: false,
      antialias: true,
      premultipliedAlpha: true,
      dpr: Math.min(window.devicePixelRatio || 1, MAX_DPR),
      autoClear: false,
    })
    this.gl = this.renderer.gl
    this.canvas = this.gl.canvas
    this.canvas.className = 'specular-effects-canvas'
    this.canvas.setAttribute('aria-hidden', 'true')
    this.canvas.setAttribute('role', 'presentation')
    Object.assign(this.canvas.style, {
      position: 'fixed',
      inset: '0',
      display: 'block',
      pointerEvents: 'none',
      zIndex: 'var(--specular-canvas-z-index, 30)',
    })

    this.gl.clearColor(0, 0, 0, 0)
    this.gl.enable(this.gl.BLEND)
    this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA)

    const geometry = new Triangle(this.gl)
    if (geometry.attributes.uv) delete geometry.attributes.uv
    this.program = new Program(this.gl, {
      vertex: VERTEX_SHADER,
      fragment: FRAGMENT_SHADER,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      uniforms: {
        uCenter: { value: [0, 0] },
        uHalfSize: { value: [1, 1] },
        uRadius: { value: 0 },
        uAngle: { value: INITIAL_ANGLE },
        uPx: { value: this.renderer.dpr },
        uLineColor: { value: [1, 1, 1] },
        uBaseColor: { value: [0.32, 0.32, 0.32] },
        uIntensity: { value: 1 },
        uShineSize: { value: 0.17 },
        uShineFade: { value: 0.7 },
        uThickness: { value: 1 },
        uBaseWidth: { value: this.renderer.dpr },
      },
    })
    this.mesh = new Mesh(this.gl, { geometry, program: this.program })

    this.reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    this.finePointerQuery = window.matchMedia('(pointer: fine)')
    this.reducedMotion = this.reducedMotionQuery.matches
    this.finePointer = this.finePointerQuery.matches

    this.resizeObserver =
      typeof ResizeObserver === 'undefined'
        ? null
        : new ResizeObserver(() => this.requestStillFrame())

    this.resizeCanvas()
    document.body.appendChild(this.canvas)
    window.addEventListener('resize', this.handleResize, { passive: true })
    window.addEventListener('scroll', this.handleScroll, { passive: true, capture: true })
    document.addEventListener('visibilitychange', this.handleVisibilityChange)
    document.addEventListener('transitionrun', this.handleTransitionRun, true)
    document.addEventListener('transitionend', this.handleTransitionComplete, true)
    document.addEventListener('transitioncancel', this.handleTransitionComplete, true)
    document.addEventListener('animationstart', this.handleAnimationStart, true)
    document.addEventListener('animationend', this.handleAnimationComplete, true)
    document.addEventListener('animationcancel', this.handleAnimationComplete, true)
    setMediaListener(this.reducedMotionQuery, 'add', this.handleReducedMotionChange)
    setMediaListener(this.finePointerQuery, 'add', this.handleFinePointerChange)
    this.canvas.addEventListener('webglcontextlost', this.handleContextLost)
    this.syncPointerListener()
  }

  register(element: HTMLElement, readOptions: () => SpecularEffectOptions): () => void {
    const registration: Registration = {
      element,
      readOptions,
      angle: INITIAL_ANGLE,
      idleAngle: INITIAL_ANGLE,
      brightness: 0,
    }
    this.registrations.add(registration)
    this.resizeObserver?.observe(element)
    this.markElement(element)
    this.render(performance.now())
    this.syncAnimation()

    let active = true
    return () => {
      if (!active) return
      active = false
      this.resizeObserver?.unobserve(element)
      this.registrations.delete(registration)
      delete element.dataset.specularState
      this.pruneInactiveGeometryTracks()
      this.syncAnimation()
      if (this.registrations.size > 0) this.requestStillFrame()
    }
  }

  get size() {
    return this.registrations.size
  }

  dispose() {
    if (this.disposed) return
    this.disposed = true
    this.stopAnimation()
    this.resizeObserver?.disconnect()
    this.detachPointerListener()
    window.removeEventListener('resize', this.handleResize)
    window.removeEventListener('scroll', this.handleScroll, true)
    document.removeEventListener('visibilitychange', this.handleVisibilityChange)
    document.removeEventListener('transitionrun', this.handleTransitionRun, true)
    document.removeEventListener('transitionend', this.handleTransitionComplete, true)
    document.removeEventListener('transitioncancel', this.handleTransitionComplete, true)
    document.removeEventListener('animationstart', this.handleAnimationStart, true)
    document.removeEventListener('animationend', this.handleAnimationComplete, true)
    document.removeEventListener('animationcancel', this.handleAnimationComplete, true)
    setMediaListener(this.reducedMotionQuery, 'remove', this.handleReducedMotionChange)
    setMediaListener(this.finePointerQuery, 'remove', this.handleFinePointerChange)
    this.canvas.removeEventListener('webglcontextlost', this.handleContextLost)
    this.canvas.remove()
    if (!this.contextLost) this.gl.getExtension('WEBGL_lose_context')?.loseContext()
    for (const registration of this.registrations) {
      delete registration.element.dataset.specularState
    }
    this.registrations.clear()
    this.activeGeometryTransitions.clear()
    this.activeGeometryAnimations.clear()
  }

  private markElement(element: HTMLElement) {
    element.dataset.specularState = this.contextLost
      ? 'unavailable'
      : this.reducedMotion
        ? 'reduced-motion'
        : 'ready'
  }

  private markAllElements() {
    for (const registration of this.registrations) this.markElement(registration.element)
  }

  private resizeCanvas() {
    const nextDpr = Math.min(window.devicePixelRatio || 1, MAX_DPR)
    this.renderer.dpr = nextDpr
    this.renderer.setSize(Math.max(window.innerWidth, 1), Math.max(window.innerHeight, 1))
    this.program.uniforms.uPx.value = nextDpr
    this.program.uniforms.uBaseWidth.value = nextDpr
  }

  private startAnimation() {
    if (
      this.frameId !== null ||
      this.reducedMotion ||
      !this.documentVisible ||
      this.contextLost ||
      this.disposed ||
      !this.needsAnimation()
    ) {
      return
    }
    this.lastFrameTime = performance.now()
    this.frameId = window.requestAnimationFrame(this.tick)
  }

  private stopAnimation() {
    if (this.frameId === null) return
    window.cancelAnimationFrame(this.frameId)
    this.frameId = null
  }

  private readonly tick = (time: number) => {
    this.frameId = null
    if (this.disposed || this.contextLost || this.reducedMotion || !this.documentVisible) return
    this.render(time)
    if (this.needsAnimation()) {
      this.frameId = window.requestAnimationFrame(this.tick)
    }
  }

  private requestStillFrame() {
    if (this.contextLost || this.disposed || !this.documentVisible) return
    if (this.reducedMotion) {
      this.render(performance.now())
      return
    }
    if (this.needsAnimation()) {
      this.startAnimation()
      return
    }
    if (this.frameId !== null) return
    this.frameId = window.requestAnimationFrame(this.renderStillFrame)
  }

  private readonly renderStillFrame = (time: number) => {
    this.frameId = null
    if (this.contextLost || this.disposed || !this.documentVisible) return
    this.render(time)
  }

  private hasContinuousAnimation() {
    if (!this.finePointer || this.registrations.size === 0) return false
    for (const registration of this.registrations) {
      const options = resolveOptions(registration.readOptions())
      if (options.autoAnimate && !options.disabled) return true
    }
    return false
  }

  private needsAnimation() {
    return (
      this.hasContinuousAnimation() ||
      this.activeGeometryTransitions.size > 0 ||
      this.activeGeometryAnimations.size > 0
    )
  }

  private syncAnimation() {
    if (this.needsAnimation()) this.startAnimation()
    else this.stopAnimation()
  }

  private render(time: number) {
    if (this.contextLost || this.disposed) return

    const continuouslyAnimating = this.hasContinuousAnimation()
    const elapsedSeconds = Math.min(Math.max((time - this.lastFrameTime) / 1000, 0), 0.05)
    this.lastFrameTime = time
    const dpr = this.renderer.dpr
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight

    this.gl.disable(this.gl.SCISSOR_TEST)
    this.gl.clear(this.gl.COLOR_BUFFER_BIT)
    this.gl.enable(this.gl.SCISSOR_TEST)

    for (const registration of this.registrations) {
      const rect = registration.element.getBoundingClientRect()
      if (
        rect.width <= 0 ||
        rect.height <= 0 ||
        rect.right < -EFFECT_PADDING ||
        rect.left > viewportWidth + EFFECT_PADDING ||
        rect.bottom < -EFFECT_PADDING ||
        rect.top > viewportHeight + EFFECT_PADDING
      ) {
        continue
      }

      const options = resolveOptions(registration.readOptions())
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const outsideX = Math.max(rect.left - this.pointerX, 0, this.pointerX - rect.right)
      const outsideY = Math.max(rect.top - this.pointerY, 0, this.pointerY - rect.bottom)
      const distance = this.pointerSeen ? Math.hypot(outsideX, outsideY) : Number.POSITIVE_INFINITY
      let pointerAngle: number | null = null

      if (this.pointerSeen) {
        if (distance === 0) {
          const normalizedX = (this.pointerX - centerX) / Math.max(rect.width / 2, 1)
          const normalizedY = (centerY - this.pointerY) / Math.max(rect.height / 2, 1)
          pointerAngle =
            Math.atan2(2 / Math.max(rect.height, 1), -2 / Math.max(rect.width, 1)) +
            normalizedX * 0.3 +
            normalizedY * 0.15
        } else {
          pointerAngle = Math.atan2(centerY - this.pointerY, this.pointerX - centerX)
        }
      }

      const proximity = Math.max(options.proximity, 1)
      const linearProximity = Math.max(0, 1 - distance / proximity)
      const proximityAmount = linearProximity * linearProximity * (3 - 2 * linearProximity)
      registration.idleAngle += options.speed * elapsedSeconds
      const followsPointer =
        this.finePointer &&
        options.followMouse &&
        pointerAngle !== null &&
        (!options.autoAnimate || proximityAmount > 0)
      const targetAngle =
        followsPointer && pointerAngle !== null ? pointerAngle : registration.idleAngle
      const angleDifference =
        ((targetAngle - registration.angle + Math.PI * 3) % (Math.PI * 2)) - Math.PI
      if (continuouslyAnimating) {
        registration.angle += angleDifference * (1 - Math.exp(-elapsedSeconds * 7))
      } else {
        registration.angle = targetAngle
      }

      const brightnessTarget = options.disabled
        ? 0
        : this.reducedMotion
          ? options.autoAnimate
            ? 0.65
            : 0
          : options.autoAnimate
            ? 1
            : proximityAmount
      if (this.reducedMotion || !continuouslyAnimating) {
        registration.brightness = brightnessTarget
      } else {
        registration.brightness +=
          (brightnessTarget - registration.brightness) * (1 - Math.exp(-elapsedSeconds * 8))
      }

      this.lineColor.set(options.lineColor)
      this.baseColor.set(options.baseColor)
      this.program.uniforms.uCenter.value = [
        centerX * dpr,
        (viewportHeight - centerY) * dpr,
      ]
      this.program.uniforms.uHalfSize.value = [
        (rect.width / 2 - BORDER_CENTER_INSET) * dpr,
        (rect.height / 2 - BORDER_CENTER_INSET) * dpr,
      ]
      this.program.uniforms.uRadius.value =
        Math.max(
          0,
          Math.min(
            options.radius - BORDER_CENTER_INSET,
            Math.min(rect.width, rect.height) / 2 - BORDER_CENTER_INSET,
          ),
        ) * dpr
      this.program.uniforms.uAngle.value = registration.angle
      this.program.uniforms.uLineColor.value = [
        this.lineColor.r,
        this.lineColor.g,
        this.lineColor.b,
      ]
      this.program.uniforms.uBaseColor.value = [
        this.baseColor.r,
        this.baseColor.g,
        this.baseColor.b,
      ]
      this.program.uniforms.uIntensity.value = options.intensity * registration.brightness
      this.program.uniforms.uShineSize.value = (options.shineSize * Math.PI) / 180
      this.program.uniforms.uShineFade.value = (options.shineFade * Math.PI) / 180
      this.program.uniforms.uThickness.value = options.thickness * dpr

      const scissorLeft = Math.max(0, Math.floor((rect.left - EFFECT_PADDING) * dpr))
      const scissorRight = Math.min(
        viewportWidth * dpr,
        Math.ceil((rect.right + EFFECT_PADDING) * dpr),
      )
      const scissorBottom = Math.max(
        0,
        Math.floor((viewportHeight - rect.bottom - EFFECT_PADDING) * dpr),
      )
      const scissorTop = Math.min(
        viewportHeight * dpr,
        Math.ceil((viewportHeight - rect.top + EFFECT_PADDING) * dpr),
      )

      if (scissorRight <= scissorLeft || scissorTop <= scissorBottom) continue
      this.gl.scissor(
        scissorLeft,
        scissorBottom,
        scissorRight - scissorLeft,
        scissorTop - scissorBottom,
      )
      this.renderer.render({
        scene: this.mesh,
        clear: false,
        update: false,
        sort: false,
        frustumCull: false,
      })
    }

    this.gl.disable(this.gl.SCISSOR_TEST)
  }

  private attachPointerListener() {
    if (this.pointerListenerAttached) return
    window.addEventListener('pointermove', this.handlePointerMove, { passive: true })
    this.pointerListenerAttached = true
  }

  private detachPointerListener() {
    if (!this.pointerListenerAttached) return
    window.removeEventListener('pointermove', this.handlePointerMove)
    this.pointerListenerAttached = false
  }

  private syncPointerListener() {
    if (this.finePointer && !this.reducedMotion) this.attachPointerListener()
    else this.detachPointerListener()
  }

  private readonly handlePointerMove = (event: PointerEvent) => {
    this.pointerX = event.clientX
    this.pointerY = event.clientY
    this.pointerSeen = true
    this.requestStillFrame()
  }

  private readonly handleResize = () => {
    this.resizeCanvas()
    this.render(performance.now())
  }

  private readonly handleScroll = () => {
    this.requestStillFrame()
  }

  private transitionAffectsRegistration(target: Element) {
    for (const registration of this.registrations) {
      if (target === registration.element || target.contains(registration.element)) return true
    }
    return false
  }

  private pruneInactiveGeometryTracks() {
    for (const target of this.activeGeometryTransitions.keys()) {
      if (!this.transitionAffectsRegistration(target)) {
        this.activeGeometryTransitions.delete(target)
      }
    }
    for (const target of this.activeGeometryAnimations.keys()) {
      if (!this.transitionAffectsRegistration(target)) {
        this.activeGeometryAnimations.delete(target)
      }
    }
  }

  private readonly handleTransitionRun = (event: TransitionEvent) => {
    const target = event.target
    if (
      !(target instanceof Element) ||
      !GEOMETRY_TRANSITION_PROPERTIES.has(event.propertyName) ||
      !this.transitionAffectsRegistration(target)
    ) {
      return
    }

    const properties = this.activeGeometryTransitions.get(target) ?? new Set<string>()
    properties.add(event.propertyName)
    this.activeGeometryTransitions.set(target, properties)
    this.startAnimation()
  }

  private readonly handleTransitionComplete = (event: TransitionEvent) => {
    const target = event.target
    if (!(target instanceof Element)) return
    const properties = this.activeGeometryTransitions.get(target)
    const wasTracked = properties?.delete(event.propertyName) ?? false
    if (properties?.size === 0) this.activeGeometryTransitions.delete(target)
    if (!wasTracked && !this.transitionAffectsRegistration(target)) return
    this.requestStillFrame()
  }

  private readonly handleAnimationStart = (event: AnimationEvent) => {
    const target = event.target
    if (!(target instanceof Element) || !this.transitionAffectsRegistration(target)) return
    const animations = this.activeGeometryAnimations.get(target) ?? new Set<string>()
    animations.add(event.animationName || '__anonymous__')
    this.activeGeometryAnimations.set(target, animations)
    this.startAnimation()
  }

  private readonly handleAnimationComplete = (event: AnimationEvent) => {
    const target = event.target
    if (!(target instanceof Element)) return
    const animations = this.activeGeometryAnimations.get(target)
    const wasTracked = animations?.delete(event.animationName || '__anonymous__') ?? false
    if (animations?.size === 0) this.activeGeometryAnimations.delete(target)
    if (!wasTracked && !this.transitionAffectsRegistration(target)) return
    this.requestStillFrame()
  }

  private readonly handleVisibilityChange = () => {
    this.documentVisible = !document.hidden
    if (!this.documentVisible) {
      this.stopAnimation()
      return
    }
    this.render(performance.now())
    this.syncAnimation()
  }

  private readonly handleReducedMotionChange = (event: MediaQueryListEvent) => {
    this.reducedMotion = event.matches
    this.syncPointerListener()
    this.markAllElements()
    if (this.reducedMotion) {
      this.stopAnimation()
      this.render(performance.now())
    } else {
      this.syncAnimation()
      this.requestStillFrame()
    }
  }

  private readonly handleFinePointerChange = (event: MediaQueryListEvent) => {
    this.finePointer = event.matches
    if (!this.finePointer) {
      this.pointerSeen = false
    }
    this.syncPointerListener()
    this.syncAnimation()
    this.requestStillFrame()
  }

  private readonly handleContextLost = (event: Event) => {
    event.preventDefault()
    this.contextLost = true
    this.stopAnimation()
    this.canvas.remove()
    this.markAllElements()
  }
}

let sharedRuntime: SpecularEffectsRuntime | null = null
let webglUnavailable = false
let pendingDisposal = 0

function obtainRuntime(): SpecularEffectsRuntime | null {
  if (
    webglUnavailable ||
    typeof window === 'undefined' ||
    typeof document === 'undefined' ||
    (typeof WebGLRenderingContext === 'undefined' &&
      typeof WebGL2RenderingContext === 'undefined')
  ) {
    return null
  }
  if (sharedRuntime) return sharedRuntime

  try {
    sharedRuntime = new SpecularEffectsRuntime()
    return sharedRuntime
  } catch {
    webglUnavailable = true
    sharedRuntime = null
    return null
  }
}

/**
 * Registers an action with the page-wide specular renderer. The options reader
 * is called at render time, so React props can change without rebuilding WebGL.
 */
export function registerSpecularEffect(
  element: HTMLElement,
  readOptions: () => SpecularEffectOptions,
): () => void {
  const runtime = obtainRuntime()
  if (!runtime) {
    element.dataset.specularState = 'unavailable'
    return () => {
      delete element.dataset.specularState
    }
  }

  pendingDisposal += 1
  const unregister = runtime.register(element, readOptions)
  return () => {
    unregister()
    if (runtime.size !== 0) return

    const disposalId = ++pendingDisposal

    // StrictMode immediately remounts effects. Deferring final disposal keeps
    // that probe on the same renderer while still releasing the last context.
    queueMicrotask(() => {
      if (disposalId !== pendingDisposal || runtime.size !== 0 || sharedRuntime !== runtime) {
        return
      }
      runtime.dispose()
      sharedRuntime = null
    })
  }
}
