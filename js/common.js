function loadPage(page, callback) {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', page, true)
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                document.getElementById('content').innerHTML = xhr.responseText

                // main.html에 이용이 필요할 때 넣기 -> 함수 사용해서 넣어야함
                // const firstpage = ['main.html']

                // if (firstpage.includes(page)) {

                // }
            }

            if (callback) callback()
        }
    }
    xhr.send()

}

document.addEventListener('DOMContentLoaded', function() {
    loadPage('main.html')
})