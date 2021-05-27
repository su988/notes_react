import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

import useStyles from './styles';

export const SearchBar = ({ onSearchTermChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.searchContainer}>
      <SearchIcon className={classes.searchIcon} />
      <TextField
        placeholder="Search notes..."
        InputProps={{ disableUnderline: true }}
        className={classes.searchInput}
        onChange={onSearchTermChange}
      />
    </div>
  );
};
