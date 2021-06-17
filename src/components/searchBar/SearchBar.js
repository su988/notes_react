import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

import { useInputs } from '../../hooks/useInputs';
import useStyles from './styles';

export const SearchBar = () => {
  const { handleSearchTermChange } = useInputs();
  const classes = useStyles();

  return (
    <Box className={classes.searchContainer}>
      <SearchIcon className={classes.searchIcon} />
      <TextField
        placeholder="Search notes..."
        InputProps={{ disableUnderline: true }}
        onChange={handleSearchTermChange}
        fullWidth
      />
    </Box>
  );
};
