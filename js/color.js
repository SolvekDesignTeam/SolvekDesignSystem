function initColor() {
  const coloPaletteBtn = document.querySelectorAll('.color-palette-box-item')
  const copyPopup = document.querySelector('.copy-popup')

  coloPaletteBtn.forEach(item => {
    if(item) {
      item.addEventListener('click', () => {
        console.log('click', item)
        copyPopup.classList.add('active')
        setTimeout(() => {
          copyPopup.classList.remove('active')
        }, 1000)
        
        // 클릭한 item의 style.background 값을 복사 
        const color = window.getComputedStyle(item).backgroundColor
        navigator.clipboard.writeText(color)
      })
    } 
  }) 
}