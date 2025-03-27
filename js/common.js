
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
      sideTab.style.visibility = 'hidden'
      sideTab.style.transition = 'max-height 0.5s var(--transition-default)'
    } else {
      sideTab.style.maxHeight = sideTab.scrollHeight + 'px'
      sideTab.style.visibility = 'visible'
      sideTab.style.transition = 'max-height 0.5s var(--transition-default)'
    }
  }
})

// dom 로드시 main 로드
document.addEventListener("DOMContentLoaded", function () {
  loadPage("main.html")
})

// 클릭 이벤트
document.addEventListener('click', (e) => {
  // 로고 클릭시 로드 초기화

  // 메뉴 열고 닫기
  if(e.target.classList.contains('menu-img')){
    document.querySelector(".aside-tab").classList.remove("on");
    document.querySelector(".main-content").classList.remove("on");
    document.querySelector("header").classList.remove("on");
  }
  if(e.target.classList.contains('right-menu-img')) {
    document.querySelector(".aside-tab").classList.add("on");
    document.querySelector("header").classList.add("on");
    document.querySelector(".main-content").classList.add("on");
    document.querySelector(".menu-bar").classList.remove("on");
  }

  // 페이징 버튼 클릭시 이벤트
  if (e.target.closest('.side-tab') && e.target.tagName === 'BUTTON') {
    document.querySelectorAll('.side-tab button').forEach(btn => {
      btn.classList.remove('on');
    });
    e.target.classList.add('on');
  }
})

// 리사이즈 설정
// window.addEventListener('resize', handleMenuState)

// function handleMenuState() {
//   if ($(window).width() <= 768) {
//     $(".aside-tab, .main-content").removeClass("on");
//     $("header").removeClass("on");
//     setTimeout(function() {
//       $(".menu-bar").addClass("on");
//     }, 500);
//   }
// }

// handleMenuState()