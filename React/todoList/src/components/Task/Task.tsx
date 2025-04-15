import {FC} from 'react';
import {container, title, description} from './Task.css';
import {Draggable} from 'react-beautiful-dnd';

type TTaskProps = {
  index: number;
  id: string;
  boardId: string;
  taskName: string;
  taskDescription: string;
};

const Task: FC<TTaskProps> = ({
  index,
  id,
  // boardId,
  taskName,
  taskDescription,
}) => {
  return (
    <Draggable draggableId={id} index={index}>
      {Provided => (
        <div
          ref={Provided.innerRef}
          {...Provided.draggableProps}
          {...Provided.dragHandleProps}
          className={container}>
          <div className={title}>{taskName}</div>
          <div className={description}>{taskDescription}</div>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
