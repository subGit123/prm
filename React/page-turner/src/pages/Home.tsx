import React from 'react';
import styled from 'styled-components';
import MainReview from '../components/main/MainReview';
import {useMain} from '../hooks/useMain';
import Title from '../components/common/Title';
import MainNewBooks from '../components/main/MainNewBooks';
import MainBest from '../components/main/MainBest';

const Home = () => {
  const {reviews, newBooks, bestBooks} = useMain();
  return (
    <HomeStyle>
      {/* 배네 */}
      <section className="section">
        <Title size="large">베스트 셀러</Title>
        <MainBest books={bestBooks} />
      </section>

      <section className="section">
        <Title size="large">신간 안내</Title>
        <MainNewBooks books={newBooks} />
      </section>

      <section className="section">
        <Title size="large">리뷰</Title>
        <MainReview reviews={reviews} />
      </section>
    </HomeStyle>
  );
};

const HomeStyle = styled.div`
  .section {
    padding: 24px 0;
  }
`;

export default Home;
