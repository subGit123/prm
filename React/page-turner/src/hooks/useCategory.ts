// 카테고리 api를 가져오는 커스텀 훅

import {useEffect, useState} from 'react';
import {Category} from '../models/category.model';
import {fetchCategory} from '../api/category.api';

const useCategory = () => {
  const [category, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategory().then(category => {
      if (!category) return;

      const categoryWithAll = [
        {category_id: null, category_name: '전체'},
        ...category,
      ];
      setCategory(categoryWithAll);
    });
  }, []);

  return {category};
};

export default useCategory;
