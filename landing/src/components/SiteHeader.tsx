import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { consoleUrl, documentUrl } from '../siteConfig'
import Action from './Action'

interface SiteHeaderProps {
  siteName: string
  siteLogo: string
  docUrl: string
  registrationEnabled: boolean
  consoleHomePath: '/dashboard' | '/admin/dashboard' | null
  channelMonitorEnabled: boolean
  announcementsOpen: boolean
  onOpenAnnouncements: () => void
  onLogoError: () => void
}

interface NavigationLinksProps {
  docUrl: string
  registrationEnabled: boolean
  consoleHomePath: '/dashboard' | '/admin/dashboard' | null
  channelMonitorEnabled: boolean
  announcementsOpen: boolean
  onOpenAnnouncements: () => void
  onNavigate?: () => void
}

function NavigationLinks({
  docUrl,
  registrationEnabled,
  consoleHomePath,
  channelMonitorEnabled,
  announcementsOpen,
  onOpenAnnouncements,
  onNavigate,
}: NavigationLinksProps) {
  return (
    <>
      <a href="#top" onClick={onNavigate}>首页</a>
      <a href="#quick-start" onClick={onNavigate}>接入</a>
      <a href="#pricing" onClick={onNavigate}>定价｜模型广场</a>
      {channelMonitorEnabled ? <a href="#status" onClick={onNavigate}>渠道状态</a> : null}
      {docUrl ? (
        <a href={documentUrl(docUrl)} onClick={onNavigate}>文档</a>
      ) : null}
      <button
        className="nav-announcements"
        type="button"
        aria-haspopup="dialog"
        aria-expanded={announcementsOpen}
        aria-controls="public-announcements-dialog"
        onClick={() => {
          onNavigate?.()
          onOpenAnnouncements()
        }}
      >
        公告
      </button>
      {consoleHomePath ? (
        <Action
          className="nav-primary"
          href={consoleUrl(consoleHomePath)}
          onClick={onNavigate}
        >
          登录控制台
        </Action>
      ) : registrationEnabled ? (
        <a href={consoleUrl('/login')} onClick={onNavigate}>登录</a>
      ) : (
        <Action
          className="nav-primary"
          href={consoleUrl('/login')}
          onClick={onNavigate}
        >
          登录控制台
        </Action>
      )}
      {!consoleHomePath && registrationEnabled ? (
        <Action
          className="nav-primary"
          href={consoleUrl('/register')}
          onClick={onNavigate}
        >
          注册账号
        </Action>
      ) : null}
    </>
  )
}

export default function SiteHeader({
  siteName,
  siteLogo,
  docUrl,
  registrationEnabled,
  consoleHomePath,
  channelMonitorEnabled,
  announcementsOpen,
  onOpenAnnouncements,
  onLogoError,
}: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const mobileNavRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 20)
    updateScrolled()
    window.addEventListener('scroll', updateScrolled, { passive: true })
    return () => window.removeEventListener('scroll', updateScrolled)
  }, [])

  useEffect(() => {
    const mobileQuery = window.matchMedia?.('(max-width: 767px)')
    if (!mobileQuery) return

    const closeMenuOnDesktop = (event: MediaQueryListEvent) => {
      if (!event.matches) setMenuOpen(false)
    }

    if (typeof mobileQuery.addEventListener === 'function') {
      mobileQuery.addEventListener('change', closeMenuOnDesktop)
      return () => mobileQuery.removeEventListener('change', closeMenuOnDesktop)
    }

    mobileQuery.addListener(closeMenuOnDesktop)
    return () => mobileQuery.removeListener(closeMenuOnDesktop)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const previousOverflow = document.body.style.overflow
    const hadMenuOpenClass = document.body.classList.contains('mobile-menu-open')
    const backgroundElements = [
      document.querySelector<HTMLElement>('.skip-link'),
      document.querySelector<HTMLElement>('.announcement-bar'),
      document.querySelector<HTMLElement>('.wordmark'),
      document.querySelector<HTMLElement>('.desktop-nav'),
      document.querySelector<HTMLElement>('main'),
      document.querySelector<HTMLElement>('footer'),
    ].filter((element): element is HTMLElement => element !== null)
    const previousInertStates = backgroundElements.map((element) => ({
      element,
      inert: element.inert,
    }))

    document.body.style.overflow = 'hidden'
    document.body.classList.add('mobile-menu-open')
    backgroundElements.forEach((element) => {
      element.inert = true
    })
    menuButtonRef.current?.focus({ preventScroll: true })

    const focusableMenuElements = () => {
      const menuLinks = mobileNavRef.current
        ? [...mobileNavRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')]
        : []
      return menuButtonRef.current ? [menuButtonRef.current, ...menuLinks] : menuLinks
    }

    const handleMenuKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setMenuOpen(false)
        return
      }
      if (event.key !== 'Tab') return

      const focusableElements = focusableMenuElements()
      if (!focusableElements.length) return
      const activeIndex = focusableElements.indexOf(document.activeElement as HTMLElement)
      const shouldWrapBackward = event.shiftKey && activeIndex <= 0
      const shouldWrapForward = !event.shiftKey && activeIndex === focusableElements.length - 1
      const shouldRecoverFocus = activeIndex === -1
      if (!shouldWrapBackward && !shouldWrapForward && !shouldRecoverFocus) return

      event.preventDefault()
      const destination = shouldWrapBackward
        ? focusableElements[focusableElements.length - 1]
        : focusableElements[0]
      destination?.focus({ preventScroll: true })
    }

    const keepFocusInsideMenu = (event: FocusEvent) => {
      const focusableElements = focusableMenuElements()
      if (focusableElements.includes(event.target as HTMLElement)) return
      menuButtonRef.current?.focus({ preventScroll: true })
    }

    document.addEventListener('keydown', handleMenuKeyDown)
    document.addEventListener('focusin', keepFocusInsideMenu)
    return () => {
      document.body.style.overflow = previousOverflow
      if (!hadMenuOpenClass) document.body.classList.remove('mobile-menu-open')
      previousInertStates.forEach(({ element, inert }) => {
        element.inert = inert
      })
      document.removeEventListener('keydown', handleMenuKeyDown)
      document.removeEventListener('focusin', keepFocusInsideMenu)
      menuButtonRef.current?.focus({ preventScroll: true })
    }
  }, [menuOpen])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}${menuOpen ? ' is-menu-open' : ''}`}>
      <div className="header-inner">
        <a className="wordmark" href="#top" aria-label={`${siteName} 首页`}>
          {siteLogo ? (
            <img className="wordmark-logo" src={siteLogo} alt="" onError={onLogoError} />
          ) : null}
          <span>{siteName}</span>
        </a>

        <nav className="desktop-nav" aria-label="主要导航">
          <NavigationLinks
            docUrl={docUrl}
            registrationEnabled={registrationEnabled}
            consoleHomePath={consoleHomePath}
            channelMonitorEnabled={channelMonitorEnabled}
            announcementsOpen={announcementsOpen}
            onOpenAnnouncements={onOpenAnnouncements}
          />
        </nav>

        <button
          ref={menuButtonRef}
          className="menu-button"
          type="button"
          aria-label={menuOpen ? '关闭导航' : '打开导航'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <nav
        ref={mobileNavRef}
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="移动导航"
        hidden={!menuOpen}
      >
        <NavigationLinks
          docUrl={docUrl}
          registrationEnabled={registrationEnabled}
          consoleHomePath={consoleHomePath}
          channelMonitorEnabled={channelMonitorEnabled}
          announcementsOpen={announcementsOpen}
          onOpenAnnouncements={onOpenAnnouncements}
          onNavigate={() => setMenuOpen(false)}
        />
      </nav>
    </header>
  )
}
