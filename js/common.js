// 페이지 경로
const pagePaths = {
    input: 'Wcomponent/input.html',
    table: 'Wtable/table.html', 
    typography: 'Wtypography/typography.html'
 }
 
 // 버튼
 const buttonClasses = {
    input: 'addInput',
    table: 'addTable', 
    typography: 'addTypo'
 }
 
 // 버튼과 페이지 매핑 
 const pageMapping = {
    [buttonClasses.input]: pagePaths.input,
    [buttonClasses.table]: pagePaths.table,
    [buttonClasses.typography]: pagePaths.typography
 }

// 페이지 로드 ajax
function loadPage(page, callback) {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', page, true)
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                document.getElementById('content').innerHTML = xhr.responseText
            }

            if (callback) callback()
        }
    }
    xhr.send()

}

// 페이지 네비게이션 관련 클릭 이벤트 처리
function handleNavigationClick(e) {
    const pageKey = Object.keys(pageMapping).find(className => 
        e.target.classList.contains(className)
    )
    
    if (pageKey) {
        loadPage(pageMapping[pageKey])
    }
}

 
// 이벤트 리스너 등록
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('addInput') || 
        e.target.classList.contains('addTable') || 
        e.target.classList.contains('addTypo')) {
        handleNavigationClick(e)
    } 
})

// dom 로드시 main 로드
document.addEventListener('DOMContentLoaded', function() {
    loadPage('main.html')
})