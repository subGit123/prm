// 테스트용
import {render, screen} from '@testing-library/react';
import Title from './Title';
import {PageTurnerThemeProvider} from '../../context/ThemeContext';

describe('Title 컴포넌트 테스트', () => {
  it('렌더를 확인', () => {
    // 1. 렌더
    render(
      <PageTurnerThemeProvider>
        <Title size="large">제목</Title>
      </PageTurnerThemeProvider>,
    );

    // 2. 확인
    expect(screen.getByText('제목')).toBeInTheDocument();
  });
});
