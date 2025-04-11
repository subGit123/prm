import {GrSubtract} from 'react-icons/gr';
import Task from '../Task/Task';
import ActionButton from '../ActionButton/ActionButton';
import {IList, ITask} from '../../types';
import {FC} from 'react';
import {useTypedDispatch} from '../../hooks/redux';
import {deleteList, setModalActive} from '../../store/slices/boardSlice';
import {addLog} from '../../store/slices/loggerSlice';
import {v4} from 'uuid';
import {setModalData} from '../../store/slices/modalSlice';
import {deleteButton, header, listWrapper, name} from './List.css';

type TListProps = {
  boardId: string;
  list: IList;
};

const List: FC<TListProps> = ({list, boardId}) => {
  const dispatch = useTypedDispatch();

  const handleListDelete = (listId: string) => {
    dispatch(deleteList({boardId, listId}));
    dispatch(
      addLog({
        logId: v4(),
        logMessage: `리스트 삭제하기 : ${list.listName}`,
        logAuthor: 'user',
        logTimestamp: String(Date.now()),
      }),
    );
  };

  const handleTaskChange = (
    boardId: string,
    listId: string,
    taskId: string,
    task: ITask,
  ) => {
    dispatch(
      setModalData({
        boardId,
        listId,
        task,
      }),
    );

    dispatch(setModalActive(true));
  };

  return (
    <div className={listWrapper}>
      <div className={header}>
        <div className={name}>{list.listName}</div>
        <GrSubtract
          className={deleteButton}
          onClick={() => handleListDelete(list.listId)}
        />
      </div>

      {list.tasks.map((v, idx) => (
        <div
          onClick={() => handleTaskChange(boardId, list.listId, v.taskId, v)}
          key={v.taskId}>
          <Task
            taskName={v.taskName}
            taskDescription={v.taskDescription}
            boardId={boardId}
            id={v.taskId}
            index={idx}
          />
        </div>
      ))}
      <ActionButton />
    </div>
  );
};

export default List;
