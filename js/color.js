function initColor() {
  const tabli = document.querySelector('.tab li:nth-child(2)')
  const sideTab = tabli.querySelector('.side-tab')
  const addColor = sideTab.querySelector('.addColor')
 
  if(tabli) {
    tabli.classList.add('on')
    sideTab.style.maxHeight = sideTab.scrollHeight + 'px'
    sideTab.style.visibility = 'visible'
    sideTab.style.transition = 'max-height 0.5s var(--transition-up)'
    addColor.classList.add('on')
  }

  const coloPaletteBtn = document.querySelectorAll('.color-palette-box-item')
  const copyPopup = document.querySelector('.copy-popup')

  coloPaletteBtn.forEach(item => {
    if(item) {
      item.addEventListener('click', () => {
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