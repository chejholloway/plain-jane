;(() => {
  const $body = document.querySelector('body')
  // window.addEventListener
  ;(() => {
    if ('addEventListener' in window) return
    window.addEventListener = (type, f) => window.attachEvent(`on${type}`, f)
  })()
  // Play initial animations on page load.
  window.addEventListener('load', () =>
    window.setTimeout(() => {
      $body.classList.remove('is-preload')
    }, 100)
  )

  // Slideshow Background.
  ;(() => {
    // Settings.
    const settings = {
      // Images (in the format of 'url': 'alignment').
      images: {
        'images/bg01.png': 'center',
        'images/bg07.png': 'center',
        'images/bg06.png': 'center',
        'images/bg05.png': 'center',
        'images/bg04.png': 'center',
        'images/bg03.png': 'center',
        'images/bg02.png': 'center',
        'images/bg08.png': 'center'
      },
      // Delay.
      delay: 3500
    }

    // Vars.
    const $bgs = []
    let $bg
    let k
    let lastPos = 0
    let pos = 0

    // Create BG wrapper, BGs.
    const $wrapper = document.createElement('div')
    $wrapper.id = 'bg'
    $body.appendChild($wrapper)

    for (k in settings.images) {
      // Create BG.
      $bg = document.createElement('div')
      $bg.style.backgroundImage = `url("${k}")`
      $bg.style.backgroundPosition = settings.images[k]
      $wrapper.appendChild($bg)
      // Add it to array.
      $bgs.push($bg)
    }

    // Main loop.
    $bgs[pos].classList.add('visible')
    $bgs[pos].classList.add('top')

    window.setInterval(() => {
      lastPos = pos
      pos++
      // Wrap to beginning if necessary.
      if (pos >= $bgs.length) pos = 0
      // Swap top images.
      $bgs[lastPos].classList.remove('top')
      $bgs[pos].classList.add('visible')
      $bgs[pos].classList.add('top')
      // Hide last image after a short delay.
      window.setTimeout(() => {
        $bgs[lastPos].classList.remove('visible')
      }, settings.delay / 2)
    }, settings.delay)
  })()
})()
