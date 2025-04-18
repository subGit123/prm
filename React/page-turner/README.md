# pageTurner

### 폴더 구조

- pages : 라우트에 대응하는 페이지 컴포넌트
- components : 공통 컴포넌트
- utils : 유틸리티
- hooks : 리액트 훅
- model : 모델
- api

---

### 설치된 패키지

- sanitize css : 다양한 브라우저에서 스타일의 일관성을 유지해줌
- styled components : CSS-in-JS 방식으로 컴포넌트별로 스타일을 관리
- @types/testing-library\_\_react : 컴포넌트 테스트를 위함
- react-icons : 리액트 아이콘을 사용하기 위함

---

### global style

- reset css

- normalize css

- sanitize css

---

### styled components

1. 전역 충돌 방지
2. 의존성 관리
3. 불필요한 코드 , 오버라이딩 방지
4. 상태 공유
5. 동적 스타일링

---

### thema 사용 이유

1. UI , UX의 일관성 유지
2. 유지보수 용이
3. 확장성
4. 재사용성
5. 사용자 정의

ThemeProvider : 테마를 애플리케이션에 적용하는 데 사용되는 컴포넌트

---

### context api

전역 상태를 관리하고 여러 컴포넌트 간에 데이터를 전달하는데 사용
