import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import PodcastContext from '../contexts/PodcastContext';
import SearchBar from './SearchBar';
import ItemsGrid from './ItemsGrid';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.light,
    flexGrow: 1,
  },
  list: {
    width: '100%',
    maxWidth: '80%',
    margin: 'auto',
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.secondary.contrastText,
  },
}));

const SearchResults = () => {
  const classes = useStyles();
  const { results } = useContext(PodcastContext);

  return (
    <div className={classes.container}>
      {results.podcastList.slice(0, 1)[0] !== undefined ? (
        <Grid container>
          <Grid item xs={12}>
            <SearchBar />
          </Grid>
          <Grid item xs={3}>
            <img src={results.podcastList.slice(0, 1)[0].image} />
          </Grid>
          <Grid item xs={9}>
            <Typography variant="h2">
              {results.podcastList.slice(0, 1)[0].title_original}
            </Typography>
            <Typography variant="body1" component={'span'}>
              <div
                dangerouslySetInnerHTML={{
                  __html: results.podcastList.slice(0, 1)[0]
                    .description_original,
                }}
              />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <ItemsGrid
              infoList={{
                podcastList: results.podcastList.slice(1),
                episodesList: results.episodesList,
              }}
              search={true}
            />
          </Grid>
        </Grid>
      ) : null}
    </div>
  );
};

export default SearchResults;
