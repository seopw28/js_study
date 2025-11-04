# Day 002: 바텀 네비게이션과 화면 전환

## 📚 오늘 배울 내용

- 바텀 네비게이션 탭 구현
- JavaScript로 화면 전환 기능
- 최소한의 코드로 핵심 기능 구현

---

## 1️⃣ HTML 구조

### 기본 구조
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>APP Name</title>
    <link rel="stylesheet" href="../colors.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- 화면 1 -->
    <div id="screen1" class="screen active">
        <h2>화면 1</h2>
    </div>

    <!-- 화면 2 -->
    <div id="screen2" class="screen">
        <h2>화면 2</h2>
    </div>

    <!-- 바텀 네비게이션 -->
    <nav class="bottom-nav">
        <button class="nav-btn active" onclick="showScreen(1)">화면1</button>
        <button class="nav-btn" onclick="showScreen(2)">화면2</button>
    </nav>

    <script src="script.js"></script>
</body>
</html>
```

### 핵심 요소 설명

#### 1. 화면 구조
```html
<div id="screen1" class="screen active">
    <h2>화면 1</h2>
</div>
```
- `class="screen"`: 모든 화면에 공통 클래스
- `class="active"`: 현재 보이는 화면에만 추가
- `id="screen1"`: JavaScript에서 특정 화면을 선택하기 위한 고유 ID

#### 2. 바텀 네비게이션
```html
<nav class="bottom-nav">
    <button class="nav-btn active" onclick="showScreen(1)">화면1</button>
    <button class="nav-btn" onclick="showScreen(2)">화면2</button>
</nav>
```
- `<nav>`: 네비게이션 영역을 나타내는 시맨틱 태그
- `onclick="showScreen(1)"`: 버튼 클릭 시 JavaScript 함수 실행
- `class="active"`: 현재 선택된 탭 표시

---

## 2️⃣ CSS 스타일

### 화면 스타일
```css
.screen {
    display: none;                      /* 기본적으로 숨김 */
    min-height: calc(100vh - 60px);     /* 화면 높이에서 네비 높이만큼 빼기 */
    padding: 20px;
    justify-content: center;            /* 가로 중앙 정렬 */
    align-items: center;                /* 세로 중앙 정렬 */
}

.screen.active {
    display: flex;                      /* active 클래스가 있으면 표시 */
}
```

**핵심 개념:**
- `display: none`: 요소를 완전히 숨김 (공간도 차지하지 않음)
- `display: flex`: flex 컨테이너로 만들어 중앙 정렬 가능
- `.screen.active`: active 클래스가 있는 화면만 표시

### 바텀 네비게이션 스타일
```css
.bottom-nav {
    position: fixed;                    /* 화면 하단에 고정 */
    bottom: 0;                          /* 화면 맨 아래 */
    width: 100%;                        /* 전체 너비 */
    height: 60px;                       /* 네비게이션 높이 */
    background-color: var(--dark-blue);
    display: flex;
    justify-content: space-around;      /* 버튼들을 균등하게 배치 */
    align-items: center;
}

.nav-btn {
    flex: 1;                            /* 버튼이 균등하게 공간 차지 */
    height: 100%;
    background-color: transparent;      /* 투명 배경 */
    border: none;                      /* 테두리 없음 */
    color: var(--white);
    font-size: 16px;
    cursor: pointer;                    /* 마우스 포인터를 손가락 모양으로 */
}

.nav-btn.active {
    background-color: var(--light-blue); /* 활성화된 버튼 배경색 변경 */
}
```

**핵심 개념:**
- `position: fixed`: 화면 스크롤과 상관없이 고정 위치
- `bottom: 0`: 화면 하단에 배치
- `flex: 1`: flex 컨테이너 내에서 남은 공간을 균등하게 분배
- `justify-content: space-around`: 버튼들 사이에 균등한 간격

---

## 3️⃣ JavaScript 기능

### 화면 전환 함수
```javascript
function showScreen(num) {
    // 모든 화면 숨기기
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // 모든 버튼 비활성화
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // 선택한 화면 표시
    document.getElementById('screen' + num).classList.add('active');
    
    // 선택한 버튼 활성화
    event.target.classList.add('active');
}
```

### 코드 설명

#### 1. `document.querySelectorAll('.screen')`
- 클래스가 `screen`인 모든 요소를 배열로 가져옴
- `.forEach()`로 각 요소에 대해 함수 실행

#### 2. `classList.remove('active')`
- 요소에서 `active` 클래스 제거
- 모든 화면과 버튼에서 `active` 제거하여 초기화

#### 3. `document.getElementById('screen' + num)`
- ID가 `screen1` 또는 `screen2`인 요소 선택
- `num` 값에 따라 동적으로 ID 생성

#### 4. `classList.add('active')`
- 요소에 `active` 클래스 추가
- 선택한 화면과 버튼에만 `active` 추가

#### 5. `event.target`
- 클릭 이벤트가 발생한 요소 (버튼)
- 클릭한 버튼에 `active` 클래스 추가

---

## 🔄 동작 원리

### 1. 초기 상태
- `screen1`에 `active` 클래스가 있어서 화면 1이 표시됨
- 첫 번째 버튼에 `active` 클래스가 있어서 파란색 배경

### 2. 화면2 버튼 클릭
1. `onclick="showScreen(2)"` 실행
2. 모든 화면에서 `active` 제거 → 모든 화면 숨김
3. 모든 버튼에서 `active` 제거
4. `screen2`에 `active` 추가 → 화면 2 표시
5. 클릭한 버튼에 `active` 추가 → 버튼 배경색 변경

### 3. CSS의 역할
- `.screen`: 기본적으로 `display: none` (숨김)
- `.screen.active`: `display: flex` (표시)
- `.nav-btn.active`: 배경색 변경으로 활성화 표시

---

## ✅ 핵심 정리

### HTML
- `class="screen active"`: 화면 표시/숨김 제어
- `onclick="showScreen(1)"`: 버튼 클릭 이벤트 연결
- `<nav>`: 네비게이션 영역 시맨틱 태그

### CSS
- `display: none` / `display: flex`: 화면 표시/숨김
- `position: fixed` + `bottom: 0`: 바텀 네비게이션 고정
- `flex: 1`: 버튼 균등 배치

### JavaScript
- `querySelectorAll()`: 여러 요소 선택
- `getElementById()`: ID로 요소 선택
- `classList.add()` / `classList.remove()`: 클래스 추가/제거
- `event.target`: 이벤트가 발생한 요소

---

## 🎯 다음 단계

- 화면에 더 많은 컨텐츠 추가
- 3개 이상의 화면 전환
- 애니메이션 효과 추가
- 화면별 다른 기능 구현

