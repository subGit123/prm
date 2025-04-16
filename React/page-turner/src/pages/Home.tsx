import Headers from '../components/common/Headers';
import {formatNumber} from '../utils/Format';
const num = 1000;

const Home = () => {
  return (
    <>
      <Headers />
      <div>😍😍book store</div>;<p>count : {formatNumber(num)}</p>
    </>
  );
};

export default Home;
