import {styled} from 'styled-components';

const Headers = () => {
  return (
    <HeaderStyle>
      <h1>헤더에용</h1>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  background-color: ${({theme}) => theme.color.background};

  h1 {
    color: ${({theme}) => theme.color.primary};
  }
`;

export default Headers;
