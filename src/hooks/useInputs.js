import { useState } from 'react';

export const useInputs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (input) => {
    setCategory(input);
  };

  return {
    searchTerm,
    handleSearchTermChange,
    category,
    handleCategoryChange,
  };
};
