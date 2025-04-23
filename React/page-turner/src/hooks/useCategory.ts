// 카테고리 api를 가져오는 커스텀 훅

import {useEffect, useState} from 'react';
import {Category} from '../models/category.model';
import {fetchCategory} from '../api/category.api';
import {useLocation} from 'react-router-dom';

const useCategory = () => {
  const location = useLocation();
  const [category, setCategory] = useState<Category[]>([]);

  // URL의 쿼리 파라미터를 기반으로 특정 카테고리를 활성화하는 함수
  const setActive = () => {
    const params = new URLSearchParams(location.search);

    if (params.get('category_id')) {
      setCategory(prev => {
        return prev.map(item => {
          return {
            ...item,
            isActive: item.category_id === Number(params.get('category_id')),
          };
        });
      });
    } else {
      setCategory(prev => {
        return prev.map(item => {
          return {
            ...item,
            isActive: false,
          };
        });
      });
    }
  };

  useEffect(() => {
    fetchCategory().then(category => {
      if (!category) return;

      const categoryWithAll = [
        {category_id: null, category_name: '전체'},
        ...category,
      ];
      setCategory(categoryWithAll);
      setActive();
    });
  }, []);

  useEffect(() => {
    setActive();
  }, [location.search]);

  return {category};
};

export default useCategory;
