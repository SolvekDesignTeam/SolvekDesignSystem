// 파일 텍스트 업로드
function fileUpload() {
  const fileBtn = document.querySelector('#file-btn')
  const upLoad = document.querySelector('.upload-name')

  if(fileBtn) {
    fileBtn.addEventListener('change', () => {
      const fileName = fileBtn.value
      upLoad.value = fileName
    })
  }
}

// 파일 이미지 업로드
function fileUploadImg() {
  const fileBtn = document.querySelector('#file-btn-img');
  
  // 이벤트 리스너가 이미 등록되어 있는지 확인
  if(fileBtn && !fileBtn.dataset.hasListener) { 
    // 화살표 함수로 변경하여 this 컨텍스트 문제 해결
    fileBtn.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const imageUrl = e.target.result;
          const listItem = `
            <li class="file-img-box">
              <img src="${imageUrl}" alt="업로드된 이미지" />
              <button type="button" class="delete-btn" onclick="this.parentElement.remove()"><span class="blind">삭제</span></button>
            </li>
          `;
          const uploadList = document.querySelector('.file-img ul');
          uploadList.insertAdjacentHTML('beforeend', listItem);
        };
        reader.readAsDataURL(file);
      }
    });
    
    fileBtn.dataset.hasListener = 'true';
  }
}