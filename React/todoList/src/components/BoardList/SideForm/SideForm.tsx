import React, {ChangeEvent, FC, useState} from 'react';
import {FiCheck} from 'react-icons/fi';
import {sideForm, input, icon} from './SideForm.css';
import {useTypedDispatch} from '../../../hooks/redux';
import {addBoard} from '../../../store/slices/boardSlice';
import {v4 as uuidv4} from 'uuid';
import {addLog} from '../../../store/slices/loggerSlice';

type TsideFormProps = {
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideForm: FC<TsideFormProps> = ({setIsFormOpen}) => {
  const [inputText, setInputText] = useState('');

  const dispatch = useTypedDispatch();

  // 이벤트 처리 타입
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleOnBlur = () => {
    setIsFormOpen(false);
  };

  const handleClick = () => {
    if (inputText) {
      dispatch(
        addBoard({board: {boardId: uuidv4(), boardName: inputText, lists: []}}),
      );

      dispatch(
        addLog({
          logId: uuidv4(),
          logMessage: `게시판 등록: ${inputText}`,
          logAuthor: 'user',
          logTimestamp: String(Date.now()),
        }),
      );
    }
  };

  return (
    <div className={sideForm}>
      <input
        className={input}
        autoFocus
        type="text"
        placeholder="새로운 게시판 등록하기"
        value={inputText}
        onChange={handleChange}
        onBlur={handleOnBlur}
      />
      <FiCheck className={icon} onMouseDown={handleClick} />
    </div>
  );
};

export default SideForm;
