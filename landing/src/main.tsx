import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { fetchPublicSettings } from './lib/publicSettings'
import './styles.css'

async function mountLanding() {
  const settings = await fetchPublicSettings()
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App initialSettings={settings} />
    </StrictMode>,
  )
}

void mountLanding()
