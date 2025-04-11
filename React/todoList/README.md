# TodoList

### 패키지 설치

- clsx : css 클래스 이름을 쉽게 조작
- @vanilla-extract/css : css-in-TypeScript 방식으로 스타일 작성
- @vanilla-extract/css-utils : 반복되는 코드 작성을 줄여줌
- @vanilla-extract/vite-plugin : vite 환경에서 vanilla-extract를 사용할 수 있게 해주는 플러그인
- uuid : 데이터베이스에서 고유한 키를 생성할 때 사용
- react-beautiful-dnd : 드래그 앤 드롭 기능을 쉽게 구현할 수 있도록 해줌

rafce

---

### Redux

```js
Action(객체) Dispatch(함수) => Reducer(함수) type return => Redux Store state => React Component Rerendering
```

- 리듀서 : 상태를 업데이트해주는 역할

- Slice : 특정 상태 조각을 관리 (리듀서 + 액션 생성 함수)

- payload : 액션에 전달되는 데이터
