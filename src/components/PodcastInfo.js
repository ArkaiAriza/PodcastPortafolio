import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, CircularProgress } from '@material-ui/core';

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
    color: theme.palette.primary.contrastText,
    padding: 10,
    display: 'flex',
  },
  podcastImageSection: {
    textAlign: 'center',
  },
  gridContainer: {
    padding: 20,
  },
}));

const PodcastInfo = () => {
  const classes = useStyles();
  const { selectedPodcast, episodeList, getEpisodesByPodcastId } = useContext(
    PodcastContext
  );

  useEffect(() => {
    getEpisodesByPodcastId(selectedPodcast.id);
  }, []);

  return (
    <div className={classes.container}>
      <Grid>
        {selectedPodcast ? (
          <div className={classes.podcastSection}>
            <Grid item xs={4} className={classes.podcastImageSection}>
              <img src={selectedPodcast.image} />
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h2">
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
          <CircularProgress color="light" size="8vw" />
        )}
        {episodeList ? (
          <Grid item xs={12} className={classes.gridContainer}>
            <ItemsGrid
              infoList={{ podcastList: [], episodesList: episodeList }}
              search={false}
            />
          </Grid>
        ) : (
          <CircularProgress color="light" size="8vw" />
        )}
      </Grid>
    </div>
  );
};

export default PodcastInfo;
