import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card as MaterialCard,
  CardContent,
  CardMedia,
  CardActionArea,
} from '@material-ui/core';

import history from '../history';
import PodcastContext from '../contexts/PodcastContext';

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.primary.dark,
    maxWidth: '30vw',
    maxHeight: '15vh',
    margin: 10,
    [theme.breakpoints.up('sm')]: {
      maxWidth: '15vw',
      maxHeight: '80vh',
      margin: 5,
    },
  },
  cardContent: {
    display: 'flex',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.light,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    maxWidth: '90%',
    fontSize: 12,
    [theme.breakpoints.up('sm')]: {
      overflow: 'hidden',
      maxHeight: '2vh',
      padding: '3px 5px',
      fontSize: 20,
      maxWidth: '70%',
    },
  },
}));

const trimText = (text, num) => {
  return text ? (text.length > num ? text.slice(0, num) + '...' : text) : null;
};

const Card = ({ podcast, episode, search }) => {
  const classes = useStyles();
  const {
    setSelectedPodcast,
    setSelectedEpisode,
    setPodcastList,
    setPage,
  } = useContext(PodcastContext);

  return (
    <MaterialCard
      className={classes.card}
      onClick={() => {
        if (podcast) {
          setPodcastList([]);
          setPage(0);
          setSelectedPodcast(podcast);
          window.scrollTo(0, 0);
          history.push(`/podcast/${podcast.id}`);
        }
        if (episode) {
          setSelectedEpisode(episode);
        }
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={podcast ? podcast.image : episode.thumbnail}
        />
        {podcast || search ? (
          <CardContent
            style={{
              padding: 0,
            }}
          >
            <div className={classes.cardContent}>
              {podcast
                ? !search
                  ? window.innerWidth < 630
                    ? trimText(podcast.title, 9)
                    : trimText(podcast.title, 15)
                  : trimText(podcast.title_original, 10)
                : trimText(episode.title_original, 10)}
            </div>
          </CardContent>
        ) : null}
      </CardActionArea>
    </MaterialCard>
  );
};

export default Card;
