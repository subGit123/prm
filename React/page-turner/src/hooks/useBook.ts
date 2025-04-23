// Book Detail에서 주로 사용 예정

import {useEffect, useState} from 'react';
import {BookDetail} from '../models/book.model';
import {fetchBook} from '../api/books.api';

export const useBook = (bookId: string | undefined) => {
  const [book, setBook] = useState<BookDetail | null>(null);

  useEffect(() => {
    if (!bookId) return;

    fetchBook(bookId).then(book => {
      setBook(book);
    });
  }, [bookId]);

  return {book};
};
