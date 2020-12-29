import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, CircularProgress } from '@material-ui/core';

import history from '../history';
import PodcastContext from '../contexts/PodcastContext';
import SearchBar from './SearchBar';
import ItemsGrid from './ItemsGrid';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.dark,
    flexGrow: 1,
    minHeight: '100vh',
  },
  searchbarContainer: {
    padding: '0.5rem 1rem',
    [theme.breakpoints.up('sm')]: {
      padding: '0.5rem 4rem',
    },
  },
  topOptionContainer: {
    color: theme.palette.primary.contrastText,
    padding: '0.5rem 1rem',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      padding: '0.5rem 4rem',
    },
  },
  topOptionImgContainer: {
    textAlign: 'center',
  },
  topOptionImg: {
    maxWidth: '80%',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '16vw',
    },
  },
  topOptionTitle: {
    fontSize: 30,
    margin: 10,
    [theme.breakpoints.up('sm')]: {
      fontSize: 70,
      margin: 0,
    },
  },
  gridContainer: {
    padding: '0.5rem 1rem',
    [theme.breakpoints.up('sm')]: {
      padding: '0.5rem 4rem',
    },
  },
}));

const SearchResults = (props) => {
  const classes = useStyles();
  const { results, setSelectedPodcast, searchInfo } = useContext(
    PodcastContext
  );

  useEffect(() => {
    searchInfo(props.match.params.search);
  }, []);

  return (
    <div className={classes.container}>
      {results.podcastList.slice(0, 1)[0] !== undefined ? (
        <Grid>
          <Grid item xs={12} className={classes.searchbarContainer}>
            <SearchBar />
          </Grid>
          <div className={classes.topOptionContainer}>
            <Grid item xs={12} sm={3} className={classes.topOptionImgContainer}>
              <img
                src={results.podcastList.slice(0, 1)[0].image}
                className={classes.topOptionImg}
                onClick={() => {
                  setSelectedPodcast(results.podcastList.slice(0, 1)[0]);
                  history.push(
                    `/podcast/${results.podcastList.slice(0, 1)[0].id}`
                  );
                }}
              />
            </Grid>
            <Grid item xs={12} sm={9}>
              <Typography variant="h2" className={classes.topOptionTitle}>
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
          </div>

          <Grid item xs={12} className={classes.gridContainer}>
            <ItemsGrid
              infoList={{
                podcastList: results.podcastList.slice(1),
                episodesList: results.episodesList,
              }}
              search={true}
            />
          </Grid>
        </Grid>
      ) : (
        <CircularProgress
          style={{
            position: 'fixed',
            top: '45%',
            right: '45%',
            color: '#c7c7c7',
          }}
          size="8vw"
        />
      )}
    </div>
  );
};

export default SearchResults;
