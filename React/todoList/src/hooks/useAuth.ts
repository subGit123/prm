import {useTypedSelector} from './redux';

export function useAuth() {
  // 리덕스 스토어에서  user값 가져오기
  const {email, id} = useTypedSelector(state => state.user);

  return {
    // !!email이 있다는 뜻
    isAuth: !!email,
    email,
    id,
  };
}
