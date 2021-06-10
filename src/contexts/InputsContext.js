import { useState, createContext } from 'react';

const InputsContext = createContext();

const InputsContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (input) => {
    setCategory(input);
  };

  return (
    <InputsContext.Provider
      value={{
        searchTerm,
        handleSearchTermChange,
        category,
        handleCategoryChange,
      }}
    >
      {children}
    </InputsContext.Provider>
  );
};

export { InputsContext, InputsContextProvider };
