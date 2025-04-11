import {FC} from 'react';
import {IList} from '../../types';
import List from '../List/List';
import {listContainer} from './ListsContainer.css';
import ActionButton from '../ActionButton/ActionButton';

type TListContainerProps = {
  lists: IList[];
  boardId: string;
};

const ListsContainer: FC<TListContainerProps> = ({lists, boardId}) => {
  return (
    <div className={listContainer}>
      {lists.map(v => (
        <List key={v.listId} list={v} boardId={boardId} />
      ))}

      <ActionButton boardId={boardId} listId={''} list />
    </div>
  );
};

export default ListsContainer;
