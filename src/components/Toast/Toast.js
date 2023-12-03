import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ id, setToasts, toasts, variant = 'notice', message = '', }) {
  const Icon = ICONS_BY_VARIANT[variant];


  return (
    <div id={`toast${id}`} key={`toast${id}`} className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        {message}
      </p>
      <button aria-label="Dismiss message" aria-live="off" onClick={() => {
        setToasts(toasts.filter((t) => { return t.id !== id }))
      }} className={styles.closeButton}>
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
