import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

import useStyles from './styles';

function Searchbar({ setSearchTerm }) {
  const classes = useStyles();

  const handleChange = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className={classes.searchContainer}>
      <SearchIcon className={classes.searchIcon} />
      <TextField
        placeholder="Search notes..."
        InputProps={{ disableUnderline: true }}
        className={classes.searchInput}
        onChange={(event) => handleChange(event.target.value)}
      />
    </div>
  );
}

export default Searchbar;
