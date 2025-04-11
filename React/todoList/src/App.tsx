import {useState} from 'react';
import {appContainer, board, buttons} from './App.css.ts';
import BoardList from './components/BoardList/BoardList';
import ListsContainer from './components/ListsContainer/ListsContainer.tsx';
import {useTypedSelector} from './hooks/redux.ts';

function App() {
  const [activeBoardId, setActiveBoardId] = useState('board-0');

  // 데이터 가져오기
  const boards = useTypedSelector(state => state.boards.boardArray);

  // 특정 데이터 가져오기
  const getActiveBoard = boards.filter(v => v.boardId === activeBoardId)[0];
  const lists = getActiveBoard.lists;

  return (
    <div className={appContainer}>
      <BoardList
        activeBoardId={activeBoardId}
        setActiveBoardId={setActiveBoardId}
      />

      <div className={board}>
        <ListsContainer lists={lists} boardId={getActiveBoard.boardId} />
      </div>

      <div className={buttons}>
        <button>게시판 삭제하기</button>
        <button></button>
      </div>
    </div>
  );
}

export default App;
