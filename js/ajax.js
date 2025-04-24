// 컴포넌트
const main = {
  main: "index.html"
}
const Components = {
  navigation: "Components/navigation.html",
  button: "Components/button.html",
  table: "Components/table.html",
  radio: "Components/radio.html",
  input: "Components/input.html",
  dropdown: "Components/dropdown.html",
  checkbox: "Components/checkbox.html",
  tabs: "Components/tabs.html",
  modal: "Components/modal.html",
  confirm: "Components/confirm.html",
  empty: "Components/empty.html",
  shadow: "Components/shadow.html",
}

const foundation = {
  favicon: "foundation/favicon.html",
  color: "foundation/color.html",
  typography: "foundation/typography.html",
  spacing: "foundation/spacing.html",
  icongraphy: "foundation/icongraphy.html",
}

// const patterns = {
  
// }

// const brand = {

// }

// 메인 버튼 정의
const mainBtn = {
  main: "logo-img"
}

// 버튼 영역
const ComponentsClasses = {
  navigation: "addNavigation",
  button: "addbutton",
  table: "addTable",
  radio: "addRadio",
  input: "addInput",
  dropdown: "addDropdown",
  checkbox: "addCheckbox",
  tabs: "addTabs",
  modal: "addModal",
  confirm: "addConfirm",
  empty: "addEmpty",
  shadow: "addShadow",
}

const foundationClasses = {
  favicon: "addFavicon",
  color: "addColor",
  typography: "addTypography",
  spacing: "addSpacing",
  icongraphy: "addIcongraphy",
}

  
  // 버튼과 페이지 매핑
  const pageMapping = {
    //메인
    [mainBtn.main] : main.main,

    // 컴포넌트
    [ComponentsClasses.navigation]: Components.navigation,
    [ComponentsClasses.button]: Components.button,
    [ComponentsClasses.table]: Components.table,
    [ComponentsClasses.radio]: Components.radio,
    [ComponentsClasses.input]: Components.input,
    [ComponentsClasses.dropdown]: Components.dropdown,
    [ComponentsClasses.checkbox]: Components.checkbox,
    [ComponentsClasses.tabs]: Components.tabs,
    [ComponentsClasses.modal]: Components.modal,
    [ComponentsClasses.confirm]: Components.confirm,
    [ComponentsClasses.empty]: Components.empty,
    [ComponentsClasses.shadow]: Components.shadow,

    // 파운데이션
    [foundationClasses.favicon]: foundation.favicon,
    [foundationClasses.color]: foundation.color,
    [foundationClasses.typography]: foundation.typography,
    [foundationClasses.spacing]: foundation.spacing,
    [foundationClasses.icongraphy]: foundation.icongraphy,
  }
  
  // 해시 매핑 자동 생성
  const hashMapping = {
    // 컴포넌트
    ...Object.entries(Components).reduce((acc, [key, value]) => ({
      ...acc,
      [`#/Component/${key}`]: value
    }), {}),
    
    // 파운데이션
    ...Object.entries(foundation).reduce((acc, [key, value]) => ({
      ...acc,
      [`#/Foundation/${key}`]: value
    }), {}),
    
  }
  
  // 클래스에서 해시로 변환하는 매핑 자동 생성
  const classToHash = {
    ...Object.entries(ComponentsClasses).reduce((acc, [key, className]) => ({
      ...acc,
      [className]: `#/Component/${key}`
    }), {}),
    
    ...Object.entries(foundationClasses).reduce((acc, [key, className]) => ({
      ...acc,
      [className]: `#/Foundation/${key}`
    }), {}),
    
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
        const currentHash = window.location.hash
        if (currentHash === '#/Foundation/color') {
          initColor()
        }
        if (currentHash === '#/Foundation/typography') {
          typography()
        }
        if (currentHash === '#/Foundation/spacing') {
          spacing()
        }
        // if (currentHash === '#/button/range') {
        //   initRange()
        // }
        // if (currentHash === '#/button/number') {
        //   initNumber()
        // }
        // if (currentHash === '#/button/button') {
        //   fileUpload()
        //   fileUploadImg()
        // }
      }
    }
    xhr.send()
  }

  // 네비게이션 클릭 이벤트 핸들러
  function handleNavigationClick(e) {
    const logo = e.target.closest('.logo-img')
    
    if(logo && logo.classList.contains('logo-img')) {
      const tabLis = document.querySelectorAll('.tab li')
      const sideTabs = document.querySelectorAll('.side-tab')
      const sideTabBtn = document.querySelectorAll('button')
      tabLis.forEach(tab => {
        tab.classList.remove('on')
      })
      sideTabs.forEach(sideTab => {
        sideTab.style.maxHeight = '0'
      })
      sideTabBtn.forEach(btn => {
        btn.classList.remove('on')
      })
      window.location.hash = '';
      loadPage('main.html');
      return;
    }
    const pageKey = Object.keys(pageMapping).find((className) =>
      e.target.classList.contains(className)
    )
  
    if (pageKey) {
      const hash = classToHash[pageKey]
      if (hash) {
        loadPage(pageMapping[pageKey], hash)
      }
      if(e.target.classList.contains('.side-tab button')) {
        const box = e.target.closest('.part')
        box.classList.toggle('on')
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

  // 브라우저 뒤로가기/앞으로가기 처리
  window.addEventListener('popstate', function() {
    const hash = window.location.hash
    const page = hashMapping[hash] || 'main.html'
    loadPage(page, hash)
  })
  
  // 초기 해시 기반 페이지 로드
  window.addEventListener('load', function() {
    const hash = window.location.hash
    const page = hashMapping[hash] || 'main.html'
    loadPage(page, hash)
  })

