function initRange() {
  const ranges = document.querySelectorAll('input[type="range"]');
  
  ranges.forEach(item => {
    const rangeValue = document.querySelector('.range-value');
    item.addEventListener('input', (e) => {
      rangeValue.textContent = e.target.value;
    });
    rangeValue.textContent = item.value;
  })
}
