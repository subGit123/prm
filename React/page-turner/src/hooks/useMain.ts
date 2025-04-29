import {useEffect, useState} from 'react';
import {BookReviewItem} from '../models/book.model';
import {fetchReviewAll} from '../api/review.api';

export const useMain = () => {
  const [reviews, setReviews] = useState<BookReviewItem[]>([]);

  useEffect(() => {
    fetchReviewAll().then(review => setReviews(review));
  }, []);

  return {reviews};
};
