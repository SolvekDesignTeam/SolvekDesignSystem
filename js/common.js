
// 이벤트 리스너 등록
document.addEventListener("click", function (e) {
  const hasMatchingClass = Object.keys(pageMapping).some((className) =>
    e.target.classList.contains(className)
  )

  if (hasMatchingClass) {
    handleNavigationClick(e)
  }

// 메뉴 클릭시 이벤트
  if (e.target.matches('.depth-one')) {
    const parentLi = e.target.closest('li')
    const sideTab = parentLi.querySelector('.side-tab')
    const isopen = parentLi.classList.contains('on')
    
    if(parentLi) {
      parentLi.classList.toggle('on')
    }
    if(isopen) {
      sideTab.style.maxHeight = '0'
      sideTab.style.transition = 'max-height 0.5s var(--transition-up)'
    } else {
      sideTab.style.maxHeight = sideTab.scrollHeight + 'px'
      sideTab.style.visibility = 'visible'
      sideTab.style.transition = 'max-height 0.5s var(--transition-up)'
    }
  }
})

// dom 로드시 main 로드
document.addEventListener("DOMContentLoaded", function () {
  loadPage("main.html")
})

// 클릭 이벤트
document.addEventListener('click', (e) => {

  // 페이징 버튼 클릭시 이벤트
  if (e.target.closest('.side-tab') && e.target.tagName === 'BUTTON') {
    document.querySelectorAll('.side-tab button').forEach(btn => {
      btn.classList.remove('on');
    });
    e.target.classList.add('on');
  }

  if(e.target.closest('.menu-img')) {
    const asideTab = document.querySelector('.aside-tab')
    console.log(asideTab)
    if(asideTab) {
      asideTab.classList.toggle('on')
    } 
  }
})