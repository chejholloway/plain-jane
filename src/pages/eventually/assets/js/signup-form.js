// Signup Form.
;(() => {
  // Vars.
  const $form = document.querySelectorAll('#signup-form')[0]
  const $submit = document.querySelectorAll('#signup-form input[type="submit"]')[0]
  const $message = document.createElement('span')

  $message.classList.add('message')
  $form.appendChild($message)

  $message._show = (type, text) => {
    $message.innerHTML = text
    $message.classList.add(type)
    $message.classList.add('visible')

    window.setTimeout(() => {
      $message._hide()
    }, 3000)
  }

  $message._hide = () => {
    $message.classList.remove('visible')
  }

  // Events.
  // Note: If you're *not* using AJAX, get rid of this event listener.
  $form.addEventListener('submit', (event) => {
    event.stopPropagation()
    event.preventDefault()
    $message._hide()
    $submit.disabled = true

    // Process form.
    // Note: Doesn't actually do anything yet (other than report back with a "thank you"),
    // but there's enough here to piece together a working AJAX submission call that does.
    window.setTimeout(() => {
      // Reset form.
      $form.reset()
      $submit.disabled = false
      $message._show('success', 'Thank you!')
      // $message._show('failure', 'Something went wrong. Please try again.');
    }, 750)
  })
})()
