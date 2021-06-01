import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

import useStyles from './styles';

export const SearchBar = ({ onSearchTermChange }) => {
  const classes = useStyles();

  return (
    <Box className={classes.searchContainer}>
      <SearchIcon className={classes.searchIcon} />
      <TextField
        placeholder="Search notes..."
        InputProps={{ disableUnderline: true }}
        className={classes.searchInput}
        onChange={onSearchTermChange}
      />
    </Box>
  );
};
