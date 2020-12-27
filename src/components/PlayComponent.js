import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, IconButton } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import AudioPlayer from 'react-modular-audio-player';
import styled from 'styled-components';

import PodcastContext from '../contexts/PodcastContext';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    position: 'fixed',
    bottom: 0,
    width: '-webkit-fill-available',
  },
  playerContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  player: {
    position: 'fixed',
    bottom: 10,
    zIndex: 1,
    width: '80%',
    textAlign: '-webkit-center',
    margin: '0 0 1vh 22vh',
  },
  expandedContainer: {
    backgroundColor: theme.palette.primary.main,
    position: 'fixed',
    bottom: 0,
    width: '-webkit-fill-available',
    minHeight: '100vh',
  },
  expandedContent: {
    bottom: 50,
    position: 'absolute',
  },
  expandedPlayerContainer: {
    position: 'fixed',
    bottom: 10,
    zIndex: 1,
    width: '-webkit-fill-available',
    textAlign: '-webkit-center',
    margin: '0 0 3vh 0',
  },
  expandedPlayerDescription: {
    fontFamily: 'Arial',
    fontSize: 20,
    color: theme.palette.primary.contrastText,
  },
  expandedPlayerTitle: {
    fontFamily: 'Arial',
    fontSize: 30,
    fontWeight: 'bold',
    margin: '1vh 18vw',
    color: theme.palette.primary.light,
  },
}));

const StyledDescription = styled(Grid)`
  display: flex;
  padding: 0px;
  margin: 10vh 0;
  max-height: 20vh;
  overflow: auto;
  margin: 3vh 20vw;
  ::-webkit-scrollbar {
    background-color: #232323;
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #c7c7c7;
    width: 5px;
  }
`;

const PlayComponent = () => {
  const classes = useStyles();
  const { selectedEpisode } = useContext(PodcastContext);

  const [isExpanded, setIsExpanded] = useState(false);

  let playlist = [
    {
      src: selectedEpisode.audio,
      title: selectedEpisode.title_original
        ? selectedEpisode.title_original
        : selectedEpisode.title,
      artist: '',
    },
  ];

  return (
    <React.Fragment>
      {!isExpanded ? (
        <div className={classes.container}>
          <Grid className={classes.playerContainer}>
            <Grid
              item
              xs={4}
              style={{
                display: 'flex',
                padding: 0,
              }}
            >
              <IconButton>
                <ExpandLess
                  style={{
                    fontSize: 50,
                    color: 'black',
                  }}
                  onClick={() => setIsExpanded(!isExpanded)}
                />
              </IconButton>

              <img
                src={selectedEpisode.thumbnail}
                height="60vh"
                style={{ paddingTop: 10 }}
              />
            </Grid>
          </Grid>
        </div>
      ) : (
        <div className={classes.expandedContainer}>
          <Grid>
            <Grid
              item
              xs={12}
              style={{
                display: 'flex',
                padding: 0,
              }}
            >
              <IconButton>
                <ExpandMore
                  style={{
                    fontSize: 50,
                    color: 'black',
                  }}
                  onClick={() => setIsExpanded(!isExpanded)}
                />
              </IconButton>
            </Grid>
            <div className={classes.expandedContent}>
              <Grid
                item
                xs={12}
                style={{
                  display: 'flex',
                  padding: 0,
                }}
              >
                <img
                  src={selectedEpisode.thumbnail}
                  style={{ margin: 'auto' }}
                />
              </Grid>
              <StyledDescription>
                <div
                  className={classes.expandedPlayerDescription}
                  dangerouslySetInnerHTML={
                    selectedEpisode.description
                      ? { __html: selectedEpisode.description }
                      : { __html: selectedEpisode.description_original }
                  }
                />
              </StyledDescription>
              <Grid
                item
                xs={12}
                style={{
                  display: 'flex',
                  padding: 0,
                  justifyContent: 'center',
                  margin: '10vh 0',
                }}
              >
                <div
                  className={classes.expandedPlayerTitle}
                  dangerouslySetInnerHTML={
                    selectedEpisode.title
                      ? { __html: selectedEpisode.title }
                      : { __html: selectedEpisode.title_original }
                  }
                />
              </Grid>
            </div>
          </Grid>
        </div>
      )}
      <div
        className={
          !isExpanded ? classes.player : classes.expandedPlayerContainer
        }
      >
        <AudioPlayer
          audioFiles={playlist}
          fontFamily="serif"
          fontSize="1.5vw"
          playerWidth="50vw"
          iconSize="1.85vw"
        />
      </div>
    </React.Fragment>
  );
};

export default PlayComponent;
