import styled from 'styled-components';
import Title from '../components/common/Title';
import Bookfilter from '../components/Books/Bookfilter';
import BooksList from '../components/Books/BooksList';
import BookEmpty from '../components/Books/BookEmpty';
import Pagination from '../components/Books/Pagination';
import BookViewSwitcher from '../components/Books/BookViewSwitcher';
import {useBooks} from '../hooks/useBooks';

const Books = () => {
  const {books, pagination, isEmpty} = useBooks();

  return (
    <>
      <Title size="large">도서 검색 결과</Title>
      <BookStyle>
        <div className="filter">
          <Bookfilter />
          <BookViewSwitcher />
        </div>

        {!isEmpty && <BooksList books={books} />}
        {isEmpty && <BookEmpty />}
        {!isEmpty && <Pagination pagination={pagination} />}
      </BookStyle>
    </>
  );
};

const BookStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;

  .filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }
`;

export default Books;
