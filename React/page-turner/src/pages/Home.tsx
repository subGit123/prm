import Button from '../components/common/Button';
import InputText from '../components/common/InputText';
import Title from '../components/common/Title';
import {formatNumber} from '../utils/Format';
const num = 1000;

const Home = () => {
  return (
    <>
      <Title size="large" color="background">
        제목
      </Title>
      <Button size="large" scheme="primary" disabled={true} isloading={true}>
        버튼 테스트
      </Button>
      <InputText placeholder="여기에 입력하세요" />
      <div>HOME</div>
      <p>count : {formatNumber(num)}</p>
    </>
  );
};

export default Home;
