import React, {ForwardedRef} from 'react';
import styled from 'styled-components';

interface Props {
  placeholder?: string;
}

// forwardRef => Ref를 하위에 전달하는 용도
const InputText = React.forwardRef(
  ({placeholder}: Props, ref: ForwardedRef<HTMLInputElement>) => {
    return <InputTextStyle placeholder={placeholder} ref={ref} />;
  },
);

const InputTextStyle = styled.input.attrs({type: 'text'})`
  padding: 0.25rem 0.75rem;
  border: 1px solid ${({theme}) => theme.color.border};
  border-radius: ${({theme}) => theme.borderRadius.default};
  font-size: 1rem;
  line-height: 1.5;
  color: ${({theme}) => theme.color.text};
`;

export default InputText;
