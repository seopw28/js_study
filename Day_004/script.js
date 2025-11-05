// 드롭다운에서 disabled 옵션 숨김 및 색상 제어
const dropdown = document.getElementById('dropdown');
const disabledOption = dropdown.querySelector('option[disabled]');

// 드롭다운이 열릴 때 disabled 옵션 숨김
dropdown.addEventListener('mousedown', function() {
    if (disabledOption) {
        disabledOption.hidden = true;
    }
});

// 선택된 값에 따라 색상 변경
dropdown.addEventListener('change', function() {
    if (dropdown.value === '') {
        // placeholder가 선택된 경우 회색
        dropdown.style.color = '#999';
    } else {
        // 실제 값이 선택된 경우 검은색
        dropdown.style.color = '#000';
    }
});
