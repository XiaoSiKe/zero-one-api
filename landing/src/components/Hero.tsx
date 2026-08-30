import { ArrowRight, Check, Copy } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { DISPLAY_API_ENDPOINT, consoleUrl, documentUrl } from '../siteConfig'
import { copyText } from './copyText'
import EchoText from './EchoText'
import Action from './Action'

interface HeroProps {
  docUrl: string
  registrationEnabled: boolean
  modelPlazaEnabled: boolean
  consoleHomePath: '/dashboard' | '/admin/dashboard' | null
}

export default function Hero({
  docUrl,
  registrationEnabled,
  modelPlazaEnabled,
  consoleHomePath,
}: HeroProps) {
  const heroRef = useRef<HTMLElement>(null)
  const [endpointCopied, setEndpointCopied] = useState(false)
  const copyTimerRef = useRef<number | null>(null)

  useEffect(
    () => () => {
      if (copyTimerRef.current !== null) window.clearTimeout(copyTimerRef.current)
    },
    [],
  )

  const copyEndpoint = async () => {
    if (!(await copyText(DISPLAY_API_ENDPOINT))) return

    setEndpointCopied(true)
    if (copyTimerRef.current !== null) window.clearTimeout(copyTimerRef.current)
    copyTimerRef.current = window.setTimeout(() => setEndpointCopied(false), 1_800)
  }

  return (
    <section ref={heroRef} id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="hero-kicker" data-hero-reveal="0">AI 模型统一接入层</p>
        <h1
          id="hero-title"
          className="hero-heading"
          aria-label="零一 API，从零到一，连接每一次模型调用"
          data-hero-reveal="1"
        >
          <span className="hero-echo-stack">
            <EchoText
              text="零一 API"
              className="hero-brand"
              interactionTargetRef={heroRef}
              echoes={10}
              lag={0.21}
              offset={28}
              fade={0.72}
              blur={2.6}
              tint="#8f83ff"
              duration={900}
              fontSize="clamp(64px, 7vw, 96px)"
              fontWeight={850}
              color="#ffffff"
              style={{ letterSpacing: '-0.035em', lineHeight: 0.94 }}
            />
            <EchoText
              text="从零到一，连接每一次模型调用"
              className="hero-tagline"
              interactionTargetRef={heroRef}
              echoes={5}
              lag={0.2}
              offset={17}
              fade={0.74}
              blur={1.6}
              tint="#9ba8ff"
              duration={900}
              fontSize="clamp(17px, 3.3vw, 48px)"
              fontWeight={650}
              color="#d7d7dc"
              style={{ letterSpacing: '-0.02em', lineHeight: 1.12, marginTop: '0.42em' }}
            />
          </span>
        </h1>

        <div className="hero-actions" data-hero-reveal="2">
          {consoleHomePath ? (
            <Action
              href={consoleUrl(consoleHomePath)}
            >
              登录控制台
            </Action>
          ) : registrationEnabled ? (
            <Action
              href={consoleUrl('/register')}
            >
              注册账号
            </Action>
          ) : (
            <Action
              href={consoleUrl('/login')}
            >
              登录控制台
            </Action>
          )}
          {docUrl ? (
            <Action
              href={documentUrl(docUrl)}
            >
              开源知识库
            </Action>
          ) : (
            <Action href="#quick-start">
              查看接入方式
            </Action>
          )}
          {modelPlazaEnabled ? (
            <a className="text-action" href="#pricing">
              查看模型
              <ArrowRight aria-hidden="true" />
            </a>
          ) : null}
        </div>

        <div className="hero-endpoint" data-hero-reveal="3">
          <div className="hero-endpoint-address">
            <span>API 地址：</span>
            <code>{DISPLAY_API_ENDPOINT}</code>
          </div>
          <Action
            className="hero-endpoint-copy"
            type="button"
            aria-label={endpointCopied ? '首页 API 地址已复制' : '复制首页 API 地址'}
            onClick={copyEndpoint}
          >
            {endpointCopied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
            {endpointCopied ? '已复制地址' : '复制地址'}
          </Action>
        </div>

      </div>
    </section>
  )
}
