function loadPage(page, callback) {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', page, true)
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                document.getElementById('content').innerHTML = xhr.responseText

                const firstpage = ['index.html']

                if (firstpage.includes(page)) {

                }
                if (decopage.includes(page)) {
                }

                if (selecpage.includes(page)) {
                }
            }

            if (callback) callback()
        }
    }
    xhr.send()

}