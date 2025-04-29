import React from 'react';
import styled from 'styled-components';
import MainReview from '../components/main/MainReview';
import {useMain} from '../hooks/useMain';

const Home = () => {
  const {reviews} = useMain();
  return (
    <HomeStyle>
      {/* 배네 */}
      {/* 베스트 셀러 */}
      {/* 신간 */}

      <MainReview reviews={reviews} />
    </HomeStyle>
  );
};

const HomeStyle = styled.div``;

export default Home;
