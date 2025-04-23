import {Book, BookDetail} from '../models/book.model';
import {Pagination} from '../models/pagination.model';
import {httpClient} from './http';

interface FetchBooksParams {
  category_id?: number;
  //   news?: boolean;
  limit: number;
  currentPage?: number;
}

interface FetchRES {
  books: Book[];
  pagination: Pagination;
}

export const fetchBooks = async (params: FetchBooksParams) => {
  try {
    const res = await httpClient.get<FetchRES>('/books/book_list', {
      params,
    });
    return res.data;
  } catch (e) {
    return {
      books: [],
      pagination: {
        totalCount: 0,
        currentPage: 1,
      },
    };
  }
};

export const fetchBook = async (bookId: string) => {
  const res = await httpClient.get<BookDetail>(`/books/${bookId}`);
  return res.data;
};
