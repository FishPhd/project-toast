import React, { useId } from 'react';

import Button from '../Button';
import Toast from '../Toast/Toast';

import styles from './ToastPlayground.module.css';
import { ToastContext } from '../App/App';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [variant, setVariant] = React.useState('notice');
  const [message, setMessage] = React.useState('');
  const { toasts, setToasts } = React.useContext(
    ToastContext
  );

  const [id, setId] = React.useState(0)

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <div role="region" aria-live="polite" aria-label="Notification" className={styles.toastWrapper} style={{ gap: '10px', display: 'grid', position: 'absolute', bottom: '25px', right: '25px' }}>
        {toasts.map((toast) => <Toast {...toast} setToasts={setToasts} toasts={toasts} />)}
      </div>

      < div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} value={message} onChange={(e) => { setMessage(e.target.value) }} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          {VARIANT_OPTIONS.map((v) => (
            <div
              key={useId()}
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              <label htmlFor={`variant-${v}`}>
                <input
                  id={`variant-${v}`}
                  type="radio"
                  name="variant"
                  value={v}
                  checked={v === variant}
                  onChange={() => setVariant(event.target.value)}
                />
                {v}
              </label>
            </div>
          ))}
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button onClick={() => {
              setId(id + 1)
              setToasts([...toasts, { id: id + 1, message, variant }])
              setMessage('')
              setVariant('notice')
            }}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div >
  );
}

export default ToastPlayground;
