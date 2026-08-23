import { createReadStream } from 'node:fs'
import { stat } from 'node:fs/promises'
import { createServer } from 'node:http'
import { dirname, extname, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const moduleDirectory = dirname(fileURLToPath(import.meta.url))
const consoleRoot = resolve(moduleDirectory, '../deploy/zero-one/recovered-frontend/console')
const portArgument = process.argv.indexOf('--port')
const port = Number(portArgument >= 0 ? process.argv[portArgument + 1] : 4173)
const localOnlyContentSecurityPolicy = "default-src 'self'; worker-src 'self' blob:; script-src 'self' 'nonce-hJm3vqvOCSJtMiorHL9OJA=='; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self'; frame-src 'none'; frame-ancestors 'none'; object-src 'none'; base-uri 'self'; form-action 'self'"
const contentTypes = new Map([
  ['.css', 'text/css; charset=utf-8'],
  ['.html', 'text/html; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.svg', 'image/svg+xml'],
  ['.png', 'image/png'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.webp', 'image/webp'],
])

async function existingFile(path) {
  try {
    return (await stat(path)).isFile()
  } catch {
    return false
  }
}

const server = createServer(async (request, response) => {
  const pathname = decodeURIComponent(new URL(request.url || '/', 'http://127.0.0.1').pathname)
  const requestedPath = resolve(consoleRoot, `.${pathname}`)
  if (requestedPath !== consoleRoot && !requestedPath.startsWith(`${consoleRoot}${sep}`)) {
    response.writeHead(400).end('invalid path')
    return
  }

  const isAsset = pathname.startsWith('/assets/')
  const filePath = await existingFile(requestedPath)
    ? requestedPath
    : isAsset
      ? null
      : resolve(consoleRoot, 'index.html')

  if (!filePath) {
    response.writeHead(404, { 'Cache-Control': 'no-store' }).end('not found')
    return
  }

  const headers = {
    'Cache-Control': 'no-store',
    'Content-Type': contentTypes.get(extname(filePath).toLowerCase()) || 'application/octet-stream',
  }
  if (filePath.endsWith('index.html')) {
    headers['Content-Security-Policy'] = localOnlyContentSecurityPolicy
  }
  response.writeHead(200, headers)
  if (request.method === 'HEAD') {
    response.end()
    return
  }
  createReadStream(filePath).pipe(response)
})

server.listen(port, '127.0.0.1', () => {
  console.log(`Recovered Console preview listening on http://127.0.0.1:${port}`)
})

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => server.close(() => process.exit(0)))
}
