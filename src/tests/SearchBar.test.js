import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SearchBar } from '../components/searchBar';
import { InputsContextProvider } from '../contexts/InputsContext';
import '@testing-library/jest-dom/extend-expect';

describe('Search bar input value', () => {
  it('updates on change', () => {
    const setSearch = jest.fn((value) => {});

    const { queryByPlaceholderText } = render(
      <InputsContextProvider>
        <SearchBar setSearch={setSearch} />
      </InputsContextProvider>,
    );

    const searchInput = queryByPlaceholderText('Search notes...');

    fireEvent.change(searchInput, { target: { value: 'test' } });

    expect(searchInput.value).toBe('test');
  });
});
