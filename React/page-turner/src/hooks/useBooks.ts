// 쿼리 스트링 업데이트 용

import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {Book} from '../models/book.model';
import {Pagination} from '../models/pagination.model';
import {fetchBooks} from '../api/books.api';
import {QUERYSTRING} from '../constants/querySting';
import {LIMIT} from '../constants/pagination';

export const useBooks = () => {
  const location = useLocation();

  const [books, setBooks] = useState<Book[]>([]);
  const [pagination, setPaination] = useState<Pagination>({
    totalCount: 0,
    currentPage: 1,
  });

  // Empty 처리
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    fetchBooks({
      category_id: params.get(QUERYSTRING.CATEGORY_ID)
        ? Number(params.get(QUERYSTRING.CATEGORY_ID))
        : undefined,
      // news: params.get(QUERYSTRING.NEWS) ? true : undefined,
      limit: LIMIT,
      currentPage: params.get(QUERYSTRING.PAGE)
        ? Number(params.get(QUERYSTRING.PAGE))
        : 1,
    }).then(({books, pagination}) => {
      setBooks(books);
      setPaination(pagination);
      setIsEmpty(books.length == 0);
    });
  }, [location.search]);

  return {books, pagination, isEmpty};
};
