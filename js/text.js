function initText() {
    const passworContainer = document.querySelectorAll('.password')

passworContainer.forEach(container => {
    const input = container.querySelector('input')
    const toggle = container.querySelector('.password-btn')

    toggle.addEventListener("click", () => {
        if(input.type === 'password') {
            input.type = 'text'
            toggle.style.background = 'url(/css/img/toggle_on.svg) 50% 50% no-repeat'
        } else if (input.type === 'text') {
            input.type = 'password'
            toggle.style.background = 'url(/css/img/toggle.svg) 50% 50% no-repeat'
        }
    })

})
}
