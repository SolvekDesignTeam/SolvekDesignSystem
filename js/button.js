function button() {

  const tabli = document.querySelector('.tab li')
  const sideTab = tabli.querySelector('.side-tab')
  const addButton = sideTab.querySelector('.addbutton')
 
  if(tabli) {
    tabli.classList.add('on')
    sideTab.style.maxHeight = sideTab.scrollHeight + 'px'
    sideTab.style.visibility = 'visible'
    sideTab.style.transition = 'max-height 0.5s var(--transition-up)'
    addButton.classList.add('on')
  }


}