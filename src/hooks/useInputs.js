import { useContext } from 'react';
import { InputsContext } from '../contexts/InputsContext';

export const useInputs = () => useContext(InputsContext);
