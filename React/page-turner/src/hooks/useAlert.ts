import {useCallback} from 'react';

export default function useAlert() {
  const showAlert = useCallback((message: string) => {
    window.alert(message);
  }, []);

  return showAlert;
}
