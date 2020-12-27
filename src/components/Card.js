import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card as MaterialCard,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
} from '@material-ui/core';

import history from '../history';
import PodcastContext from '../contexts/PodcastContext';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: '30vw',
    maxHeight: '15vh',
    margin: 10,
    boxShadow: `1px 1px 1px 1px rgba(0, 0, 0, 0.5)`,
    [theme.breakpoints.up('sm')]: {
      maxWidth: '15vw',
      maxHeight: '12vh',
      margin: 5,
    },
  },
  cardContent: {
    height: '4vh',
    padding: 1,
    maxWidth: '45vw',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      height: '2vh',
      padding: 1,
      maxWidth: '20vw',
    },
  },
}));

const Card = ({ podcast, episode, search }) => {
  const classes = useStyles();
  const { setSelectedPodcast, setSelectedEpisode } = useContext(PodcastContext);

  return (
    <MaterialCard
      className={classes.card}
      onClick={() => {
        if (podcast) {
          setSelectedPodcast(podcast);
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
          height="80vh"
          image={podcast ? podcast.image : episode.thumbnail}
        />
        {podcast || search ? (
          <CardContent className={classes.cardContent}>
            <Typography variant="body2" color="textSecondary" component="p">
              {podcast
                ? !search
                  ? podcast.title
                  : podcast.title_original
                : episode.title_original}
            </Typography>
          </CardContent>
        ) : null}
      </CardActionArea>
    </MaterialCard>
  );
};

export default Card;
