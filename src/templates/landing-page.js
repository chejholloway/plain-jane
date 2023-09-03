import { html } from 'lit-html'
import Header from './components/headers/landing-page/header'

const header = Header
const LandingPage = html`
  <section id="landing-page">
    <div class="container">
      ${header}
      <div class="mb-16 animated fadeIn" style="animation-delay: 1000ms">
        <img
          class="block w-full max-w-5xl mx-auto rounded"
          src="img/video-placeholder.jpg"
          alt=""
        />
      </div>
      <div>
        <h2
          class="mb-4 text-3xl font-extrabold text-center text-white sm:text-4xl md:text-5xl"
        >
          Build up the whole picture
        </h2>
        <p
          class="text-xl text-gray-500 text-center mx-8 mb-12 max-w-sm sm:max-w-xl"
        >
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum — semper quis lectus nulla
          at volutpat diam ut venenatis.
        </p>
        <ul
          class="flex flex-col flex-wrap justify-center mb-20 text-center border-b border-gray-900 sm:flex-row"
        >
          <li
            class="w-full px-6 mb-8 animated fadeIn sm:mb-16 md:w-1/2 lg:w-1/3"
          >
            <span
              class="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white bg-gray-700 rounded-full"
            >
              <img src="img/feature-tile-icon-01.svg" alt="" />
            </span>
            <h3 class="mb-2 text-2xl font-bold text-white">Robust Workflow</h3>
            <p class="max-w-xs mx-auto text-lg text-gray-500">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </p>
          </li>
          <li
            class="w-full px-6 mb-8 animated fadeIn sm:mb-16 md:w-1/2 lg:w-1/3"
          >
            <span
              class="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white bg-gray-700 rounded-full"
            >
              <img src="img/feature-tile-icon-02.svg" alt="" />
            </span>
            <h3 class="mb-2 text-2xl font-bold text-white">Robust Workflow</h3>
            <p class="max-w-xs mx-auto text-lg text-gray-500">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </p>
          </li>
          <li
            class="w-full px-6 mb-8 sm:mb-16 animated fadeIn md:w-1/2 lg:w-1/3"
          >
            <span
              class="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white bg-gray-700 rounded-full"
            >
              <img src="img/feature-tile-icon-03.svg" alt="" />
            </span>
            <h3 class="mb-2 text-2xl font-bold text-white">Robust Workflow</h3>
            <p class="max-w-xs mx-auto text-lg text-gray-500">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </p>
          </li>
          <li
            class="w-full px-6 mb-8 sm:mb-16 animated fadeIn md:w-1/2 lg:w-1/3"
          >
            <span
              class="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white bg-gray-700 rounded-full"
            >
              <img src="img/feature-tile-icon-04.svg" alt="" />
            </span>
            <h3 class="mb-2 text-2xl font-medium text-white">
              Robust Workflow
            </h3>
            <p class="max-w-xs mx-auto text-lg text-gray-500">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </p>
          </li>
          <li
            class="w-full px-6 mb-8 sm:mb-16 animated fadeIn md:w-1/2 lg:w-1/3"
          >
            <span
              class="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white bg-gray-700 rounded-full"
            >
              <img src="img/feature-tile-icon-05.svg" alt="" />
            </span>
            <h3 class="mb-2 text-2xl font-medium text-white">
              Robust Workflow
            </h3>
            <p class="max-w-xs mx-auto text-lg text-gray-500">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </p>
          </li>
          <li
            class="w-full px-8 mb-8 sm:mb-16 animated fadeIn md:w-1/2 lg:w-1/3"
          >
            <span
              class="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl text-white bg-gray-700 rounded-full"
            >
              <img src="img/feature-tile-icon-06.svg" alt="" />
            </span>
            <h3 class="mb-2 text-2xl font-medium text-white">
              Robust Workflow
            </h3>
            <p class="max-w-xs mx-auto text-lg text-gray-500">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </p>
          </li>
        </ul>
      </div>
      <div class="mb-16 border-b border-gray-800">
        <h2
          class="mb-4 text-3xl font-extrabold text-center text-white sm:text-4xl md:text-5xl"
        >
          Workflow that just works
        </h2>
        <p
          class="text-xl text-gray-500 text-center mx-8 mb-12 max-w-sm sm:max-w-xl"
        >
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum — semper quis lectus nulla
          at volutpat diam ut venenatis.
        </p>
        <div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
          <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
            <img
              class="rounded-sm"
              src="img/features-split-image-01.png"
              alt=""
            />
          </div>
          <div
            class="flex flex-col justify-center mb-8 sm:w-1/2 md:w-7/12 sm:pr-16"
          >
            <p
              class="mb-2 text-sm font-semibold leading-none text-center text-gray-600 uppercase sm:text-left"
            >
              Lightning fast workflow
            </p>
            <h3
              class="mb-4 text-3xl font-extrabold text-center text-white sm:text-left md:text-4xl"
            >
              Data-driven insights
            </h3>
            <p class="text-xl text-gray-500 md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
          <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12">
            <img
              class="rounded-sm"
              src="img/features-split-image-02.png"
              alt=""
            />
          </div>
          <div
            class="flex flex-col justify-center mb-8 sm:w-1/2 md:w-7/12 sm:pl-16"
          >
            <p
              class="mb-2 text-sm font-semibold leading-none text-center text-gray-600 uppercase sm:text-left"
            >
              Lightning fast workflow
            </p>
            <h3
              class="mb-4 text-3xl font-extrabold text-center text-white sm:text-left md:text-4xl"
            >
              Data-driven insights
            </h3>
            <p class="text-xl text-gray-500 md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
          <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
            <img
              class="rounded-sm"
              src="img/features-split-image-03.png"
              alt=""
            />
          </div>
          <div
            class="flex flex-col justify-center mb-8 sm:w-1/2 md:w-7/12 sm:pr-16"
          >
            <p
              class="mb-2 text-sm font-semibold leading-none text-center text-gray-600 uppercase sm:text-left"
            >
              Lightning fast workflow
            </p>
            <h3
              class="mb-4 text-3xl font-extrabold text-center text-white sm:text-left md:text-4xl"
            >
              Data-driven insights
            </h3>
            <p class="text-xl text-gray-500 md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <div class="mb-16">
        <h2
          class="mb-4 text-3xl font-extrabold text-center text-white sm:text-4xl md:text-5xl"
        >
          Customer testimonials
        </h2>
        <p
          class=" text-xl text-gray-500 text-center mx-8 mb-12 max-w-sm sm:max-w-xl"
        >
          Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper
          quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.
        </p>
        <div
          class="flex flex-col justify-center -ml-4 -mr-4 md:flex-row md:flex-wrap"
        >
          <div
            class="max-w-sm p-4 mx-auto animated fadeIn md:max-w-full md:mx-0 md:w-1/2 lg:w-1/3"
          >
            <div class="p-8 bg-gray-800">
              <div class="mb-8 text-gray-600">
                <svg
                  class="fill-current"
                  width="24"
                  height="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 13.481c0-2.34.611-4.761 1.833-7.263C3.056 3.716 4.733 1.643 6.865 0L11 2.689C9.726 4.382 8.777 6.093 8.152 7.824c-.624 1.73-.936 3.578-.936 5.545V18H0v-4.519zm13 0c0-2.34.611-4.761 1.833-7.263 1.223-2.502 2.9-4.575 5.032-6.218L24 2.689c-1.274 1.693-2.223 3.404-2.848 5.135-.624 1.73-.936 3.578-.936 5.545V18H13v-4.519z"
                    fill-rule="nonzero"
                  />
                </svg>
              </div>
              <blockquote
                class="pb-8 mb-4 -mt-4 text-lg border-b border-gray-700"
              >
                — Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum cillum dolore eu fugiat.
              </blockquote>
              <p class="font-semibold">
                <span class="text-white">Roman Level</span>
                <span class="text-gray-700">/</span>
                <a href="#" class="text-cooper-400 hover:text-cooper-300"
                  >AppName</a
                >
              </p>
            </div>
          </div>
          <div
            class="max-w-sm p-4 mx-auto md:max-w-full md:mx-0 md:w-1/2 lg:w-1/3 animated fadeIn"
          >
            <div class="p-8 bg-gray-800">
              <div class="mb-8 text-gray-600">
                <svg
                  class="fill-current"
                  width="24"
                  height="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 13.481c0-2.34.611-4.761 1.833-7.263C3.056 3.716 4.733 1.643 6.865 0L11 2.689C9.726 4.382 8.777 6.093 8.152 7.824c-.624 1.73-.936 3.578-.936 5.545V18H0v-4.519zm13 0c0-2.34.611-4.761 1.833-7.263 1.223-2.502 2.9-4.575 5.032-6.218L24 2.689c-1.274 1.693-2.223 3.404-2.848 5.135-.624 1.73-.936 3.578-.936 5.545V18H13v-4.519z"
                    fill-rule="nonzero"
                  />
                </svg>
              </div>
              <blockquote
                class="pb-8 mb-4 -mt-4 text-lg border-b border-gray-700"
              >
                — Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum cillum dolore eu fugiat.
              </blockquote>
              <p class="font-semibold">
                <span class="text-white">Diana Rynzhuk</span>
                <span class="text-gray-700">/</span>
                <a href="#" class="text-cooper-400 hover:text-cooper-300"
                  >AppName</a
                >
              </p>
            </div>
          </div>
          <div
            class="max-w-sm p-4 mx-auto md:max-w-full md:mx-0 md:w-1/2 lg:w-1/3 animated fadeIn"
          >
            <div class="p-8 bg-gray-800">
              <div class="mb-8 text-gray-600">
                <svg
                  class="fill-current"
                  width="24"
                  height="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 13.481c0-2.34.611-4.761 1.833-7.263C3.056 3.716 4.733 1.643 6.865 0L11 2.689C9.726 4.382 8.777 6.093 8.152 7.824c-.624 1.73-.936 3.578-.936 5.545V18H0v-4.519zm13 0c0-2.34.611-4.761 1.833-7.263 1.223-2.502 2.9-4.575 5.032-6.218L24 2.689c-1.274 1.693-2.223 3.404-2.848 5.135-.624 1.73-.936 3.578-.936 5.545V18H13v-4.519z"
                    fill-rule="nonzero"
                  />
                </svg>
              </div>
              <blockquote
                class="pb-8 mb-4 -mt-4 text-lg border-b border-gray-700"
              >
                — Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum cillum dolore eu fugiat.
              </blockquote>
              <p class="font-semibold">
                <span class="text-white">Ben Stafford</span>
                <span class="text-gray-700">/</span>
                <a href="#" class="text-cooper-400 hover:text-cooper-300"
                  >AppName</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col items-center px-4 py-8 mb-16 bg-gray-700 bg-right-bottom bg-no-repeat bg-cover animated fadeIn sm:flex-row sm:py-16 sm:px-12"
        style="background-image: url('img/cta-illustration.svg')"
      >
        <h2
          class="max-w-xs mx-auto mb-10 text-2xl font-bold text-center text-white sm:text-3xl sm:mr-10 sm:max-w-full sm:text-left sm:w-1/3 sm:mx-0 sm:mb-0 md:w-1/2 lg:w-7/12"
        >
          For previewing layouts and visual?
        </h2>
        <div class="flex flex-grow w-full sm:w-2/3 md:w-1/2 lg:w-5/12">
          <form
            class="flex items-center w-full p-4 bg-white rounded-sm space-between"
            action="#"
          >
            <input
              class="flex-grow text-gray-900 placeholder-gray-500 bg-white appearance-none"
              type="text"
              placeholder="Your best email"
            />
            <svg
              class="text-gray-700 fill-current"
              width="16"
              height="12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z"
                fill="#376DF9"
              ></path>
            </svg>
          </form>
        </div>
      </div>
      <div class="flex flex-col items-center sm:flex-row sm:justify-between">
        <a class="text-gray-700" href="#">
          <img src="img/logo.svg" alt="" class="mx-auto mb-4" />
        </a>
        <div class="flex flex-row justify-center mb-4 -ml-4 -mr-4">
          <a href="#" class="p-4 text-gray-700 hover:text-gray-400">
            <svg
              class="fill-current"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Facebook</title>
              <path
                d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"
              ></path>
            </svg>
          </a>
          <a href="#" class="p-4 text-gray-700 hover:text-gray-400">
            <svg
              class="fill-current"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Twitter</title>
              <path
                d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"
              ></path>
            </svg>
          </a>
          <a href="#" class="p-4 text-gray-700 hover:text-gray-400">
            <svg
              class="fill-current"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Instagram</title>
              <g>
                <circle cx="12.145" cy="3.892" r="1"></circle>
                <path
                  d="M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"
                ></path>
                <path
                  d="M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z"
                ></path>
              </g>
            </svg>
          </a>
        </div>
      </div>
      <div class="flex flex-col justify-between mb-8 text-center sm:flex-row">
        <p class="order-last mb-4 text-sm text-gray-500 sm:order-first">
          Designed by
          <a href="https://www.linkedin.com/in/chejholloway" class="text-white">Cruip</a>. Coded by
          &copy; Che' J. Holloway>Credits: <a href="http://ombmstudios.com">OmBm Studios</a>
        </p>
        <ul class="flex flex-row justify-center mb-6 -ml-4 -mr-4 text-sm">
          <li>
            <a href="#" class="px-4 text-gray-500 hover:text-white">Contact</a>
          </li>
          <li>
            <a href="#" class="px-4 text-gray-500 hover:text-white">About us</a>
          </li>
          <li>
            <a href="#" class="px-4 text-gray-500 hover:text-white">FAQ's</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
`

// log.warn('Landing Page: ', LandingPage)
export default LandingPage
