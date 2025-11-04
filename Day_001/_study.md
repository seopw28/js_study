# Day 001: 웹앱 개발 필수 지식

## 📚 웹앱이란?
웹앱은 웹 브라우저에서 실행되는 애플리케이션입니다. 
웹앱을 만들기 위해서는 **3가지 언어**를 배워야 합니다.

---

## 1️⃣ HTML - 웹페이지의 뼈대 (구조)

### HTML이란?
**HTML**은 HyperText Markup Language의 약자로, 웹페이지의 **구조**를 만드는 언어입니다.
사람의 뼈대처럼 웹페이지의 기본 틀을 만들어줍니다.

### 현재 프로젝트의 기본 구조
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
    <header class="header">
        <h2 class="header-title">Home</h2>
    </header>
</body>
</html>
```

### 설명
- `<!DOCTYPE html>`: "이건 HTML5 문서야"라고 브라우저에게 알려주는 선언문
- `<html>`: HTML 문서의 시작과 끝을 나타내는 태그
- `<head>`: 페이지 정보를 담는 영역 (사용자에게 보이지 않음)
  - `<meta charset="UTF-8">`: 한글 등 다양한 문자를 표시하기 위한 인코딩 설정
  - `<title>`: 브라우저 탭에 표시되는 제목
  - `<link rel="stylesheet" href="../colors.css">`: 전역 컬러 팔레트 파일 연결
  - `<link rel="stylesheet" href="style.css">`: CSS 스타일 파일 연결
- `<body>`: 실제로 화면에 보이는 내용을 작성하는 영역

### 시맨틱 태그 (Semantic Tags)
현재 코드에서 사용하는 의미 있는 태그들:

```html
<header class="header">  <!-- 헤더 영역: 페이지 상단 영역을 의미 -->
    <h2 class="header-title">Home</h2>  <!-- 제목 태그 -->
</header>
```

- `<header>`: 페이지 상단 헤더 영역을 나타내는 의미론적 태그
- 다른 시맨틱 태그들: `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` 등

### H1, H2 제목 태그를 사용하는 이유

**⚠️ 중요: 글꼴과 글자 크기를 CSS로 조절할 수 있지만, H1~H6 태그를 사용해야 하는 이유가 있습니다!**

#### 1. 시맨틱 HTML (의미론적 구조)
- H1, H2는 단순히 "크게 보이는 텍스트"가 아니라 **문서의 계층 구조**를 나타냅니다
- H1은 가장 중요한 제목, H2는 그 다음 수준의 제목을 의미합니다

#### 2. SEO (검색 엔진 최적화)
- 검색 엔진(구글, 네이버 등)이 페이지의 중요 정보를 이해할 수 있습니다
- H1 태그는 페이지의 주제를 나타내는 중요한 신호입니다

#### 3. 접근성 (Accessibility)
- 스크린 리더(시각 장애인용)가 페이지 구조를 이해하고 사용자에게 전달합니다
- "제목 1", "제목 2"로 읽어주어 문서 구조를 파악할 수 있습니다

#### 4. 문서 구조화
- H1 하나 + H2 여러 개 구조로 문서의 계층을 명확히 표현합니다
- 단순히 `<div>` + CSS로 크기만 조절하면 의미론적 구조가 없습니다

**예시:**
```html
<!-- ✅ 좋은 예: 의미론적 구조 + CSS로 크기 조절 -->
<h1 class="main-title">메인 제목</h1>
<h2 class="sub-title">부제목</h2>
```

```css
/* CSS에서 자유롭게 크기 조절 가능 */
.main-title {
    font-size: 32px;  /* 원하는 크기로 설정 */
}

.sub-title {
    font-size: 24px;  /* 원하는 크기로 설정 */
}
```

```html
<!-- ❌ 나쁜 예: 의미 없음, SEO와 접근성 문제 -->
<div style="font-size: 30px;">메인 제목</div>
<div style="font-size: 24px;">부제목</div>
```

**핵심 포인트:**
- H1, H2를 사용해도 **CSS로 크기를 자유롭게 조절할 수 있습니다**
- 의미론적 구조는 유지하면서 디자인은 완전히 제어 가능
- 브라우저 기본 스타일은 CSS로 덮어쓸 수 있음

### class 속성 (중요!)
```html
<h2 class="header-title">Home</h2>
```
- `class="header-title"`: 이 요소에 **클래스 이름**을 붙여줌
- CSS에서 같은 클래스를 가진 여러 요소에 스타일을 한 번에 적용 가능
- 하나의 요소에 여러 클래스를 붙일 수 있음 (예: `class="header-title active"`)

### CSS 파일 연결
```html
<link rel="stylesheet" href="../colors.css">  <!-- 전역 컬러 팔레트 -->
<link rel="stylesheet" href="style.css">      <!-- 개별 스타일 -->
```
- `<head>` 태그 안에 작성
- 여러 CSS 파일을 연결할 수 있음 (위에서 아래로 순서대로 적용)
- `../`는 상위 폴더를 의미 (colors.css는 Day_001 폴더 밖에 있음)

---

## 2️⃣ CSS - 웹페이지의 디자인 (스타일)

### CSS란?
**CSS**는 Cascading Style Sheets의 약자로, 웹페이지를 **예쁘게 꾸며주는** 언어입니다.
HTML로 만든 뼈대에 디자인을 입혀주는 역할을 합니다.

### 현재 프로젝트의 CSS 구조

#### 1. 전역 컬러 팔레트 (colors.css)
```css
:root {
    --primary-light: #283f80;  /* 밝은 파란색 */
    --gray-bg: #00000036;       /* 배경용 회색 */
    --text-white: #ffffff;      /* 흰색 텍스트 */
}
```
- CSS 변수(Custom Properties)를 사용하여 색상을 중앙에서 관리
- `var(--변수명)` 형태로 사용
- 모든 Day 폴더에서 공통으로 사용 가능

#### 2. 기본 CSS 문법
```css
선택자 {
    속성: 값;
    속성: 값;
}
```

### 현재 프로젝트 코드 분석

#### body 스타일
```css
body {
    margin: 0;                          /* 브라우저 기본 마진 제거 */
    padding: 0;                         /* 브라우저 기본 패딩 제거 */
    background-color: var(--gray-bg);   /* 전역 컬러 팔레트 사용 */
    display: flex;                      /* flexbox 레이아웃 사용 */
    flex-direction: column;             /* 세로 방향 배치 */
    min-height: 100vh;                  /* 화면 전체 높이 사용 */
    font-family: 'Calibri', Arial, sans-serif;
}
```

**핵심 개념:**
- `display: flex`: Flexbox 레이아웃 활성화
- `flex-direction: column`: 자식 요소들을 세로로 배치
- `min-height: 100vh`: 화면 높이의 100% (vh = viewport height)
- `var(--gray-bg)`: 전역 컬러 팔레트에서 색상 가져오기

#### header 스타일
```css
.header {
    background-color: var(--primary-light);
    color: var(--text-white);
    padding: 20px 24px;                  /* 위아래 20px, 좌우 24px */
    flex-shrink: 0;                      /* 헤더가 축소되지 않음 */
    width: 100%;                         
    height: 4.5vh;                       /* 화면 높이의 4.5% */
    display: flex;                       /* 내부를 flex로 레이아웃 */
    align-items: center;                 /* 세로 가운데 정렬 */
    justify-content: center;             /* 가로 가운데 정렬 */
}
```

**핵심 개념:**
- `flex-shrink: 0`: flex 컨테이너 내에서 이 요소가 줄어들지 않도록 고정
- `box-sizing: border-box`: 패딩과 테두리를 포함해서 크기 계산
- `height: 4.5vh`: 화면 높이의 4.5% (반응형 높이)
- `display: flex` + `align-items: center` + `justify-content: center`: 내용을 정중앙에 배치

#### Flexbox 정렬 방법
```css
/* 가로 방향 가운데 정렬 */
display: flex;
justify-content: center;  /* 수평 중앙 */

/* 세로 방향 가운데 정렬 */
display: flex;
align-items: center;      /* 수직 중앙 */

/* 둘 다 사용하면 완전 중앙 정렬 */
display: flex;
justify-content: center;  /* 가로 중앙 */
align-items: center;      /* 세로 중앙 */
```

### 글자 크기 단위

#### px (픽셀) - 고정 크기
```css
font-size: 30px;  /* 항상 30픽셀 크기 */
```

#### vh, vw - 화면 비율 크기
```css
font-size: 3vw;   /* 화면 너비의 3% */
font-size: 2.5vh; /* 화면 높이의 2.5% */
height: 4.5vh;    /* 화면 높이의 4.5% */
```

#### rem, em - 상대 크기
```css
font-size: 2rem;  /* 기준 폰트 크기의 2배 */
```

### 자주 쓰는 CSS 속성들
```css
color: var(--text-white);        /* 텍스트 색상 (전역 컬러 사용) */
background-color: var(--primary-light); /* 배경 색상 */
font-size: 30px;                /* 글자 크기 */
padding: 20px 24px;             /* 위아래 20px, 좌우 24px */
margin: 0;                      /* 외부 여백 제거 */
width: 100%;                    /* 너비 100% */
height: 4.5vh;                  /* 높이 (화면 기준) */
display: flex;                  /* flexbox 레이아웃 */
box-sizing: border-box;         /* 패딩 포함 크기 계산 */
```

### 선택자 종류
```css
/* 1. 태그 선택자 - 해당 태그 모두에 적용 */
body {
    margin: 0;
}

/* 2. class 선택자 - class가 "header"인 요소들에 적용 */
.header {
    background-color: blue;
}

/* 3. class 내부 태그 선택 - .header 안의 h2에만 적용 */
.header h2 {
    color: white;
}
```

---

## 3️⃣ JavaScript - 웹페이지의 동작 (기능)

**⚠️ 현재 프로젝트에는 JavaScript가 구현되어 있지 않습니다.**
- 현재 Day_001 폴더에는 HTML 구조와 CSS 스타일만 있습니다
- JavaScript는 다음 단계에서 추가할 예정입니다
- 웹앱의 동적인 기능(버튼 클릭, 텍스트 변경 등)을 구현할 때 사용됩니다

---

## 🔗 파일들이 함께 작동하는 방식

### 현재 프로젝트 구조
```
JS/
  ├── colors.css          (전역 컬러 팔레트)
  └── Day_001/
      ├── index.html      (구조)
      └── style.css       (디자인)
```

### 실행 순서
1. 브라우저가 `index.html`을 읽음
2. `<link rel="stylesheet" href="../colors.css">`로 전역 컬러 팔레트 불러옴
3. `<link rel="stylesheet" href="style.css">`로 CSS 스타일 불러옴
4. HTML 구조에 스타일이 적용되어 화면에 표시됨

---

## 📝 현재 프로젝트 구현 내용 분석

### 실제 구현된 HTML 구조
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
    <header class="header">
        <h2 class="header-title">Home</h2>
    </header>
</body>
</html>
```

**구현된 요소:**
- `<header>`: 페이지 상단 헤더 영역 (시맨틱 태그)
- `<h2 class="header-title">`: 헤더 내 제목 (의미론적 구조 + 클래스)

**사용된 속성:**
- `class="header"`: 헤더 영역 스타일링용 클래스
- `class="header-title"`: 헤더 제목 스타일링용 클래스

### 실제 구현된 CSS 스타일

#### 1. body 스타일 (전체 페이지)
```css
body {
    margin: 0;                          /* 브라우저 기본 마진 제거 */
    padding: 0;                         /* 브라우저 기본 패딩 제거 */
    background-color: var(--gray-bg);   /* 전역 컬러 팔레트 사용 */
    display: flex;                      /* flexbox 레이아웃 */
    flex-direction: column;              /* 세로 방향 배치 */
    min-height: 100vh;                  /* 화면 전체 높이 */
    font-family: 'Calibri', Arial, sans-serif;
}
```

**실제 동작:**
- 페이지 전체가 flex 컨테이너로 설정되어 세로 방향으로 배치
- 배경색은 전역 컬러 팔레트에서 가져옴
- 최소 높이는 화면 전체 높이로 설정

#### 2. .header 스타일 (헤더 영역)
```css
.header {
    background-color: var(--primary-light);  /* 전역 컬러 팔레트 */
    color: var(--text-white);                /* 전역 컬러 팔레트 */
    padding: 20px 24px;                      /* 위아래 20px, 좌우 24px */
    flex-shrink: 0;                          /* 축소 방지 */
    width: 100%;                             /* 전체 너비 */
    box-sizing: border-box;                  /* 패딩 포함 크기 계산 */
    height: 4.5vh;                          /* 화면 높이의 4.5% */
    display: flex;                           /* 내부 flex 레이아웃 */
    align-items: center;                     /* 세로 중앙 정렬 */
    justify-content: center;                 /* 가로 중앙 정렬 */
}
```

**실제 동작:**
- 헤더 높이는 화면 높이의 4.5%로 반응형 설정
- 내부 요소(h2)를 flex로 완전 중앙에 배치
- 전역 컬러 팔레트 사용으로 색상 통일

#### 3. .header-title 스타일 (헤더 제목)
```css
.header-title {
    margin: 0;                          /* 기본 마진 제거 */
    font-size: 30px;                   /* 글자 크기 30px */
    color: var(--text-white);           /* 전역 컬러 팔레트 */
    font-family: 'Calibri', Arial, sans-serif;
}
```

**실제 동작:**
- h2 태그의 기본 마진을 제거하여 정확한 중앙 배치
- 글자 크기는 30px로 고정
- 전역 컬러 팔레트에서 흰색 사용

### 전역 컬러 팔레트 (colors.css) 사용

현재 프로젝트에서 실제 사용 중인 색상:
```css
var(--gray-bg)         /* body 배경색 */
var(--primary-light)   /* header 배경색 */
var(--text-white)       /* 텍스트 색상 */
```

**사용 방법:**
- CSS에서 `var(--변수명)` 형태로 사용
- 모든 색상은 `colors.css`에서 중앙 관리

---

## ✅ 오늘 배운 핵심 정리

### HTML
1. **시맨틱 태그 사용**: `<header>`, `<h1>`, `<h2>` 등 의미 있는 태그 사용
2. **H1, H2 사용 이유**: 
   - 단순히 크기를 크게 하려면 CSS로도 가능하지만
   - **시맨틱 구조, SEO, 접근성**을 위해 제목 태그 사용 필요
3. **전역 컬러 팔레트 연결**: `<link rel="stylesheet" href="../colors.css">`
4. **class 속성**: CSS에서 선택하기 위한 클래스 이름 지정

### CSS
1. **전역 컬러 팔레트 사용**: `var(--변수명)` 형태로 색상 가져오기
2. **Flexbox 레이아웃**: 
   - `display: flex`로 flex 컨테이너 생성
   - `flex-direction: column`으로 세로 배치
   - `align-items: center`로 세로 중앙 정렬
   - `justify-content: center`로 가로 중앙 정렬
3. **반응형 단위**: 
   - `vh` (viewport height): 화면 높이 기준
   - `vw` (viewport width): 화면 너비 기준
4. **box-sizing**: `border-box`로 패딩 포함 크기 계산

### JavaScript
- 현재 프로젝트에는 JavaScript가 구현되어 있지 않음
- 다음 단계에서 추가 예정

---

## 🎯 다음 단계 공부 방향

- HTML: 더 많은 시맨틱 태그들 (`nav`, `main`, `section`, `article`, `footer`)
- CSS: 
  - Flexbox 고급 활용
  - Grid 레이아웃
  - 반응형 디자인 (미디어 쿼리)
- JavaScript: 
  - 이벤트 처리 (`addEventListener`)
  - DOM 조작
  - 변수, 함수, 조건문

---

## 📌 현재 프로젝트에서 사용 중인 기술

### 전역 컬러 팔레트 변수 예시
```css
var(--primary-light)   /* 밝은 파란색 */
var(--gray-bg)         /* 배경 회색 */
var(--text-white)       /* 흰색 텍스트 */
```

### Flexbox 정렬 패턴
```css
/* 완전 중앙 정렬 */
display: flex;
align-items: center;      /* 세로 중앙 */
justify-content: center;  /* 가로 중앙 */
```

### 반응형 높이/너비
```css
height: 4.5vh;  /* 화면 높이의 4.5% */
width: 100%;    /* 부모 요소의 100% */
min-height: 100vh;  /* 최소 화면 높이만큼 */
```

