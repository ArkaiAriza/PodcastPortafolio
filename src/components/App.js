import React from 'react';
import { Router, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';

import { theme } from '../theme';
import { PodcastProvider } from '../contexts/PodcastContext';
import history from '../history';
import LandingPage from './LandingPage';
import PlayComponent from './PlayComponent';
import SearchResults from './SearchResults';
import PodcastInfo from './PodcastInfo';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <PodcastProvider>
          <Route path="/" exact component={LandingPage} />
          <Route path="/results/:search" exact component={SearchResults} />
          <Route path="/podcast/:podcastId" exact component={PodcastInfo} />
          <Route path="/" component={PlayComponent} />
        </PodcastProvider>
      </Router>
    </ThemeProvider>
  );
};

export default App;
