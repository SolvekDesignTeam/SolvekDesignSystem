function initNumber() {
  
  const input = document.querySelector(".input-number")
  const plus = document.querySelector('.plus')
  const minus = document.querySelector('.minus')
 
  if(input && plus && minus) {
    plus.addEventListener("click", () => {
      input.value = parseInt(input.value) + 1
    })
    minus.addEventListener("click", () => {
      if(input.value > 0 ) {
        input.value = parseInt(input.value) - 1
      }
    })
  }
}