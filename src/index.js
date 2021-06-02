import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import { ModalContextProvider } from './contexts/ModalContext';
import { NotesContextProvider } from './contexts/NotesContext';

ReactDOM.render(
  <NotesContextProvider>
    <ModalContextProvider>
      <App />
    </ModalContextProvider>
  </NotesContextProvider>,
  document.getElementById('root'),
);
