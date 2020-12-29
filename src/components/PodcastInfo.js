import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  CircularProgress,
  IconButton,
} from '@material-ui/core';
import { ArrowBackIos } from '@material-ui/icons';

import history from '../history';
import PodcastContext from '../contexts/PodcastContext';
import ItemsGrid from './ItemsGrid';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.dark,
    flexGrow: 1,
    color: theme.palette.primary.light,
    minHeight: '100vh',
  },
  podcastSection: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: 10,
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  podcastImageSection: {
    textAlign: 'center',
  },
  podcastSectionTitle: {
    fontSize: 30,
    margin: 10,
    [theme.breakpoints.up('sm')]: {
      fontSize: 90,
      margin: 0,
    },
  },
  gridContainer: {
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const PodcastInfo = () => {
  const classes = useStyles();
  const { selectedPodcast, episodeList, getEpisodesByPodcastId } = useContext(
    PodcastContext
  );
  useEffect(() => {
    getEpisodesByPodcastId(selectedPodcast.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.container}>
      <Grid>
        {selectedPodcast ? (
          <div className={classes.podcastSection}>
            <IconButton onClick={() => history.goBack()}>
              <ArrowBackIos
                style={{
                  fontSize: 50,
                  color: 'white',
                }}
              />
            </IconButton>
            <Grid item sm={4} xs={12} className={classes.podcastImageSection}>
              <img
                alt={
                  selectedPodcast.title
                    ? selectedPodcast.title
                    : selectedPodcast.title_original
                }
                src={selectedPodcast.image}
                width="80%"
              />
            </Grid>
            <Grid item sm={8} xs={12}>
              <Typography variant="h2" className={classes.podcastSectionTitle}>
                {selectedPodcast.title
                  ? selectedPodcast.title
                  : selectedPodcast.title_original}
              </Typography>
              <Typography variant="body1" component={'span'}>
                <div
                  dangerouslySetInnerHTML={
                    selectedPodcast.description
                      ? { __html: selectedPodcast.description }
                      : { __html: selectedPodcast.description_original }
                  }
                />
              </Typography>
            </Grid>
          </div>
        ) : (
          <CircularProgress color="primary" size="8vw" />
        )}
        {episodeList ? (
          <Grid item xs={12} className={classes.gridContainer}>
            <ItemsGrid
              infoList={{ podcastList: [], episodesList: episodeList }}
              search={false}
            />
          </Grid>
        ) : (
          <CircularProgress color="primary" size="8vw" />
        )}
      </Grid>
    </div>
  );
};

export default PodcastInfo;
