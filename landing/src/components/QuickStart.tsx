import {
  BookOpen,
  Check,
  CheckCircle2,
  Copy,
  GitBranch,
  KeyRound,
  Plus,
  Terminal,
  type LucideIcon,
} from 'lucide-react'
import { useEffect, useRef, useState, type KeyboardEvent } from 'react'
import { DISPLAY_API_ENDPOINT, consoleUrl, documentUrl } from '../siteConfig'
import Action from './Action'
import ShinyText from './ShinyText'
import { copyText } from './copyText'

type IntegrationId = 'cc-switch' | 'codex-plus-plus' | 'codex-cli' | 'claude-code'

interface IntegrationGuide {
  id: IntegrationId
  label: string
  icon: LucideIcon
  steps: readonly string[]
}

const INTEGRATION_GUIDES: readonly IntegrationGuide[] = [
  {
    id: 'cc-switch',
    label: 'CC-Switch',
    icon: GitBranch,
    steps: [
      '创建零一 API Key，并选择可用分组。',
      '在“使用密钥”中选择 CC-Switch。',
      '在已登录的控制台内完成导入与确认。',
    ],
  },
  {
    id: 'codex-plus-plus',
    label: 'Codex++',
    icon: Plus,
    steps: [
      '创建零一 API Key，并选择可用分组。',
      '确认 Codex++ 支持自定义 API 地址与密钥。',
      '在对应字段中完成填写并新建任务验证连接。',
    ],
  },
  {
    id: 'codex-cli',
    label: 'Codex CLI',
    icon: Terminal,
    steps: [
      '创建零一 API Key，并选择可用分组。',
      '在“使用密钥”中选择 Codex CLI 配置。',
      '保存配置后，重新启动 Codex CLI。',
    ],
  },
  {
    id: 'claude-code',
    label: 'Claude Code CLI',
    icon: Terminal,
    steps: [
      '创建零一 API Key，并选择可用分组。',
      '在“使用密钥”中选择 Claude Code CLI 配置。',
      '保存环境变量或配置文件后，重新启动 Claude Code CLI。',
    ],
  },
]

interface QuickStartProps {
  docUrl: string
}

export default function QuickStart({ docUrl }: QuickStartProps) {
  const [activeGuideId, setActiveGuideId] = useState<IntegrationId>('cc-switch')
  const [endpointCopied, setEndpointCopied] = useState(false)
  const copyTimerRef = useRef<number | null>(null)
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const activeGuide =
    INTEGRATION_GUIDES.find((guide) => guide.id === activeGuideId) ?? INTEGRATION_GUIDES[0]!
  const docsHref = docUrl ? documentUrl(docUrl) : '#api-endpoint'

  useEffect(
    () => () => {
      if (copyTimerRef.current !== null) window.clearTimeout(copyTimerRef.current)
    },
    [],
  )

  const selectGuide = (id: IntegrationId) => {
    if (copyTimerRef.current !== null) window.clearTimeout(copyTimerRef.current)
    copyTimerRef.current = null
    setEndpointCopied(false)
    setActiveGuideId(id)
  }

  const copyEndpoint = async () => {
    if (!(await copyText(DISPLAY_API_ENDPOINT))) return

    setEndpointCopied(true)
    if (copyTimerRef.current !== null) window.clearTimeout(copyTimerRef.current)
    copyTimerRef.current = window.setTimeout(() => setEndpointCopied(false), 1_800)
  }

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex: number | null = null
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % INTEGRATION_GUIDES.length
    if (event.key === 'ArrowLeft') {
      nextIndex = (index - 1 + INTEGRATION_GUIDES.length) % INTEGRATION_GUIDES.length
    }
    if (event.key === 'Home') nextIndex = 0
    if (event.key === 'End') nextIndex = INTEGRATION_GUIDES.length - 1
    if (nextIndex === null) return

    event.preventDefault()
    const nextGuide = INTEGRATION_GUIDES[nextIndex]
    if (!nextGuide) return
    selectGuide(nextGuide.id)
    tabRefs.current[nextIndex]?.focus()
  }

  return (
    <section id="quick-start" className="section quick-start" aria-labelledby="quick-start-title">
      <div className="integration-panel" data-reveal>
        <div className="integration-tabs" role="tablist" aria-label="接入工具">
          {INTEGRATION_GUIDES.map((guide, index) => {
            const Icon = guide.icon
            return (
              <button
                key={guide.id}
                ref={(button) => {
                  tabRefs.current[index] = button
                }}
                id={`integration-tab-${guide.id}`}
                className="integration-tab"
                type="button"
                role="tab"
                aria-selected={activeGuide.id === guide.id}
                aria-controls={`integration-preview-panel-${guide.id}`}
                tabIndex={activeGuide.id === guide.id ? 0 : -1}
                onClick={() => selectGuide(guide.id)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
              >
                <Icon aria-hidden="true" />
                <span>{guide.label}</span>
              </button>
            )
          })}
        </div>

        <div className="integration-body">
          <div key={activeGuide.id} className="integration-copy">
            <p className="integration-badge">
              <CheckCircle2 aria-hidden="true" />
              接入指南
            </p>
            <h2 id="quick-start-title">
              <ShinyText speed={2} spread={120}>
                <span className="integration-api-phrase">把零一 API 接入</span>{' '}
                <span className="integration-tool-name">{activeGuide.label}</span>
              </ShinyText>
            </h2>

            <ol className="integration-steps">
              {activeGuide.steps.map((step, index) => (
                <li key={step}>
                  <span aria-hidden="true">{index + 1}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>

            <div className="integration-actions">
              <Action
                className="integration-primary-action"
                href={consoleUrl('/keys')}
              >
                <KeyRound aria-hidden="true" />
                创建 API Key
              </Action>
              <Action
                className="integration-secondary-action"
                href={docsHref}
              >
                <BookOpen aria-hidden="true" />
                查看接入教学文档
              </Action>
            </div>
          </div>

          {INTEGRATION_GUIDES.map((guide) => {
            const isActive = guide.id === activeGuide.id
            return (
              <section
                key={guide.id}
                id={`integration-preview-panel-${guide.id}`}
                className="integration-preview"
                role="tabpanel"
                aria-labelledby={`integration-tab-${guide.id}`}
                hidden={!isActive}
              >
                <header className="integration-preview-header">
                  <h3>零一 API 路由</h3>
                </header>

                <section className="integration-terminal" aria-label={`${guide.label} 连接成功终端示例`}>
                  <div className="integration-terminal-chrome" aria-hidden="true">
                    <span className="terminal-window-controls">
                      <i />
                      <i />
                      <i />
                    </span>
                    <span className="terminal-window-title">terminal</span>
                  </div>
                  <div className="integration-terminal-body">
                    <p className="terminal-command">
                      <span aria-hidden="true">$</span>
                      <code>curl -X POST {DISPLAY_API_ENDPOINT}/v1/messages</code>
                    </p>
                    <p className="terminal-comment"># Routing to Zero-One API...</p>
                    <p className="terminal-success" aria-label="连接成功示例">
                      <strong>200 OK</strong>
                      <code>{'{ "content": "Connected." }'}</code>
                    </p>
                    <p className="terminal-prompt" aria-hidden="true">
                      <span>$</span><i />
                    </p>
                  </div>
                </section>

                <div id={isActive ? 'api-endpoint' : undefined} className="integration-endpoint">
                  <div>
                    <span>API 地址</span>
                    <code>{DISPLAY_API_ENDPOINT}</code>
                  </div>
                  <button
                    type="button"
                    onClick={copyEndpoint}
                    aria-label={
                      endpointCopied
                        ? '接入 API 地址已复制'
                        : '复制接入 API 地址'
                    }
                  >
                    {endpointCopied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
                    <span>{endpointCopied ? '已复制地址' : '复制地址'}</span>
                  </button>
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </section>
  )
}
