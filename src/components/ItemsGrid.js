import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

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
    justifyContent: 'center',
  },
  episodeCard: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '1vh 20vw',
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up('sm')]: {
      flexWrap: 'nowrap',
    },
  },
  episodeCardSearch: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  searchTitle: {
    margin: '1vh 5vw',
    fontFamily: 'Roboto',
    fontSize: 30,
    color: theme.palette.primary.contrastText,
  },
}));

const ItemsGrid = ({ infoList, search }) => {
  const classes = useStyles();

  const renderPodcastCards = () => {
    return infoList.podcastList.map((podcast) => {
      return (
        <div
          key={podcast.id}
          className={!search ? null : classes.episodeCardSearch}
        >
          <Card podcast={podcast} search={search} />
        </div>
      );
    });
  };

  const renderEpisodesCards = () => {
    return infoList.episodesList.map((episode) => {
      return (
        <div
          key={episode.id}
          className={!search ? classes.episodeCard : classes.episodeCardSearch}
        >
          <Card episode={episode} search={search} />
          {!search ? (
            <Typography variant="body1">{episode.title}</Typography>
          ) : null}
        </div>
      );
    });
  };

  return (
    <div>
      {infoList.podcastList && !search ? (
        <div className={classes.gridPodcast}>{renderPodcastCards()}</div>
      ) : null}
      {infoList.episodesList && !search ? (
        <div className={classes.gridEpisode}>{renderEpisodesCards()}</div>
      ) : null}
      {search ? (
        <React.Fragment>
          <div className={classes.searchTitle}>Podcast</div>
          <div className={classes.gridPodcast}>{renderPodcastCards()}</div>
          <div className={classes.searchTitle}>Episodes</div>
          <div className={classes.gridPodcast}>{renderEpisodesCards()}</div>
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default ItemsGrid;
