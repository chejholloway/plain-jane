import { html } from 'lit-html'
import * as header from './header.styles'

const Header = html`
  <header id="header">
    <div id="section1" class=${header.section1}></div>
    <div id="section2" class=${header.section2}></div>
    <div class=${header.links} xyz="fade up big">
      <a href="#">
        <img class="block w-8 h-8" src="img/logo.svg" alt="" />
      </a>
      <a href="#">
        <svg
          class="w-6 h-6 fill-current md:hidden"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </a>
      <div class="flex items-center mb-4 md:block">
        <a class="mr-8 font-semibold hover:text-white" href="#"
          >Documentation</a
        >
        <a
          class="bg-stanford-600 inline-block px-6 py-2 font-semibold text-center text-white rounded-sm transition duration-150 ease-in-out hover:bg-stanford-500"
          href="#"
          >Sign up</a
        >
      </div>
    </div>
    <h1 id="company-name" class=${header.title} xyz="fade up big">
      OmBm <span class=${header.highlight}>Studios</span>
    </h1>
    <p id="tagline" class=${header.tagline} xyz="fade up big">
      Our landing page template works on all devices, so you only have to set it
      up once, and get beautiful results forever.
    </p>
    <div id="herolinks" class=${header.herolinks} xyz="fade up big">
      <a
        class="w-full mb-4 whitespace-no-wrap bg-stanford-600 inline-block px-6 font-semibold text-center text-white rounded-sm transition duration-150 ease-in-out py-3 md:w-auto hover:bg-stanford-500 sm:mr-2"
        href="#"
      >
        Get started
      </a>
      <a
        class="w-full mb-4 whitespace-no-wrap bg-gray-800 inline-block px-6 font-semibold text-center text-white rounded-sm transition duration-150 ease-in-out py-3 md:w-auto hover:bg-gray-600 sm:ml-2"
        href="#"
      >
        View on Github
      </a>
    </div>
  </header>
`

export default Header
