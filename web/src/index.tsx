import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Main from './route';
import Toast from './components/Toast';
import './index.css';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Main />
      <Toast />
    </Provider>
  );
};


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />,
);
