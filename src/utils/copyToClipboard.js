export function initCopyToClipboard() {
  const copyButtons = document.querySelectorAll('.copy-button')

  copyButtons.forEach(button => {
    button.addEventListener('click', async () => {
      const email = button.getAttribute('data-email')
      if (!email) return
      
      await navigator.clipboard.writeText(email)
      
      const defaultIcon = button.querySelector('.default-icon')
      const successIcon = button.querySelector('.success-icon')
      const tooltip = button.parentElement?.querySelector('.copy-tooltip')
      const defaultMessage = tooltip?.querySelector('.default-message')
      const successMessage = tooltip?.querySelector('.success-message')
      
      // Show success state
      defaultIcon?.classList.add('hidden')
      successIcon?.classList.remove('hidden')
      defaultMessage?.classList.add('hidden')
      successMessage?.classList.remove('hidden')      // Reset after 2 seconds
      setTimeout(() => {
        defaultIcon?.classList.remove('hidden')
        successIcon?.classList.add('hidden')
        defaultMessage?.classList.remove('hidden')
        successMessage?.classList.add('hidden')
      }, 2000)
    })
  })
}
