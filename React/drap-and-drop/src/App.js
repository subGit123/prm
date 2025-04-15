import './App.css';
import {useState} from 'react';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';

const finalSpaceCharacters = [
  {
    id: 'gary',
    name: 'Gary Goodspeed',
  },
  {
    id: 'cato',
    name: 'Little Cato',
  },
  {
    id: 'kvn',
    name: 'kkkkvvvvvvvnnnnnnnnn',
  },
];

function App() {
  const [chatracters, setChatracters] = useState(finalSpaceCharacters);
  const handleEnd = result => {
    // 매개변수에는 source 항목 및 대상 위치와 같은 드래그 이벤트에 대한 정보가 포함이 됨

    // 목적지가 없을 시 종료
    if (!result.destination) return;

    // 리액트 불변성을 지키기 위함
    const items = Array.from(chatracters);

    // 변경시키려는 아이템을 배열에서 삭제 후 가져오기
    const [reorderedItem] = items.splice(result.source.index, 1);

    items.splice(result.destination.index, 0, reorderedItem);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>캐릭터 고르기</h1>
        <DragDropContext>
          <Droppable droppableId="characters">
            {provided => (
              <ul
                className="characters"
                {...provided.droppableProps}
                ref={provided.innerRef}>
                {chatracters.map(({id, name}, idx) => {
                  return (
                    <Draggable key={id} draggableId={id} index={idx}>
                      {provided => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}>
                          <p>{name}</p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </header>
    </div>
  );
}

export default App;
