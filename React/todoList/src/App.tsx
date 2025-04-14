import {useState} from 'react';
import {
  appContainer,
  board,
  buttons,
  deleteBoardButton,
  loggerButton,
} from './App.css.ts';
import BoardList from './components/BoardList/BoardList';
import ListsContainer from './components/ListsContainer/ListsContainer.tsx';
import {useTypedDispatch, useTypedSelector} from './hooks/redux.ts';
import EditModal from './components/EditModal/EditModal.tsx';
import LoggerModal from './components/LoggerModal/LoggerModal.tsx';
import {deleteBoard} from './store/slices/boardSlice.ts';
import {addLog} from './store/slices/loggerSlice.ts';
import {v4} from 'uuid';

function App() {
  const dispatch = useTypedDispatch();
  const [activeBoardId, setActiveBoardId] = useState('board-0');
  const [isLoggerOpen, setIsLoggerOpen] = useState(false);

  const modalActive = useTypedSelector(v => v.boards.modalActive);

  // 데이터 가져오기
  const boards = useTypedSelector(state => state.boards.boardArray);

  // 특정 데이터 가져오기
  const getActiveBoard = boards.filter(v => v.boardId === activeBoardId)[0];
  const lists = getActiveBoard.lists;

  const handleDeleteBoard = () => {
    if (boards.length > 1) {
      dispatch(
        deleteBoard({
          boardId: getActiveBoard.boardId,
        }),

        dispatch(
          addLog({
            logId: v4(),
            logAuthor: 'user',
            logMessage: `게시판 지우기 : ${getActiveBoard.boardName}`,
            logTimestamp: String(Date.now()),
          }),
        ),
      );

      // 게시판도 업데이트
      const newIdx = () => {
        const idxDelete = boards.findIndex(v => v.boardId === activeBoardId);

        return idxDelete === 0 ? idxDelete + 1 : idxDelete - 1;
      };

      setActiveBoardId(boards[newIdx()].boardId);
    } else {
      alert('최소 게시판 개수는 1개입니다.');
    }
  };

  return (
    <div className={appContainer}>
      {isLoggerOpen ? <LoggerModal setIsLoggerOpen={setIsLoggerOpen} /> : null}
      {modalActive ? <EditModal /> : null}

      <BoardList
        activeBoardId={activeBoardId}
        setActiveBoardId={setActiveBoardId}
      />

      <div className={board}>
        <ListsContainer lists={lists} boardId={getActiveBoard.boardId} />
      </div>

      <div className={buttons}>
        <button className={deleteBoardButton} onClick={handleDeleteBoard}>
          게시판 삭제하기
        </button>
        <button
          className={loggerButton}
          onClick={() => setIsLoggerOpen(!isLoggerOpen)}>
          {isLoggerOpen ? '활동 목록 숨기기' : '활동 목록 보이기'}
        </button>
      </div>
    </div>
  );
}

export default App;
