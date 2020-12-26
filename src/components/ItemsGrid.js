import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';

import Card from './Card';

const useStyles = makeStyles((theme) => ({
  gridPodcast: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  gridEpisode: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
}));

const ItemsGrid = ({ infoList, search }) => {
  const classes = useStyles();

  const renderPodcastCards = () => {
    return infoList.podcastList.map((podcast) => {
      return <Card key={podcast.id} podcast={podcast} search={search} />;
    });
  };

  const renderEpisodesCards = () => {
    return infoList.episodesList.map((episode) => {
      return (
        <React.Fragment key={episode.id}>
          <Card episode={episode} search={search} />
          {!search ? (
            <Typography variant="body2" color="textSecondary" component="p">
              {episode.title}
            </Typography>
          ) : null}
        </React.Fragment>
      );
    });
  };

  return (
    <Container>
      {infoList.podcastList && !search ? (
        <div className={classes.gridPodcast}>{renderPodcastCards()}</div>
      ) : null}
      {infoList.episodesList && !search ? (
        <div className={classes.gridEpisode}>{renderEpisodesCards()}</div>
      ) : null}
      {search ? (
        <React.Fragment>
          <h2>Podcast</h2>
          <div className={classes.gridPodcast}>{renderPodcastCards()}</div>
          <h2>Episodes</h2>
          <div className={classes.gridPodcast}>{renderEpisodesCards()}</div>
        </React.Fragment>
      ) : null}
    </Container>
  );
};

export default ItemsGrid;
