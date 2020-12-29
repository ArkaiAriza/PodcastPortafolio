import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { OutlinedInput, InputAdornment, fade } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';

import PodcastContext from '../contexts/PodcastContext';
import history from '../history';

const useStyles = makeStyles((theme) => ({
  searchBar: {
    position: 'relative',
    width: '80%',
    maxHeight: '4vh',
    backgroundColor: fade(theme.palette.primary.light, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.primary.light, 0.3),
    },
    [theme.breakpoints.up('sm')]: {
      width: '25%',
    },
  },
}));

const SearchBar = () => {
  const classes = useStyles();
  const { searchInfo, setPodcastList, setPage } = useContext(PodcastContext);

  const [text, setText] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setPodcastList([]);
    setPage(0);
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
