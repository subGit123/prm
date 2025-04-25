import {useEffect, useState} from 'react';
import {BookDetail} from '../models/book.model';
import {fetchBook, likeBook, unLikeBook} from '../api/books.api';
import {useAuthStore} from '../store/authStore';
import useAlert from './useAlert';
import {addCart} from '../api/carts.api';

export const useBook = (bookId: number | undefined) => {
  const [book, setBook] = useState<BookDetail | null>(null);
  const [cartAdded, setCartAdded] = useState(false);

  const {isloggedIn} = useAuthStore();
  const {showAlert} = useAlert();

  const likeToggle = () => {
    // 권한 확인 (로그인 여부)
    if (!isloggedIn) {
      showAlert('로그인이 필요합니다.');
      return;
    }

    if (!book) return;

    if (book.liked) {
      // 라이크 -> 언라이크
      unLikeBook(book.id).then(() => {
        setBook({
          ...book,
          // 낙관적 업데이트 : UI를 바로 업데이트 할 때 사용함!!
          liked: false,
          likes: book.likes - 1,
        });
      });
    } else {
      // 언라이크 -> 라이크
      likeBook(book.id).then(() => {
        setBook({
          ...book,

          // 낙관적 업데이트 : UI를 바로 업데이트 할 때 사용함!!
          liked: true,
          likes: book.likes + 1,
        });
      });
    }
  };

  const addToCart = (quantity: number) => {
    if (!book) return;

    addCart({
      cart_book_id: book.id,
      quantity: quantity,
    }).then(() => {
      setCartAdded(true);
      setTimeout(() => {
        setCartAdded(false);
      }, 3000);
    });
  };

  useEffect(() => {
    if (!bookId) return;

    fetchBook(Number(bookId)).then(book => {
      setBook(Array.isArray(book) ? book[0] : book);
    });
  }, [bookId]);

  return {book, likeToggle, addToCart, cartAdded};
};
