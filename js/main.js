// 클릭 이벤트
document.addEventListener('click', (e) => {
  // 로고 클릭시 로드 초기화
  if(e.target.classList.contains('logo-img')) {
    location.reload();
  }

  // 메뉴 열고 닫기
  if(e.target.classList.contains('menu-img')){
    $(".aside-tab").removeClass("on");
    $(".main-content").removeClass("on");
    $("header").removeClass("on");
  }
  if(e.target.classList.contains('right-menu-img')) {
    $(".aside-tab").addClass("on");
    $("header").addClass("on");
    $(".main-content").addClass("on");
    $(".menu-bar").removeClass("on");
  }

})

// 리사이즈 설정
window.addEventListener('resize', handleMenuState)

function handleMenuState() {
  if ($(window).width() <= 768) {
    $(".aside-tab, .main-content").removeClass("on");
    $("header").removeClass("on");
    setTimeout(function() {
      $(".menu-bar").addClass("on");
    }, 500);
  }
}

handleMenuState()
