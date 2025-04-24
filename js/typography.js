function typography() {

  const tabli = document.querySelector('.tab li:nth-child(2)')
  const sideTab = tabli.querySelector('.side-tab')
  const addTypography = sideTab.querySelector('.addTypography')
 
  if(tabli) {
    tabli.classList.add('on')
    sideTab.style.maxHeight = sideTab.scrollHeight + 'px'
    sideTab.style.visibility = 'visible'
    sideTab.style.transition = 'max-height 0.5s var(--transition-up)'
    addTypography.classList.add('on')
  }

  const typoText = document.querySelectorAll('table tbody td p[class^="Heading"], table tbody td p[class^="Body"]');
  const copyPopup = document.querySelector('.copy-popup')
  typoText.forEach(item => {
    if(item) {
      item.addEventListener('click', () => {
        console.log(item)
        copyPopup.classList.add('active')
        setTimeout(() => {
          copyPopup.classList.remove('active')
        }, 1000)

        const computedStyle = window.getComputedStyle(item);
        const selectedProperties = {
          'font-size': computedStyle.getPropertyValue('font-size'),
          'font-weight': computedStyle.getPropertyValue('font-weight'),
          'line-height': computedStyle.getPropertyValue('line-height'),
          'letter-spacing': computedStyle.getPropertyValue('letter-spacing'),
          'color': computedStyle.getPropertyValue('color')
        };
        
        const cssText = JSON.stringify(selectedProperties, null, 2);
        navigator.clipboard.writeText(cssText);
      })
    }
  })
}
