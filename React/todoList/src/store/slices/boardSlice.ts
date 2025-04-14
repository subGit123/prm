import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {IBoard, IList, ITask} from '../../types';

type TBoardsState = {
  modalActive: boolean;
  boardArray: IBoard[];
};

type TAddBoardAction = {
  board: IBoard;
};

type TDeleteListAction = {
  boardId: string;
  listId: string;
};

type TAddListAction = {
  boardId: string;
  list: IList;
};

type TAddTaskAction = {
  boardId: string;
  listId: string;
  task: ITask;
};

type TDeleteTaskAction = {
  boardId: string;
  listId: string;
  taskId: string;
};

type TDeleteBoardAction = {
  boardId: string;
};

type TSortAction = {
  boardIndex: number;
  droppableIdStart: string;
  droppableIdEnd: string;
  droppableIndexStart: number;
  droppableIndexEnd: number;
  draggableId: string;
};

const initialState: TBoardsState = {
  modalActive: false,
  boardArray: [
    {
      boardId: 'board-0',
      boardName: '첫 번째 게시물',
      lists: [
        {
          listId: 'list-0',
          listName: 'List 1',
          tasks: [
            {
              taskId: 'task-0',
              taskName: 'Task 1',
              taskDescription: 'Description',
              taskOwner: 'Hanbirang',
            },
            {
              taskId: 'task-1',
              taskName: 'Task 2',
              taskDescription: 'Description',
              taskOwner: 'Hanbirang',
            },
          ],
        },
        {
          listId: 'list-1',
          listName: 'List 2',
          tasks: [
            {
              taskId: 'task-3',
              taskName: 'Task 3',
              taskDescription: 'Description',
              taskOwner: 'Hanbirang',
            },
          ],
        },
      ],
    },
  ],
};

const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    // 이전 상태(state) + 업데이트 상태(액션 (payload))
    addBoard: (state, {payload}: PayloadAction<TAddBoardAction>) => {
      state.boardArray.push(payload.board);
    },

    addList: (state, {payload}: PayloadAction<TAddListAction>) => {
      state.boardArray.map(v =>
        v.boardId === payload.boardId
          ? {...v, lists: v.lists.push(payload.list)}
          : v,
      );
    },

    deleteBoard: (state, {payload}: PayloadAction<TDeleteBoardAction>) => {
      state.boardArray = state.boardArray.filter(
        v => v.boardId !== payload.boardId,
      );
    },

    addTask: (state, {payload}: PayloadAction<TAddTaskAction>) => {
      state.boardArray.map(v =>
        v.boardId === payload.boardId
          ? {
              //보드 아이디와 리스트 아이디까지 같아야만 task 업데이트
              ...v,
              lists: v.lists.map(v =>
                v.listId === payload.listId
                  ? {...v, tasks: v.tasks.push(payload.task)}
                  : v,
              ),
            }
          : v,
      );
    },

    updateTask: (state, {payload}: PayloadAction<TAddTaskAction>) => {
      state.boardArray = state.boardArray.map(v =>
        v.boardId === payload.boardId
          ? {
              ...v,
              lists: v.lists.map(v =>
                v.listId === payload.listId
                  ? {
                      ...v,
                      tasks: v.tasks.map(v =>
                        v.taskId === payload.task.taskId ? payload.task : v,
                      ),
                    }
                  : v,
              ),
            }
          : v,
      );
    },

    deleteTask: (state, {payload}: PayloadAction<TDeleteTaskAction>) => {
      state.boardArray = state.boardArray.map(board =>
        board.boardId === payload.boardId
          ? {
              ...board,
              lists: board.lists.map(list =>
                list.listId === payload.listId
                  ? {
                      ...list,
                      tasks: list.tasks.filter(
                        task => task.taskId !== payload.taskId,
                      ),
                    }
                  : list,
              ),
            }
          : board,
      );
    },

    deleteList: (state, {payload}: PayloadAction<TDeleteListAction>) => {
      state.boardArray = state.boardArray.map(v =>
        v.boardId === payload.boardId
          ? {
              ...v,
              lists: v.lists.filter(v => v.listId !== payload.listId),
            }
          : v,
      );
    },

    setModalActive: (state, {payload}: PayloadAction<boolean>) => {
      state.modalActive = payload;
    },

    //   sort: (state, {payload}: PayloadAction<TSortAction>) => {
    //     // same list
    //     if (payload.droppableIdStart === payload.droppableIdEnd) {
    //       const list = state.boardArray[payload.boardIndex].lists.find(
    //         list => list.listId === payload.droppableIdStart,
    //       );
    //       // 변경시키는 아이템을 배열에서 삭제
    //       // return 값으로 지워진 아이템을 잡아준다
    //       const card = list?.tasks.splice(payload.droppableIndexStart, 1);
    //       list?.tasks.splice(payload.droppableIndexEnd, 0, ...card!);
    //     }
    //     // other list
    //     if (payload.droppableIdStart !== payload.droppableIdEnd) {
    //       const listStart = state.boardArray[payload.boardIndex].lists.find(
    //         list => list.listId === payload.droppableIdStart,
    //       );
    //       const card = listStart!.tasks.splice(payload.droppableIndexStart, 1);
    //       const listEnd = state.boardArray[payload.boardIndex].lists.find(
    //         list => list.listId === payload.droppableIdEnd,
    //       );
    //       listEnd?.tasks.splice(payload.droppableIndexEnd, 0, ...card);
    //     }
    //   },
  },
});

export const {
  // sort,
  addBoard,
  addTask,
  addList,
  deleteBoard,
  deleteList,
  updateTask,
  deleteTask,
  setModalActive,
} = boardsSlice.actions;

export const boardsReducer = boardsSlice.reducer;
