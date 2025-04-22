import styled from 'styled-components';
import Title from '../components/common/Title';
import InputText from '../components/common/InputText';
import Button from '../components/common/Button';
import {Link, useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {login} from '../api/auth.api';
import useAlert from '../hooks/useAlert';
import {SignupStyle} from './Signup';
import {useAuthStore} from '../store/authStore';

export interface LoginProps {
  email: string;
  password: string;
}

const Login = () => {
  const nav = useNavigate();
  const showAlert = useAlert();

  const {
    // isloggedIn,
    storeLogin,
    // storeLogout
  } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginProps>();

  const onSubmit = (data: LoginProps) => {
    login(data).then(
      res => {
        // 상태 변화
        storeLogin(res.token);

        showAlert('로그인 성공!!');
        nav('/');
      },
      () => {
        showAlert('로그인 실패 ㅠㅠ');
      },
    );
  };

  return (
    <>
      <Title size="large">로그인</Title>
      <SignupStyle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <InputText
              placeholder="이메일"
              inputType="email"
              {...register('email', {required: true})}
              // value={email}
              // onChange={e => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="error-text">이메일을 입력해주세요.</p>
            )}
          </fieldset>
          <fieldset>
            <InputText
              placeholder="비밀번호"
              inputType="password"
              // value={password}
              // onChange={e => setPassword(e.target.value)}
              {...register('password', {required: true})}
            />
            {errors.password && (
              <p className="error-text">비밀번호를 입력해주세요.</p>
            )}
          </fieldset>
          <fieldset>
            <Button type="submit" size="small" scheme="primary">
              로그인
            </Button>
          </fieldset>
          <div className="info">
            <Link to="/reset">비밀번호 초기화</Link>
          </div>
        </form>
      </SignupStyle>
    </>
  );
};

export const LoginStyle = styled.div`
  max-width: ${({theme}) => theme.layout.width.small};
  margin: 80px auto;

  fieldset {
    border: 0;
    padding: 0 0 8px 0;
    .error-text {
      color: red;
    }
  }

  input {
    width: 100%;
  }

  button {
    width: 100%;
  }

  .info {
    text-align: center;
    padding: 16px 0 0 0;
  }
`;

export default Login;
