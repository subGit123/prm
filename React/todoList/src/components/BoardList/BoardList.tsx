import React, {FC, useRef, useState} from 'react';
import {useTypedDispatch, useTypedSelector} from '../../hooks/redux';
import SideForm from './SideForm/SideForm';
import {FiLogIn, FiPlusCircle} from 'react-icons/fi';
import {GoSignOut} from 'react-icons/go';
import {
  addButton,
  addSection,
  boardItem,
  boardItemActive,
  container,
  title,
} from './BoardList.css';
import clsx from 'clsx';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import {app} from '../../firebase';
import {removeUser, setUser} from '../../store/slices/userSlice';
import {useAuth} from '../../hooks/useAuth';

type TBoardListProps = {
  activeBoardId: string;
  setActiveBoardId: React.Dispatch<React.SetStateAction<string>>;
  // 상태 업데이트 함수를 나타내는 타입
};

// FC function Component의 약자 = 기능형 컴포넌트 정의
const BoardList: FC<TBoardListProps> = ({activeBoardId, setActiveBoardId}) => {
  const {boardArray} = useTypedSelector(state => state.boards);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleClick = () => {
    setIsFormOpen(!isFormOpen);
  };

  // const dispatch = useTypedDispatch();

  // const auth = getAuth(app);
  // const provider = new GoogleAuthProvider();

  // const {isAuth} = useAuth();

  // const handleLogin = () => {
  //   signInWithPopup(auth, provider)
  //     .then(userCredential => {
  //       console.log(userCredential);
  //       dispatch(
  //         setUser({
  //           email: userCredential.user.email,
  //           id: userCredential.user.uid,
  //         }),
  //       );
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // };

  // const handleSignOut = () => {
  //   signOut(auth)
  //     .then(() => {
  //       dispatch(removeUser());
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // };

  return (
    <div className={container}>
      <div className={title}>게시판 :</div>
      {boardArray.map((board, idx) => (
        <div
          onClick={() => setActiveBoardId(boardArray[idx].boardId)}
          key={board.boardId}
          className={clsx(
            {
              [boardItemActive]:
                boardArray.findIndex(v => v.boardId === activeBoardId) === idx,
            },
            {
              [boardItem]:
                boardArray.findIndex(v => v.boardId === activeBoardId) !== idx,
            },
          )}>
          <div>{board.boardName}</div>
        </div>
      ))}

      <div className={addSection}>
        {isFormOpen ? (
          <SideForm setIsFormOpen={setIsFormOpen} />
        ) : (
          <FiPlusCircle className={addButton} onClick={handleClick} />
        )}
      </div>
    </div>
    // <div className={container}>
    //   <div className={title}>게시판 :</div>
    //   {boardArray.map((board, index) => (
    //     <div
    //       key={board.boardId}
    //       onClick={() => setActiveBoardId(boardArray[index].boardId)}
    //       className={clsx(
    //         {
    //           [boardItemActive]:
    //             boardArray.findIndex(b => b.boardId === activeBoardId) ===
    //             index,
    //         },
    //         {
    //           [boardItem]:
    //             boardArray.findIndex(b => b.boardId === activeBoardId) !==
    //             index,
    //         },
    //       )}>
    //       <div>{board.boardName}</div>
    //     </div>
    //   ))}
    //   <div className={addSection}>
    //     {isFormOpen ? (
    //       <SideForm inputRef={inputRef} setIsFormOpen={setIsFormOpen} />
    //     ) : (
    //       <FiPlusCircle className={addButton} onClick={handleClick} />
    //     )}
    //     {isAuth ? (
    //       <GoSignOut className={addButton} onClick={handleSignOut} />
    //     ) : (
    //       <FiLogIn className={addButton} onClick={handleLogin} />
    //     )}
    //   </div>
    // </div>
  );
};

export default BoardList;
