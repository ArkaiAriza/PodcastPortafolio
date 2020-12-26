import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Container } from '@material-ui/core';

import history from '../history';
import PodcastContext from '../contexts/PodcastContext';
import ItemsGrid from './ItemsGrid';

const useStyles = makeStyles((theme) => ({
  searchBar: {
    color: theme.palette.primary.light,
    margin: 10,
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
    <Container>
      <Grid container>
        <Grid item xs={3}>
          <img src={selectedPodcast.image} />
        </Grid>
        <Grid item xs={9}>
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
        <Grid item xs={12}>
          <ItemsGrid
            infoList={{ podcastList: [], episodesList: episodeList }}
            search={false}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default PodcastInfo;
