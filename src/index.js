import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import { ModalContextProvider } from './contexts/ModalContext';
import { NotesContextProvider } from './contexts/NotesContext';
import { InputsContextProvider } from './contexts/InputsContext';

ReactDOM.render(
  <NotesContextProvider>
    <ModalContextProvider>
      <InputsContextProvider>
        <App />
      </InputsContextProvider>
    </ModalContextProvider>
  </NotesContextProvider>,
  document.getElementById('root'),
);
