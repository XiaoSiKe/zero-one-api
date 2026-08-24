import {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type CSSProperties,
  type MouseEventHandler,
  type ReactNode,
  type Ref,
} from 'react'
import {
  registerSpecularEffect,
  type SpecularEffectOptions,
} from '../lib/specularEffectsRuntime'

export type ActionSize = 'sm' | 'md' | 'lg'

interface ActionVisualProps extends SpecularEffectOptions {
  children?: ReactNode
  size?: ActionSize
  highlight?: boolean
  tint?: string
  tintOpacity?: number
  blur?: number
  textColor?: string
  className?: string
  style?: CSSProperties
  disabled?: boolean
}

export type ActionAnchorProps = ActionVisualProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'className' | 'style' | 'href'> & {
    href: string
  }

export type ActionButtonProps = ActionVisualProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className' | 'style' | 'disabled'> & {
    href?: never
  }

export type ActionProps = ActionAnchorProps | ActionButtonProps

function assignRef<T>(ref: Ref<T> | undefined, value: T | null) {
  if (typeof ref === 'function') ref(value)
  else if (ref) ref.current = value
}

const Action = forwardRef<HTMLAnchorElement | HTMLButtonElement, ActionProps>(
  function Action(
    {
      children = 'Get Started',
      size = 'lg',
      highlight = true,
      radius = 18,
      tint = '#ffffff',
      tintOpacity = 0,
      blur = 0,
      textColor = '#f5f5f5',
      lineColor = '#ffffff',
      baseColor = '#525252',
      intensity = 1,
      shineSize = 10,
      shineFade = 40,
      thickness = 1,
      speed = 0.35,
      followMouse = true,
      proximity = 250,
      autoAnimate = false,
      disabled = false,
      className = '',
      style,
      ...elementProps
    },
    forwardedRef,
  ) {
    const elementRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null)
    const optionsRef = useRef<SpecularEffectOptions>({})
    optionsRef.current = {
      radius,
      lineColor,
      baseColor,
      intensity,
      shineSize,
      shineFade,
      thickness,
      speed,
      followMouse,
      proximity,
      autoAnimate,
      disabled,
    }

    const setElementRef = useCallback(
      (element: HTMLAnchorElement | HTMLButtonElement | null) => {
        elementRef.current = element
        assignRef(forwardedRef, element)
      },
      [forwardedRef],
    )

    useEffect(() => {
      const element = elementRef.current
      if (!element || !highlight) return
      return registerSpecularEffect(element, () => optionsRef.current)
    }, [highlight])

    const classes = [
      'landing-action',
      highlight ? 'specular-action' : '',
      highlight ? `landing-action--${size}` : '',
      highlight ? `specular-action--${size}` : '',
      disabled ? 'landing-action--disabled' : '',
      disabled && highlight ? 'specular-action--disabled' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ')
    const actionStyle = highlight
      ? ({
          '--specular-action-radius': `${radius}px`,
          '--specular-action-tint': tint,
          '--specular-action-tint-opacity': tintOpacity,
          '--specular-action-blur': `${blur}px`,
          '--specular-action-text-color': textColor,
          ...style,
        } as CSSProperties)
      : style
    const label = highlight ? (
      <span className="landing-action__label specular-action__label">{children}</span>
    ) : (
      children
    )

    if ('href' in elementProps && typeof elementProps.href === 'string') {
      const { href, onClick, tabIndex, ...anchorProps } = elementProps as Omit<
        ActionAnchorProps,
        keyof ActionVisualProps
      >
      const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
        if (disabled) {
          event.preventDefault()
          event.stopPropagation()
          return
        }
        onClick?.(event)
      }

      return (
        <a
          {...anchorProps}
          ref={setElementRef as (element: HTMLAnchorElement | null) => void}
          href={href}
          className={classes}
          style={actionStyle}
          aria-disabled={disabled || undefined}
          tabIndex={disabled ? -1 : tabIndex}
          data-action-highlight={highlight ? 'specular' : 'none'}
          data-specular-state={highlight ? 'fallback' : undefined}
          onClick={handleClick}
        >
          {label}
        </a>
      )
    }

    const { type = 'button', ...buttonProps } = elementProps as Omit<
      ActionButtonProps,
      keyof ActionVisualProps
    >
    return (
      <button
        {...buttonProps}
        ref={setElementRef as (element: HTMLButtonElement | null) => void}
        type={type}
        disabled={disabled}
        className={classes}
        style={actionStyle}
        data-action-highlight={highlight ? 'specular' : 'none'}
        data-specular-state={highlight ? 'fallback' : undefined}
      >
        {label}
      </button>
    )
  },
)

export { Action }
export default Action
