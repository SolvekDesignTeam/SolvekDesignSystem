function initRange() {
  const valueInput = document.querySelector('.value-input')
  const rangeValue = document.querySelector('.range-value');

  // 조건문 확인
  if (valueInput && rangeValue) {
    valueInput.addEventListener('input', (e) => {
      rangeValue.textContent = e.target.value;
    });
    
    // 초기값 설정
    if (valueInput.value) {
      rangeValue.textContent = valueInput.value;
    }
  }

//  모든 요소에 적용되는 문제점 생김
//   ranges.forEach(item => {
//     item.addEventListener('input', (e) => {
//       rangeValue.textContent = e.target.value;
//     });
//     rangeValue.textContent = item.value;
//   })
}