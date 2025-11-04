// 화면 전환 함수: 사용자가 네비게이션 버튼을 클릭했을 때 호출되는 함수
// 매개변수 num: 표시할 화면의 번호 (1 또는 2)
function showScreen(num) {
    // 모든 화면 숨기기: 현재 어떤 화면이 보이고 있든 상관없이 모든 화면을 숨김
    document.querySelectorAll('.screen').forEach(screen => {
        // document: HTML 문서 전체를 나타내는 객체
        // querySelectorAll('.screen'): 클래스가 'screen'인 모든 요소를 찾아서 배열로 반환
        // forEach(): 배열의 각 요소에 대해 함수를 실행
        // screen => {...}: 화살표 함수 문법, 배열의 각 요소를 screen 변수로 받아서 처리
        screen.classList.remove('active'); 
        // screen: 현재 처리 중인 화면 요소 (div 태그)
        // classList: 요소의 클래스 목록을 관리하는 객체
        // remove('active'): 'active' 클래스를 제거 (화면을 숨기기 위해)
    });
    
    // 모든 버튼 비활성화: 현재 어떤 버튼이 활성화되어 있든 상관없이 모든 버튼을 비활성화
    document.querySelectorAll('.nav-btn').forEach(btn => {
        // querySelectorAll('.nav-btn'): 클래스가 'nav-btn'인 모든 버튼 요소를 찾음
        // btn: 현재 처리 중인 버튼 요소
        btn.classList.remove('active');
        // 'active' 클래스를 제거하여 버튼의 파란색 배경을 제거 (비활성화 상태로 변경)
    });
    
    // 선택한 화면 표시: 사용자가 클릭한 버튼에 해당하는 화면을 보이게 함
    document.getElementById('screen' + num).classList.add('active');
    // getElementById(): ID로 요소를 찾는 메서드 (ID는 고유해야 하므로 하나의 요소만 반환)
    // 'screen' + num: 문자열 연결 (num이 1이면 'screen1', num이 2이면 'screen2')
    // classList.add('active'): 'active' 클래스를 추가하여 화면을 표시 (CSS에서 .screen.active는 display: flex로 설정됨)
    
    // 선택한 버튼 활성화: 사용자가 클릭한 버튼을 활성화 상태로 변경
    event.target.classList.add('active');
    // event: 브라우저가 자동으로 생성하는 이벤트 객체 (클릭 이벤트 정보를 담고 있음)
    // target: 이벤트가 발생한 요소 (클릭된 버튼)
    // classList.add('active'): 'active' 클래스를 추가하여 버튼의 배경색을 파란색으로 변경
}
