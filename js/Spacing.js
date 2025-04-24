function spacing() {

  const tabli = document.querySelector('.tab li:nth-child(2)')
  const sideTab = tabli.querySelector('.side-tab')
  const addSpacing = sideTab.querySelector('.addSpacing')
 
  if(tabli) {
    tabli.classList.add('on')
    sideTab.style.maxHeight = sideTab.scrollHeight + 'px'
    sideTab.style.visibility = 'visible'
    sideTab.style.transition = 'max-height 0.5s var(--transition-up)'
    addSpacing.classList.add('on')
  }
}

