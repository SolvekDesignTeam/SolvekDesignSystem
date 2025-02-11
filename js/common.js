
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
    if (parentLi) {
      parentLi.classList.toggle('on')
    }

  }
})

// dom 로드시 main 로드
document.addEventListener("DOMContentLoaded", function () {
  loadPage("main.html")
})
