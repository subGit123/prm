import {configureStore} from '@reduxjs/toolkit';
import reducer from './reducer/reducer';

const store = configureStore({
  reducer: reducer,
});

// Redux 스토어의 상태 타입을 정의
export type RootState = ReturnType<typeof store.getState>;

// Redux 스토어의 dispatch 타입을 정의
// dispatch : 상태 업데이트 (우편 배달부)
export type AppDispatch = typeof store.dispatch;

export default store;
