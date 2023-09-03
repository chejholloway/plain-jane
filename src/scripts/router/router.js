import createRouter from 'router5'
import browserPlugin from 'router5-plugin-browser'
import loggerPlugin from 'router5-plugin-logger'

const routes = [
  { name: 'home', path: '/' },
  { name: 'escape-velocity', path: '/escape-velocity' },
  { name: 'parallelism', path: '/parallelism' },
  { name: 'solid-state', path: '/solid-state' },
  { name: 'eventually', path: '/src/pages/eventually/index.html' }
]
const router = createRouter(routes)
const Router = () => {
  router.usePlugin(browserPlugin({ useHash: true }))
  router.usePlugin(loggerPlugin)
  router.start()
}
export default Router
