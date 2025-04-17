import {formatNumber} from '../utils/Format';
const num = 1000;

const Home = () => {
  return (
    <>
      <div>HOME</div>
      <p>count : {formatNumber(num)}</p>
    </>
  );
};

export default Home;
