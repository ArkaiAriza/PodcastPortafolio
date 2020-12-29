import React, { useState, useEffect } from 'react';
import axios from '../apis/listennotes';

const PodcastContext = React.createContext({
  term: '',
  podcastList: [],
  episodesList: [],
  selectedEpisode: {},
  selectedPodcast: {},
  genres: [],
  selectedGenre: {},
  results: {
    podcastList: [],
    episodesList: [],
  },
});

export const PodcastProvider = ({ children }) => {
  const [podcastList, setPodcastList] = useState([]);
  const [episodeList, setEpisodeList] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState({});
  const [page, setPage] = useState(0);
  const [selectedPodcast, setSelectedPodcast] = useState({});
  const [selectedEpisode, setSelectedEpisode] = useState({});
  const [results, setResults] = useState({
    podcastList: [],
    episodesList: [],
  });

  const getBestPodcasts = async () => {
    const response = await axios.get(`/best_podcasts?page=${page}&region=us`);
    setPodcastList(podcastList.concat(response.data.podcasts));
  };

  const getBestPodcastsByGenre = async () => {
    if (
      genres &&
      podcastList.length === 0 &&
      selectedGenre.name !== undefined
    ) {
      console.log('verified');
      const response = await axios.get(
        `/best_podcasts?genre_id=${selectedGenre.id}&page=${page}&region=us`
      );
      setPodcastList(response.data.podcasts);
    }
  };

  const getGenres = async () => {
    const response = await axios.get('/genres?top_level_only=1');
    setGenres(response.data.genres);
  };

  const getEpisodesByPodcastId = async (podcastId) => {
    const response = await axios.get(
      `/podcasts/${podcastId}?sort=oldest_first`
    );
    setEpisodeList(response.data.episodes);
  };

  const searchInfo = async (text) => {
    const responsePodcast = await axios.get(`/search?q=${text}&type=podcast`);
    const responseEpisodes = await axios.get(`/search?q=${text}&type=episode`);
    setResults({
      ...results,
      podcastList: responsePodcast.data.results,
      episodesList: responseEpisodes.data.results,
    });
  };

  /* useEffect(() => {
  }, []); */

  return (
    <PodcastContext.Provider
      value={{
        genres,
        podcastList,
        selectedGenre,
        page,
        results,
        setResults,
        selectedPodcast,
        setSelectedPodcast,
        selectedEpisode,
        setSelectedEpisode,
        episodeList,
        setEpisodeList,
        setPage,
        setSelectedGenre,
        getGenres,
        getBestPodcastsByGenre,
        getBestPodcasts,
        getEpisodesByPodcastId,
        searchInfo,
        setPodcastList,
      }}
    >
      {children}
    </PodcastContext.Provider>
  );
};

export default PodcastContext;
