import {useState} from 'react';
import Home from './pages/Home';

function App() {
  const [count, setCount] = useState(0);

  const oncli = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Home />
      <h1>book store</h1>
      {count}
      <button onClick={oncli}>클릭</button>
    </>
  );
}

export default App;
