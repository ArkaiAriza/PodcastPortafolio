import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { OutlinedInput, InputAdornment } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';

import PodcastContext from '../contexts/PodcastContext';
import history from '../history';

const useStyles = makeStyles((theme) => ({
  searchBar: {
    color: theme.palette.primary.contrastText,
    margin: 10,
  },
}));

const SearchBar = () => {
  const classes = useStyles();
  const { searchInfo } = useContext(PodcastContext);

  const [text, setText] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    searchInfo(text);
    history.push(`/results/${text}`);
  };

  return (
    <form onSubmit={(e) => handleSearch(e)}>
      <OutlinedInput
        value={text}
        className={classes.searchBar}
        onChange={(e) => setText(e.target.value)}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </form>
  );
};

export default SearchBar;
