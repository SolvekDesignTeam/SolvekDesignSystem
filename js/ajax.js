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
  
  // 해시 매핑 자동 생성
  const hashMapping = {
    // 컴포넌트
    ...Object.entries(Wbutton).reduce((acc, [key, value]) => ({
      ...acc,
      [`#/button/${key}`]: value
    }), {}),
    
    // 테이블
    ...Object.entries(Wtable).reduce((acc, [key, value]) => ({
      ...acc,
      [`#/table/${key}`]: value
    }), {}),
    
    // 폰트
    ...Object.entries(Wfont).reduce((acc, [key, value]) => ({
      ...acc,
      [`#/font/${key}`]: value
    }), {}),
    
    // 라이브러리
    ...Object.entries(Wlibrary).reduce((acc, [key, value]) => ({
      ...acc,
      [`#/library/${key}`]: value
    }), {}),
    
    // 팝업
    ...Object.entries(Wpopup).reduce((acc, [key, value]) => ({
      ...acc,
      [`#/popup/${key}`]: value
    }), {}),
    
    // 탭
    ...Object.entries(Wtab).reduce((acc, [key, value]) => ({
      ...acc,
      [`#/tab/${key}`]: value
    }), {})
  }
  
  // 클래스에서 해시로 변환하는 매핑 자동 생성
  const classToHash = {
    ...Object.entries(WbuttonClasses).reduce((acc, [key, className]) => ({
      ...acc,
      [className]: `#/button/${key}`
    }), {}),
    
    ...Object.entries(WTableClasses).reduce((acc, [key, className]) => ({
      ...acc,
      [className]: `#/table/${key}`
    }), {}),
    
    ...Object.entries(WTabClasses).reduce((acc, [key, className]) => ({
      ...acc,
      [className]: `#/tab/${key}`
    }), {}),
    
    ...Object.entries(WpopupClasses).reduce((acc, [key, className]) => ({
      ...acc,
      [className]: `#/popup/${key}`
    }), {}),
    
    ...Object.entries(WfontClasses).reduce((acc, [key, className]) => ({
      ...acc,
      [className]: `#/font/${key}`
    }), {}),
    
    ...Object.entries(WLibClasses).reduce((acc, [key, className]) => ({
      ...acc,
      [className]: `#/library/${key}`
    }), {})
  }
  
  // 페이지 로드 함수
  function loadPage(page, hash) {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", page, true)
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        document.getElementById("content").innerHTML = xhr.responseText
        
        // URL 해시 업데이트
        if (hash && window.location.hash !== hash) {
          window.location.hash = hash
        }
      }
    }
    xhr.send()
  }
  
  // 네비게이션 클릭 이벤트 핸들러
  function handleNavigationClick(e) {
    const pageKey = Object.keys(pageMapping).find((className) =>
      e.target.classList.contains(className)
    )
  
    if (pageKey) {
      const hash = classToHash[pageKey]
      if (hash) {
        loadPage(pageMapping[pageKey], hash)
      }
    }
  }
  
  // 해시 변경 이벤트 리스너
  window.addEventListener('hashchange', function() {
    const hash = window.location.hash
    const page = hashMapping[hash]
    
    if (page) {
      loadPage(page)
    }
  })
  
  // 초기 해시 기반 페이지 로드
  function initializeFromHash() {
    const hash = window.location.hash
    const page = hashMapping[hash] || 'index.html'
    
    loadPage(page, hash || '#/')
  }
  
  // 페이지 로드 시 초기화
  document.addEventListener('DOMContentLoaded', initializeFromHash)
  
  