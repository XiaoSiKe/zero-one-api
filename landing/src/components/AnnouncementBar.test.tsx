import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AnnouncementBar from './AnnouncementBar'

describe('AnnouncementBar', () => {
  beforeEach(() => localStorage.clear())
  afterEach(cleanup)

  it('dismisses the current announcement and remembers its fingerprint', async () => {
    const user = userEvent.setup()
    const props = {
      enabled: true,
      text: 'Claude Code 与 Codex CLI 接入配置已支持一键复制。',
      url: 'https://api.01yapi.com/keys',
    }
    const view = render(<AnnouncementBar {...props} />)

    await user.click(screen.getByRole('button', { name: '关闭公告' }))
    expect(screen.queryByRole('complementary', { name: '站点公告' })).toBeNull()

    view.unmount()
    render(<AnnouncementBar {...props} />)
    expect(screen.queryByText(props.text)).toBeNull()
  })

  it('shows a changed announcement even when the previous fingerprint was dismissed', async () => {
    const user = userEvent.setup()
    const { rerender } = render(
      <AnnouncementBar enabled text="旧公告" url="/old-notice" />,
    )

    await user.click(screen.getByRole('button', { name: '关闭公告' }))
    expect(screen.queryByText('旧公告')).toBeNull()

    rerender(<AnnouncementBar enabled text="新公告" url="/new-notice" />)
    expect(await screen.findByText('新公告')).toBeTruthy()
    expect(screen.getByRole('link', { name: '查看详情' }).getAttribute('href')).toBe('/new-notice')
  })

  it('keeps valid notice text while hiding an unsafe link', () => {
    render(<AnnouncementBar enabled text="安全正文" url="javascript:alert(1)" />)

    expect(screen.getByText('安全正文')).toBeTruthy()
    expect(screen.queryByRole('link', { name: '查看详情' })).toBeNull()
  })
})
