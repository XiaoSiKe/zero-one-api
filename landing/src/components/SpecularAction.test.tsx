import { afterEach, describe, expect, it, vi } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import Action from './Action'
import SpecularAction from './SpecularAction'

const runtime = vi.hoisted(() => ({
  register: vi.fn(),
  unregister: vi.fn(),
}))

vi.mock('../lib/specularEffectsRuntime', () => ({
  registerSpecularEffect: runtime.register,
}))

describe('SpecularAction', () => {
  afterEach(() => {
    cleanup()
    runtime.register.mockReset()
    runtime.unregister.mockReset()
  })

  it('renders native buttons, forwards attributes, and exposes the CSS contract', () => {
    runtime.register.mockReturnValue(runtime.unregister)
    render(
      <SpecularAction size="md" disabled data-testid="action" aria-label="Run task">
        Run
      </SpecularAction>,
    )

    const action = screen.getByRole('button', { name: 'Run task' })
    expect((action as HTMLButtonElement).disabled).toBe(true)
    expect(action.getAttribute('type')).toBe('button')
    expect(action.classList.contains('specular-action')).toBe(true)
    expect(action.classList.contains('specular-action--md')).toBe(true)
    expect(action.classList.contains('specular-action--disabled')).toBe(true)
    expect(action.querySelector('.specular-action__label')?.textContent).toBe('Run')
    expect(runtime.register).toHaveBeenCalledTimes(1)
  })

  it('uses anchors for href and enforces disabled link semantics', () => {
    runtime.register.mockReturnValue(runtime.unregister)
    const onClick = vi.fn()
    render(
      <SpecularAction href="/register" disabled target="_self" onClick={onClick}>
        Register
      </SpecularAction>,
    )

    const action = screen.getByRole('link', { name: 'Register' })
    const click = new MouseEvent('click', { bubbles: true, cancelable: true })
    action.dispatchEvent(click)

    expect(action.getAttribute('href')).toBe('/register')
    expect(action.getAttribute('target')).toBe('_self')
    expect(action.getAttribute('aria-disabled')).toBe('true')
    expect(action.getAttribute('tabindex')).toBe('-1')
    expect(click.defaultPrevented).toBe(true)
    expect(onClick).not.toHaveBeenCalled()
  })

  it('keeps one registration while props change and supplies the latest effect options', () => {
    runtime.register.mockReturnValue(runtime.unregister)
    const { rerender, unmount } = render(
      <SpecularAction intensity={0.5} lineColor="#eeeeee">
        Start
      </SpecularAction>,
    )
    const readOptions = runtime.register.mock.calls[0]?.[1] as () => {
      intensity: number
      lineColor: string
    }

    expect(readOptions()).toMatchObject({ intensity: 0.5, lineColor: '#eeeeee' })
    rerender(
      <SpecularAction intensity={1.4} lineColor="#ffffff">
        Start
      </SpecularAction>,
    )

    expect(runtime.register).toHaveBeenCalledTimes(1)
    expect(readOptions()).toMatchObject({ intensity: 1.4, lineColor: '#ffffff' })
    fireEvent.click(screen.getByRole('button', { name: 'Start' }))
    unmount()
    expect(runtime.unregister).toHaveBeenCalledTimes(1)
  })

  it('uses the requested homepage specular defaults', () => {
    runtime.register.mockReturnValue(runtime.unregister)
    render(<SpecularAction>Start</SpecularAction>)
    const readOptions = runtime.register.mock.calls[0]?.[1] as () => Record<string, unknown>

    expect(readOptions()).toMatchObject({
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
    })
  })

  it('renders non-highlight actions without changing their child structure or registering canvas work', () => {
    render(
      <Action className="integration-primary-action" href="/keys" highlight={false}>
        <svg data-testid="key-icon" />
        Create key
      </Action>,
    )

    const action = screen.getByRole('link', { name: 'Create key' })
    expect(action.classList.contains('landing-action')).toBe(true)
    expect(action.classList.contains('integration-primary-action')).toBe(true)
    expect(action.classList.contains('specular-action')).toBe(false)
    expect(action.getAttribute('data-action-highlight')).toBe('none')
    expect(action.hasAttribute('data-specular-state')).toBe(false)
    expect(action.querySelector('.landing-action__label')).toBeNull()
    expect(screen.getByTestId('key-icon').parentElement).toBe(action)
    expect(runtime.register).not.toHaveBeenCalled()
  })
})
