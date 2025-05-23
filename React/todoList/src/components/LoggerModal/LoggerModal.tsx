import {FiX} from 'react-icons/fi';
import {useTypedSelector} from '../../hooks/redux';
import LogItem from './LogItem/LogItem';
import {FC} from 'react';
import {
  body,
  closeButton,
  header,
  modalWindow,
  title,
  wrapper,
} from './LoggerModal.css';

type TLoggerModalProps = {
  setIsLoggerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoggerModal: FC<TLoggerModalProps> = ({setIsLoggerOpen}) => {
  const logs = useTypedSelector(v => v.logger.logArray);

  return (
    <div className={wrapper}>
      <div className={modalWindow}>
        <div className={header}>
          <div className={title}>활동 기록</div>
          <FiX className={closeButton} onClick={() => setIsLoggerOpen(false)} />
        </div>
        <div className={body}>
          {logs.map(v => (
            <LogItem key={v.logId} logItem={v} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoggerModal;
