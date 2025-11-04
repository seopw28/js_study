// 버튼 요소 가져오기: HTML에서 id가 "myButton"인 요소를 찾아서 변수에 저장
const button = document.getElementById('myButton');

// 버튼에 적용할 색상 배열: 클릭할 때마다 이 배열의 색상이 번갈아 바뀜 (2개의 색상)
const colors = ['var(--light-blue)', 'var(--dark-blue)'];

// 현재 색상 인덱스: 배열의 어느 위치에 있는지 추적하는 변수 (초기값 0)
let currentIndex = 0;

// 버튼 클릭 이벤트 리스너: 버튼을 클릭하면 이 함수가 실행됨
button.addEventListener('click', function() {
    // 다음 색상으로 이동: 현재 인덱스에 1을 더하고, 배열의 끝에 도달하면 처음으로 돌아감
    // % 연산자: 나머지 연산으로 배열의 범위를 벗어나지 않도록 함 (2개 색상이므로 0과 1만 반복)
    currentIndex = (currentIndex + 1) % colors.length;
    
    // 버튼 배경색 변경: 버튼의 배경색을 배열의 현재 인덱스에 해당하는 색상으로 변경
    button.style.backgroundColor = colors[currentIndex];
    // style.backgroundColor: 요소의 배경색을 직접 설정하는 속성
});
