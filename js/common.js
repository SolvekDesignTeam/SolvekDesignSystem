// 컴포넌트
const Wbutton = {
  text: "Wbutton/text.html",
  select: "Wbutton/select.html",
  checkbox: "Wbutton/checkbox.html",
  radio: "Wbutton/radio.html",
  time: "Wbutton/time.html",
  range: "Wbutton/range.html",
  number: "Wbutton/number.html",
  color: "Wbutton/color.html",
  button: "Wbutton/button.html",
  icon: "Wbutton/icon.html",
}
// 테이블
const Wtable = {
  table: "Wtable/table.html",
}
// 폰트
const Wfont = {
  font: "Wfont/font.html",
}
// 라이브러리
const Wlibrary = {
  flatpicker: "Wlibrary/flatpicker.html",
  niceselect: "Wlibrary/niceselect.html",
  sortable: "Wlibrary/sortable.html",
  swiper: "Wlibrary/swiper.html",
}
// 팝업
const Wpopup = {
  popup: "Wpopup/popup.html",
}
// 탭
const Wtab = {
  tab: "Wtab/tab.html",
}

// 버튼
const WbuttonClasses = {
  text: "addText",
  select: "addSelect",
  checkbox: "addCheckbox",
  radio: "addRadio",
  time: "addTime",
  range: "addRange",
  number: "addNumber",
  color: "addColor",
  button: "addButton",
  icon: "addIcon",
}
const WTableClasses = {
  table: "addTable",
}
const WTabClasses = {
  tab: "addTab",
}
const WpopupClasses = {
  popup: "addPopup",
}
const WfontClasses = {
  font: "addFont",
}
const WLibClasses = {
  swiper: "addSwiper",
  niceselect: "addNice",
  sortable: "addSor",
  flatpicker: "addFlat",
}

// 버튼과 페이지 매핑
const pageMapping = {
  // 컴포넌트
  [WbuttonClasses.text]: Wbutton.text,
  [WbuttonClasses.select]: Wbutton.select,
  [WbuttonClasses.checkbox]: Wbutton.checkbox,
  [WbuttonClasses.radio]: Wbutton.radio,
  [WbuttonClasses.time]: Wbutton.time,
  [WbuttonClasses.range]: Wbutton.range,
  [WbuttonClasses.number]: Wbutton.number,
  [WbuttonClasses.color]: Wbutton.color,
  [WbuttonClasses.button]: Wbutton.button,
  [WbuttonClasses.icon]: Wbutton.icon,

  // 테이블
  [WTableClasses.table]: Wtable.table,

  // 탭
  [WTabClasses.tab]: Wtab.tab,

  // 팝업
  [WpopupClasses.popup]: Wpopup.popup,

  // 폰트
  [WfontClasses.font]: Wfont.font,

  // 라이브러리
  [WLibClasses.swiper]: Wlibrary.swiper,
  [WLibClasses.niceselect]: Wlibrary.niceselect,
  [WLibClasses.sortable]: Wlibrary.sortable,
  [WLibClasses.flatpicker]: Wlibrary.flatpicker,
}

// 페이지 로드 ajax
function loadPage(page, callback) {
  const xhr = new XMLHttpRequest()
  xhr.open("GET", page, true)
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        document.getElementById("content").innerHTML = xhr.responseText
        
        // 페이지별 초기화 함수 호출
        if(page === 'Wbutton/text.html') {
          initText()
        }
      }

      if (callback) callback()
    }
  }
  xhr.send()
}

// 페이지 네비게이션 관련 클릭 이벤트 처리
function handleNavigationClick(e) {
  const pageKey = Object.keys(pageMapping).find((className) =>
    e.target.classList.contains(className)
  )

  if (pageKey) {
    loadPage(pageMapping[pageKey])
  }
}

// 이벤트 리스너 등록
document.addEventListener("click", function (e) {
  const hasMatchingClass = Object.keys(pageMapping).some((className) =>
    e.target.classList.contains(className)
  )

  if (hasMatchingClass) {
    handleNavigationClick(e)
  }

// 메뉴 클릭시 이벤트
  if (e.target.matches('.tab > li > button')) {
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
