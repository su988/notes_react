import React from 'react';
import { render, fireEvent, within } from '@testing-library/react';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

it('selects the correct option', () => {
  const {getByRole} = render(
     <>  
       <Select fullWidth value={selectedTab} onChange={onTabChange}>
         <MenuItem value="privacy">Privacy</MenuItem>
         <MenuItem value="my-account">My Account</MenuItem>
       </Select>
       <Typography variant="h1">{/* value set in state */}</Typography>
     </>
  );

  fireEvent.mouseDown(getByRole('button'));

  const listbox = within(getByRole('listbox'));

  fireEvent.click(listbox.getByText(/my account/i));

  expect(getByRole('heading').toHaveTextContent(/my account/i);
});