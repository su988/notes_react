import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FilterTabs } from '../components/filterTabs';
import { InputsContextProvider } from '../contexts/InputsContext';
import '@testing-library/jest-dom/extend-expect';

describe('Select next tab', () => {
  it('activates second tab when clicking on it', () => {
    const { getByText } = render(
      <InputsContextProvider>
        <FilterTabs />
      </InputsContextProvider>,
    );

    const all = getByText('All').closest('button');
    const home = getByText('Home').closest('button');

    expect(all).toHaveAttribute('aria-selected', 'true');
    expect(home).toHaveAttribute('aria-selected', 'false');

    fireEvent.click(home);

    expect(all).toHaveAttribute('aria-selected', 'false');
    expect(home).toHaveAttribute('aria-selected', 'true');
  });
});
