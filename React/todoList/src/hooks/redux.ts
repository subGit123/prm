// 커스텀 훅 정의

import {AppDispatch, RootState} from '../store';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useTypedDispatch = () => useDispatch<AppDispatch>();
