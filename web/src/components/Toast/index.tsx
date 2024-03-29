import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../Loading';
import styles from './toast.module.css';
import { ToastModel } from 'src/model/ToastModel';

const Toast = () => {
  const model: ToastModel = useSelector((state: any) => {
    console.log({ state });
    return state.toastSlice;
  });

  const getDuration = () => {
    if (model.duration === undefined) {
      return '1s';
    }

    return `${(model.duration - 300) / 1000}s`;
  };

  return (
    <>
      {model.show && <div className={styles.div_background}>
        {model.isLoading ? <Loading /> : <div style={{ '--duration': getDuration() } as React.CSSProperties}>
          <div className={styles.div_title}>
            {model.title ?? '[안내]'}
          </div>
          <div>
            {model.msg}
          </div>
        </div>}
      </div >}
    </>
  );
};

export default Toast;