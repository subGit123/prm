import React from 'react';
import styled from 'styled-components';
import {ToastItem} from '../../store/toastStore';
import {FaBan, FaInfoCircle, FaPlus} from 'react-icons/fa';

const Toast = ({id, message, type}: ToastItem) => {
  const handleRemoveToast = () => {};

  return (
    <ToastStyle>
      <p>
        {type === 'info' && <FaInfoCircle />}
        {type === 'error' && <FaBan />}
        {message}
      </p>
      <button onClick={handleRemoveToast}>
        <FaPlus />
      </button>
    </ToastStyle>
  );
};

const ToastStyle = styled.div`
  background-color: grey;
  padding: 12px;
  border-radius: ${({theme}) => theme.borderRadius.default};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;

  p {
    color: ${({theme}) => theme.color.secondary};
    line-height: 1;
    margin: 0;
    flex: 1;

    display: flex;
    align-items: end;
    gap: 4px;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0;

    svg {
      transform: rotate(45deg);
    }
  }
`;

export default Toast;
