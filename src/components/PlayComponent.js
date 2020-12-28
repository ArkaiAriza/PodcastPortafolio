import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, IconButton } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import AudioPlayer from 'react-modular-audio-player';
import styled, { css } from 'styled-components';

import PodcastContext from '../contexts/PodcastContext';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    width: '100%',
  },
  playerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  player: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: '200px',
    display: 'flex',
    zIndex: 1,
    width: '100%',
    alignItems: 'center',
  },
  expandedContainer: {
    backgroundColor: theme.palette.primary.main,
    bottom: 0,
    width: '100%',
    minHeight: '100vh',
    transition: 'height 1s',
  },
  expandedContent: {
    bottom: 50,
    width: '100%',
    position: 'absolute',
  },
  expandedPlayerContainer: {
    position: 'absolute',
    bottom: 50,
    zIndex: 1,
    width: '100%',
    textAlign: '-webkit-center',
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

const StyledContainer = styled.div`
  position: sticky;
  bottom: 0;
  overflow: hidden;
  height: 8vh;
  ${(props) =>
    props.isExpanding &&
    css`
      height: 100vh;
    `}
  transition: height 0.5s;
`;

let rearrangedPlayer = [
  {
    className: 'top',
    style: {
      display: 'flex',
      justifyContent: 'flex-start',
    },
    innerComponents: [
      {
        type: 'play',
        style: { flex: '1' },
      },
      {
        type: 'volume',
        style: { flex: '1 0 70px', minWidth: '100px' },
      },
      {
        type: 'name',
        style: { flex: '5 0 50%', minWidth: '100px' },
      },
    ],
  },
];

let expandedRearrangedPlayer = [
  {
    className: 'top',
    style: {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'flex-start',
      left: '45%',
      bottom: '10%',
    },
    innerComponents: [
      {
        type: 'play',
        style: { flex: '1', maxWidth: '100px' },
      },
      {
        type: 'volume',
        style: { flex: '1 0 70px', maxWidth: '100px' },
      },
    ],
  },
];

const PlayComponent = () => {
  const classes = useStyles();
  const { selectedEpisode } = useContext(PodcastContext);

  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanding, setIsExpanding] = useState(false);

  let playlist = [
    {
      src: selectedEpisode.audio,
      title: selectedEpisode.title_original
        ? selectedEpisode.title_original
        : selectedEpisode.title,
      artist: '',
    },
  ];

  const handleExpansion = () => {
    if (!isExpanded) {
      setIsExpanding(true);
      setIsExpanded(true);
    } else {
      setIsExpanding(false);
      setTimeout(() => {
        setIsExpanded(false);
      }, 500);
    }
  };

  return (
    <StyledContainer isExpanding={isExpanding}>
      {!isExpanded ? (
        <div className={classes.container}>
          <Grid className={classes.playerContainer}>
            <IconButton>
              <ExpandLess
                style={{
                  fontSize: 50,
                  color: 'black',
                }}
                onClick={handleExpansion}
              />
            </IconButton>

            <img
              src={selectedEpisode.thumbnail}
              height='60vh'
              style={{ padding: '10px 10px' }}
            />
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
                  onClick={handleExpansion}
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
          <div
            className={
              !isExpanded ? classes.player : classes.expandedPlayerContainer
            }
          ></div>
        </div>
      )}
      <div
        className={
          !isExpanded ? classes.player : classes.expandedPlayerContainer
        }
      >
        <AudioPlayer
          audioFiles={playlist}
          rearrange={isExpanded ? expandedRearrangedPlayer : rearrangedPlayer}
          fontFamily='serif'
          fontSize='2vw'
          iconSize='3vw'
          playerWidth='50vw'
        />
      </div>
    </StyledContainer>
  );
};

export default PlayComponent;
