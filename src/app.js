import { render } from 'lit-html'
import Router from './scripts/router/router'
import log from 'loglevel'

import LandingPage from './templates/landing-page'
import './styles/styles.css'

const template = LandingPage
const app = document.getElementById('app')

log.warn('Router: ', Router)
render(template, app)
