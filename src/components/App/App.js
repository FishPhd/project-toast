import React from 'react';

import ToastPlayground from '../ToastPlayground';
import { useEscapeKey } from '../../hooks/useEscapeKey';
import Footer from '../Footer';

// Create a new context
export const ToastContext = React.createContext();


function App() {

  const [toasts, setToasts] = React.useState([])

  // Pass an object through context, containing both
  // the state value and the state-setter function.
  const value = {
    toasts,
    setToasts,
  }

  useEscapeKey(() => setToasts([]), [])

  return (
    <ToastContext.Provider value={value}>
      <ToastPlayground />
      <Footer />
    </ToastContext.Provider>
  );
}

export default App;
