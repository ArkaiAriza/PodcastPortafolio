import React, { useContext } from 'react';
import { PlayButton, Timer } from 'react-soundplayer/components';
import { withSoundCloudAudio } from 'react-soundplayer/addons';

import PodcastContext from '../contexts/PodcastContext';

const AWSSoundPlayer = withSoundCloudAudio((props) => {
  const { trackTitle } = props;

  return (
    <div>
      <PlayButton {...props} />
      <h2>{trackTitle}</h2>
      <Timer {...props} />
    </div>
  );
});

const PlayComponent = () => {
  const { selectedEpisode } = useContext(PodcastContext);

  return (
    <AWSSoundPlayer
      streamUrl={selectedEpisode.audio}
      trackTitle={
        selectedEpisode.title_original
          ? selectedEpisode.title_original
          : selectedEpisode.title
      }
      preloadType="metadata"
    />
  );
};

export default PlayComponent;
