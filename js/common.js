// 페이지 경로
const pagePaths = {
  button: "Wcomponent/button.html",
  table: "Wtable/table.html",
  tab: "Wtab/tab.html",
  popup: "Wpopup/popup.html",
  font: "Wfont/font.html",
  font: "Wlibrary/library.html",
};

// 버튼
const buttonClasses = {
  button: "addButton",
  table: "addTable",
  tab: "addTab",
  popup: "addPopup",
  font: "addFont",
  library: "addLibrary",
};

// 버튼과 페이지 매핑
const pageMapping = {
  [buttonClasses.button]: pagePaths.button,
  [buttonClasses.table]: pagePaths.table,
  [buttonClasses.tab]: pagePaths.tab,
  [buttonClasses.popup]: pagePaths.popup,
  [buttonClasses.font]: pagePaths.font,
  [buttonClasses.library]: pagePaths.library,
};

// 페이지 로드 ajax
function loadPage(page, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", page, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        document.getElementById("content").innerHTML = xhr.responseText;
      }

      if (callback) callback();
    }
  };
  xhr.send();
}

// 페이지 네비게이션 관련 클릭 이벤트 처리
function handleNavigationClick(e) {
  const pageKey = Object.keys(pageMapping).find((className) =>
    e.target.classList.contains(className)
  );

  if (pageKey) {
    loadPage(pageMapping[pageKey]);
  }
}

// 이벤트 리스너 등록
document.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("addButton") ||
    e.target.classList.contains("addTable") ||
    e.target.classList.contains("addTab")
  ) {
    handleNavigationClick(e);
  }
});

// dom 로드시 main 로드
document.addEventListener("DOMContentLoaded", function () {
  loadPage("main.html");
});
