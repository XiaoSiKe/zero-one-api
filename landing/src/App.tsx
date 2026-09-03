import { useCallback, useEffect, useRef, useState } from 'react'
import bundledBrandMark from './assets/zero-one-brand-mark.jpg'
import AnnouncementBar from './components/AnnouncementBar'
import {
  SiteFooter,
  StatusSection,
  ValuePricingSection,
} from './components/ContentSections'
import Hero from './components/Hero'
import PricingSection from './components/PricingSection'
import PublicAnnouncementsDialog from './components/PublicAnnouncementsDialog'
import QuickStart from './components/QuickStart'
import SiteHeader from './components/SiteHeader'
import Threads from './components/Threads'
import { DEFAULT_PUBLIC_SETTINGS, type PublicSettings } from './lib/publicSettings'
import { usePublicSettings } from './lib/usePublicSettings'
import Action from './components/Action'
import type { ModelPlazaData } from './lib/modelPlaza'
import { canLoadBrandImage } from './siteConfig'

interface AppProps {
  initialSettings: PublicSettings | null
}

function readConsoleHomePath(): '/dashboard' | '/admin/dashboard' | null {
  try {
    if (!window.localStorage.getItem('auth_token')) return null
    const user = JSON.parse(window.localStorage.getItem('auth_user') ?? 'null') as {
      role?: unknown
    } | null
    if (!user || typeof user !== 'object') return null
    return user.role === 'admin' ? '/admin/dashboard' : '/dashboard'
  } catch {
    return null
  }
}

export default function App({ initialSettings }: AppProps) {
  const { settings: resolvedSettings, retry: retrySettings } = usePublicSettings(initialSettings)
  const settings = resolvedSettings ?? DEFAULT_PUBLIC_SETTINGS
  const [modelPlazaData, setModelPlazaData] = useState<ModelPlazaData | null>(null)
  const [failedLogoUrls, setFailedLogoUrls] = useState<ReadonlySet<string>>(() => new Set())
  const [publicAnnouncementsOpen, setPublicAnnouncementsOpen] = useState(false)
  const [consoleHomePath, setConsoleHomePath] = useState(readConsoleHomePath)
  const shellRef = useRef<HTMLDivElement>(null)

  const openPublicAnnouncements = useCallback(() => setPublicAnnouncementsOpen(true), [])
  const closePublicAnnouncements = useCallback(() => setPublicAnnouncementsOpen(false), [])

  useEffect(() => {
    const refreshSession = () => setConsoleHomePath(readConsoleHomePath())
    window.addEventListener('storage', refreshSession)
    window.addEventListener('focus', refreshSession)
    return () => {
      window.removeEventListener('storage', refreshSession)
      window.removeEventListener('focus', refreshSession)
    }
  }, [])

  useEffect(() => {
    const elements = [...document.querySelectorAll<HTMLElement>('[data-reveal]')]
    const reducedMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion || typeof IntersectionObserver !== 'function') {
      elements.forEach((element) => element.classList.add('is-revealed'))
      return
    }

    elements.forEach((element) => {
      const delay = Number(element.dataset.revealDelay ?? 0)
      element.style.setProperty('--reveal-delay', `${Math.max(0, delay)}ms`)
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          ;(entry.target as HTMLElement).classList.add('is-revealed')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -40px 0px', threshold: 0.15 },
    )
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [resolvedSettings === null, settings.publicChannelStatusEnabled])

  const configuredLogo =
    canLoadBrandImage(settings.siteLogo) && !failedLogoUrls.has(settings.siteLogo)
      ? settings.siteLogo
      : ''
  const visibleLogo =
    configuredLogo || (!failedLogoUrls.has(bundledBrandMark) ? bundledBrandMark : '')

  const siteSettings = { ...settings, siteLogo: visibleLogo }

  return (
    <div ref={shellRef} className="site-shell">
      <Threads
        color={[1, 1, 1]}
        amplitude={1}
        distance={0}
        enableMouseInteraction
        interactionTargetRef={shellRef}
        persistent
        className="threads-page-background"
      />
      <div className="site-background-shade" aria-hidden="true" />
      <div className="site-content">
        <a className="skip-link" href="#main-content">跳到主要内容</a>

        <AnnouncementBar
          enabled={siteSettings.landingNoticeEnabled}
          text={siteSettings.landingNoticeText}
          url={siteSettings.landingNoticeUrl}
        />
        <SiteHeader
          siteName={siteSettings.siteName}
          siteLogo={siteSettings.siteLogo}
          docUrl={siteSettings.docUrl}
          registrationEnabled={siteSettings.registrationEnabled}
          consoleHomePath={consoleHomePath}
          channelMonitorEnabled={siteSettings.publicChannelStatusEnabled}
          announcementsOpen={publicAnnouncementsOpen}
          onOpenAnnouncements={openPublicAnnouncements}
          onLogoError={() => {
            if (!visibleLogo) return
            setFailedLogoUrls((failedUrls) => new Set(failedUrls).add(visibleLogo))
          }}
        />

        <main id="main-content">
          <div className="hero-stage">
            <Hero
              docUrl={siteSettings.docUrl}
              registrationEnabled={siteSettings.registrationEnabled}
              modelPlazaEnabled={siteSettings.modelPlazaEnabled}
              consoleHomePath={consoleHomePath}
            />
            <QuickStart docUrl={siteSettings.landingTutorialUrl || siteSettings.docUrl} />
          </div>
          {resolvedSettings === null ? (
            <section id="pricing" className="section pricing-section" aria-label="官网数据读取失败">
              <div className="pricing-message" role="status">
                <span className="pricing-message-mark" aria-hidden="true" />
                <div>
                  <h2>官网数据暂时无法加载</h2>
                  <p>实时价格和渠道状态暂时无法读取，正在自动重试。</p>
                </div>
                <Action type="button" onClick={retrySettings}>重新读取</Action>
              </div>
            </section>
          ) : <PricingSection
            enabled={settings.modelPlazaEnabled}
            requireAuth={settings.modelPlazaRequireAuth}
            serverUtcOffset={settings.serverUtcOffset}
            onModelPlazaDataChange={setModelPlazaData}
          />}
          <ValuePricingSection modelPlazaData={settings.modelPlazaEnabled && !settings.modelPlazaRequireAuth ? modelPlazaData : null} />
          {settings.publicChannelStatusEnabled ? (
            <StatusSection enabled={settings.publicChannelStatusEnabled} />
          ) : null}
        </main>

        <SiteFooter
          siteName={siteSettings.siteName}
          siteLogo={siteSettings.siteLogo}
          subtitle={siteSettings.siteSubtitle}
          docUrl={siteSettings.docUrl}
          modelPlazaEnabled={siteSettings.modelPlazaEnabled}
          channelMonitorEnabled={siteSettings.publicChannelStatusEnabled}
          consoleHomePath={consoleHomePath}
        />
      </div>
      <PublicAnnouncementsDialog
        open={publicAnnouncementsOpen}
        onClose={closePublicAnnouncements}
      />
    </div>
  )
}
