import React, { useContext, useEffect, useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Chip, Grid, CircularProgress, Divider } from '@material-ui/core';

import PodcastContext from '../contexts/PodcastContext';
import SearchBar from './SearchBar';
import ItemsGrid from './ItemsGrid';

/* const genres = [
  { id: 144, name: 'Personal Finance', parent_id: 67 },
  { id: 151, name: 'Locally Focused', parent_id: 67 },
  { id: 127, name: 'Technology', parent_id: 67 },
  { id: 168, name: 'Fiction', parent_id: 67 },
  { id: 107, name: 'Science', parent_id: 67 },
  { id: 122, name: 'Society & Culture', parent_id: 67 },
  { id: 77, name: 'Sports', parent_id: 67 },
  { id: 100, name: 'Arts', parent_id: 67 },
  { id: 93, name: 'Business', parent_id: 67 },
  { id: 133, name: 'Comedy', parent_id: 67 },
  { id: 111, name: 'Education', parent_id: 67 },
  { id: 117, name: 'Government', parent_id: 67 },
  { id: 88, name: 'Health & Fitness', parent_id: 67 },
  { id: 125, name: 'History', parent_id: 67 },
  { id: 132, name: 'Kids & Family', parent_id: 67 },
  { id: 82, name: 'Leisure', parent_id: 67 },
  { id: 134, name: 'Music', parent_id: 67 },
  { id: 99, name: 'News', parent_id: 67 },
  { id: 69, name: 'Religion & Spirituality', parent_id: 67 },
  { id: 68, name: 'TV & Film', parent_id: 67 },
  { id: 135, name: 'True Crime', parent_id: 67 },
];

const podcastList = [
  {
    id: '38e4ec7d85a84cbbb07493b0494fd8d3',
    title: 'Floodlines',
    publisher: 'The Atlantic',
    image:
      'https://cdn-images-1.listennotes.com/podcasts/floodlines-the-atlantic-qegZFKcAJ8N-bwNvfFPn9WX.300x300.jpg',
    thumbnail:
      'https://cdn-images-1.listennotes.com/podcasts/floodlines-the-atlantic-qegZFKcAJ8N-bwNvfFPn9WX.300x300.jpg',
    listennotes_url:
      'https://www.listennotes.com/c/38e4ec7d85a84cbbb07493b0494fd8d3/',
    listen_score: 'Please upgrade to the PRO plan to see this field',
    listen_score_global_rank:
      'Please upgrade to the PRO plan to see this field',
    total_episodes: 9,
    explicit_content: false,
    description:
      "Some call it Hurricane Katrina. Some call it the Federal Flood. Others call it the day the levees broke. On August 29, 2005, the city of New Orleans was submerged. That story of hubris, incompetence, and nature's wrath is now etched into the national consciousness. But the people who lived through the flood and its aftermath have a different story to tell. A story of rumors, betrayal, and one of the most misunderstood events in American history. Launching March 12.\u00a0Hosted by Vann R. Newkirk II.",
    itunes_id: 1501433969,
    rss: 'Please upgrade to the PRO plan to see this field',
    latest_pub_date_ms: 1583985871000,
    earliest_pub_date_ms: 1583274600008,
    language: 'English',
    country: 'United States',
    website:
      'https://www.theatlantic.com/podcasts/floodlines?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
    extra: {
      twitter_handle: '',
      facebook_handle: '',
      instagram_handle: '',
      wechat_handle: '',
      patreon_handle: '',
      youtube_url: '',
      linkedin_url: '',
      spotify_url: '',
      google_url: '',
      url1: '',
      url2: '',
      url3: '',
    },
    is_claimed: false,
    email: 'Please upgrade to the PRO plan to see this field',
    type: 'serial',
    looking_for: {
      sponsors: false,
      guests: false,
      cohosts: false,
      cross_promotion: false,
    },
    genre_ids: [216, 99, 244, 125, 67, 122],
  },
  {
    id: '0040cdc18a9541408a15a54eba2ad1f2',
    title: 'My Year in Mensa',
    publisher: 'iHeartRadio & Jamie Loftus',
    image:
      'https://cdn-images-1.listennotes.com/podcasts/my-year-in-mensa-iheartradio-jamie-loftus-BjkVzxDGuO_-FICbk27Bdjg.300x300.jpg',
    thumbnail:
      'https://cdn-images-1.listennotes.com/podcasts/my-year-in-mensa-iheartradio-jamie-loftus-BjkVzxDGuO_-FICbk27Bdjg.300x300.jpg',
    listennotes_url:
      'https://www.listennotes.com/c/0040cdc18a9541408a15a54eba2ad1f2/',
    listen_score: 'Please upgrade to the PRO plan to see this field',
    listen_score_global_rank:
      'Please upgrade to the PRO plan to see this field',
    total_episodes: 6,
    explicit_content: false,
    description:
      'Jamie Loftus takes you through her year in the high-IQ Mensa society, from taking the test as a joke to spending the Fourth of July with 2000 angry Mensans in Phoenix. Chaos reigns, but at least it tests well.',
    itunes_id: 1492147103,
    rss: 'Please upgrade to the PRO plan to see this field',
    latest_pub_date_ms: 1606129200000,
    earliest_pub_date_ms: 1575100865004,
    language: 'English',
    country: 'United States',
    website:
      'https://anchor.fm/jamie-loftus?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
    extra: {
      twitter_handle: '',
      facebook_handle: '',
      instagram_handle: '',
      wechat_handle: '',
      patreon_handle: '',
      youtube_url: '',
      linkedin_url: '',
      spotify_url: '',
      google_url: '',
      url1: '',
      url2: '',
      url3: '',
    },
    is_claimed: false,
    email: 'Please upgrade to the PRO plan to see this field',
    type: 'episodic',
    looking_for: {
      sponsors: false,
      guests: false,
      cohosts: false,
      cross_promotion: false,
    },
    genre_ids: [122, 67, 244],
  },
  {
    id: 'd7a35219584b4366b39d4e2893eb58d4',
    title: "I'm Not A Monster - from BBC Panorama & FRONTLINE PBS",
    publisher: 'BBC Radio',
    image:
      'https://cdn-images-1.listennotes.com/podcasts/im-not-a-monster-from-bbc-panorama-arZW4vzlcKb-9MewKFRyldv.300x300.jpg',
    thumbnail:
      'https://cdn-images-1.listennotes.com/podcasts/im-not-a-monster-from-bbc-panorama-arZW4vzlcKb-9MewKFRyldv.300x300.jpg',
    listennotes_url:
      'https://www.listennotes.com/c/d7a35219584b4366b39d4e2893eb58d4/',
    listen_score: 'Please upgrade to the PRO plan to see this field',
    listen_score_global_rank:
      'Please upgrade to the PRO plan to see this field',
    total_episodes: 6,
    explicit_content: false,
    description:
      'How did an American family end up in the heart of the ISIS caliphate? Over four years, journalist Josh Baker unravels a dangerous story where nothing is as it seems.',
    itunes_id: 1540251892,
    rss: 'Please upgrade to the PRO plan to see this field',
    latest_pub_date_ms: 1608537600000,
    earliest_pub_date_ms: 1605260580001,
    language: 'English',
    country: 'United Kingdom',
    website:
      'http://www.bbc.co.uk/programmes/p08yblkf?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
    extra: {
      twitter_handle: '',
      facebook_handle: '',
      instagram_handle: '',
      wechat_handle: '',
      patreon_handle: '',
      youtube_url: '',
      linkedin_url: '',
      spotify_url: '',
      google_url: '',
      url1: '',
      url2: '',
      url3: '',
    },
    is_claimed: false,
    email: 'Please upgrade to the PRO plan to see this field',
    type: 'episodic',
    looking_for: {
      sponsors: false,
      guests: false,
      cohosts: false,
      cross_promotion: false,
    },
    genre_ids: [67],
  },
  {
    id: '19dc92d490d9423cb69a557253b97f45',
    title: 'The Oyster',
    publisher: 'The Paragon Collective',
    image:
      'https://cdn-images-1.listennotes.com/podcasts/the-oyster-the-paragon-collective-VQ4rZqIMYhK-Cx6equwZBdI.300x300.jpg',
    thumbnail:
      'https://cdn-images-1.listennotes.com/podcasts/the-oyster-the-paragon-collective-VQ4rZqIMYhK-Cx6equwZBdI.300x300.jpg',
    listennotes_url:
      'https://www.listennotes.com/c/19dc92d490d9423cb69a557253b97f45/',
    listen_score: 'Please upgrade to the PRO plan to see this field',
    listen_score_global_rank:
      'Please upgrade to the PRO plan to see this field',
    total_episodes: 8,
    explicit_content: false,
    description:
      'In a not so distant future, due to overwhelming carbon emissions, The Earth is on the brink of becoming uninhabitable. These conditions are made far more horrifying because the available housing shelters (that can produce sustainable air quality) will only be able to house 80% of the world\u2019s total population. To try and save the human race, every person has a government-mandated microchip implanted in their brains to attempt to facilitate the migration of a portion of the population to an underground shelter. In order to decide who gets to be protected and who must stay above ground, the government implements a value scale they have determined based on \u201cusefulness\u201d to future society. If you are valued at a 50 or above, you will be chosen to enter the bunker, and, if not, you must stay above ground and face the end of days. \u201cNeuron\u201d (which acts as both a prestigious brain implant and also a software company) is folded into a sanctioned branch of the government called, \u201cThe Ministry of Experience.\u201d Their job now is to develop technologies and software that can replicate the human experience above ground. But what is far more pressing is The Ministry must find a way to reduce the use of resources, or they will run out of all survivable assets before being able to relocate to \u201cEden\u201d - the one place above ground that might be salvageable in a few years time. Whether Eden will be ready in time remains to be seen, but its existence is literally the last hope for the human race surviving. In a drastic effort to cut emissions and resource usage, \u201cThe Oyster\u201d is created. The Oyster is Nirvana - A state absent from the mind while being filled with complete pleasure and bliss. What, then, happens when reality begins to fade and The Oyster is all that remains?\n\nThe Oyster stars Logan Browning (Dear White People and the Perfection), Mamoudou Athie (Jurassic World), Carla Gugino (Haunting of Hill House), Keith David (Greenleaf), Giancarlo Esposito (Breaking Bad), Constance Zimmer (House of Cards, UnReal), Andrew Santino (Dave) and more.\n\nCreated by Alex Aldea and Adrienne Schaffler',
    itunes_id: 1538224217,
    rss: 'Please upgrade to the PRO plan to see this field',
    latest_pub_date_ms: 1608422059000,
    earliest_pub_date_ms: 1604092030006,
    language: 'English',
    country: 'United States',
    website:
      'http://oyster.libsyn.com/website?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
    extra: {
      twitter_handle: '',
      facebook_handle: '',
      instagram_handle: '',
      wechat_handle: '',
      patreon_handle: '',
      youtube_url: '',
      linkedin_url: '',
      spotify_url: '',
      google_url: '',
      url1: '',
      url2: '',
      url3: '',
    },
    is_claimed: false,
    email: 'Please upgrade to the PRO plan to see this field',
    type: 'serial',
    looking_for: {
      sponsors: false,
      guests: false,
      cohosts: false,
      cross_promotion: false,
    },
    genre_ids: [67, 107, 185, 168, 122],
  },
  {
    id: '41155dfaf8824927ac601a47a5678b93',
    title: 'Battleground with David Plouffe & Steve Schmidt',
    publisher: 'The Recount & iHeartRadio',
    image:
      'https://cdn-images-1.listennotes.com/podcasts/battleground-with-david-plouffe-steve-schmidt-lGJvrVe-C_y-2tEUG9lB-53.300x300.jpg',
    thumbnail:
      'https://cdn-images-1.listennotes.com/podcasts/battleground-with-david-plouffe-steve-schmidt-lGJvrVe-C_y-2tEUG9lB-53.300x300.jpg',
    listennotes_url:
      'https://www.listennotes.com/c/41155dfaf8824927ac601a47a5678b93/',
    listen_score: 'Please upgrade to the PRO plan to see this field',
    listen_score_global_rank:
      'Please upgrade to the PRO plan to see this field',
    total_episodes: 18,
    explicit_content: false,
    description:
      "David Plouffe and Steve Schmidt are friends, former rivals and two of the top strategic minds in America. They understand American politics better than almost anyone because, when they were running presidential campaigns, they had to make momentous decisions almost every single day. In Battleground, they'll draw on 50+ years of combined experience inside campaigns and in government to break down how the Democrats and Republicans are fighting for votes. They\u2019ll dissect the opposing parties\u2019 game plans to explain exactly what they\u2019re doing, why they\u2019re doing it, and why it is \u2013 or isn't \u2013 working.",
    itunes_id: 1529896611,
    rss: 'Please upgrade to the PRO plan to see this field',
    latest_pub_date_ms: 1608537600000,
    earliest_pub_date_ms: 1598966100000,
    language: 'English',
    country: 'United States',
    website: null,
    extra: {
      twitter_handle: '',
      facebook_handle: '',
      instagram_handle: '',
      wechat_handle: '',
      patreon_handle: '',
      youtube_url: '',
      linkedin_url: '',
      spotify_url: '',
      google_url: '',
      url1: '',
      url2: '',
      url3: '',
    },
    is_claimed: false,
    email: 'Please upgrade to the PRO plan to see this field',
    type: 'episodic',
    looking_for: {
      sponsors: false,
      guests: false,
      cohosts: false,
      cross_promotion: false,
    },
    genre_ids: [117, 216, 99, 67],
  },
  {
    id: 'dc7e0ee8e24044da818385e3e172ba00',
    title: "It's a Wonderful Lie",
    publisher: 'audiochuck',
    image:
      'https://cdn-images-1.listennotes.com/podcasts/its-a-wonderful-lie-HWIfprgUBby-AXpU8GoJuRv.300x300.jpg',
    thumbnail:
      'https://cdn-images-1.listennotes.com/podcasts/its-a-wonderful-lie-HWIfprgUBby-AXpU8GoJuRv.300x300.jpg',
    listennotes_url:
      'https://www.listennotes.com/c/dc7e0ee8e24044da818385e3e172ba00/',
    listen_score: 'Please upgrade to the PRO plan to see this field',
    listen_score_global_rank:
      'Please upgrade to the PRO plan to see this field',
    total_episodes: 12,
    explicit_content: false,
    description:
      "It\u2019s a Wonderful Lie is a short-form comedy podcast that imagines the hilarious \u201ctruth\u201d hidden in your holiday newsletters. They come via mail, email, and Facebook post. The ubiquitous \u201choliday newsletter\u201d from friends and family reminding you just how great life has been for them over the past year. From boring to bragging, and always chock full of BS.\u00a0\nIt's a Wonderful Lie imagines the messy stories hidden behind the perfect holiday newsletters. Of course, we\u2019re reading between the lines\u2014 but that\u2019s the fun of the podcast.\nIt\u2019s for anyone who has rolled their eyes at receiving a Christmas update.",
    itunes_id: 1544279344,
    rss: 'Please upgrade to the PRO plan to see this field',
    latest_pub_date_ms: 1608796800000,
    earliest_pub_date_ms: 1607537558000,
    language: 'English',
    country: 'United States',
    website:
      'https://www.audiochuck.com?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
    extra: {
      twitter_handle: '',
      facebook_handle: '',
      instagram_handle: '',
      wechat_handle: '',
      patreon_handle: '',
      youtube_url: '',
      linkedin_url: '',
      spotify_url: '',
      google_url: '',
      url1: '',
      url2: '',
      url3: '',
    },
    is_claimed: false,
    email: 'Please upgrade to the PRO plan to see this field',
    type: 'episodic',
    looking_for: {
      sponsors: false,
      guests: false,
      cohosts: false,
      cross_promotion: false,
    },
    genre_ids: [67, 133],
  },
  {
    id: 'dee13509807e4cf497be94cbaa368dae',
    title: 'Bag Man',
    publisher: 'MSNBC, Rachel Maddow',
    image:
      'https://cdn-images-1.listennotes.com/podcasts/bag-man-msnbc-rachel-maddow-6A20Jl4rKGL-n-CNRrgEmYs.300x300.jpg',
    thumbnail:
      'https://cdn-images-1.listennotes.com/podcasts/bag-man-msnbc-rachel-maddow-6A20Jl4rKGL-n-CNRrgEmYs.300x300.jpg',
    listennotes_url:
      'https://www.listennotes.com/c/dee13509807e4cf497be94cbaa368dae/',
    listen_score: 'Please upgrade to the PRO plan to see this field',
    listen_score_global_rank:
      'Please upgrade to the PRO plan to see this field',
    total_episodes: 12,
    explicit_content: false,
    description:
      '<p>Is it possible for an American Vice President to carry out a criminal enterprise inside the White House and have nobody remember? To have one of the most brazen political bribery scandals in American history play out before the country while nobody\u2019s paying attention? In her first original podcast, MSNBC\u2019s Rachel Maddow goes back 45 years to dig into a story that got overshadowed in its day. There\u2019s intrigue. Corruption. Envelopes of cash delivered to the White House. It\u2019s a story that\u2019s not well known, but it probably should be. Especially today. Bag Man. A Rachel Maddow podcast from MSNBC. Listen to the Peabody Award-nominated series now.</p>',
    itunes_id: 1488672690,
    rss: 'Please upgrade to the PRO plan to see this field',
    latest_pub_date_ms: 1606897800000,
    earliest_pub_date_ms: 1539034094008,
    language: 'English',
    country: 'United States',
    website:
      'https://art19.com/shows/bagman?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
    extra: {
      twitter_handle: '',
      facebook_handle: '',
      instagram_handle: '',
      wechat_handle: '',
      patreon_handle: '',
      youtube_url: '',
      linkedin_url: '',
      spotify_url: '',
      google_url: '',
      url1: '',
      url2: '',
      url3: '',
    },
    is_claimed: false,
    email: 'Please upgrade to the PRO plan to see this field',
    type: 'serial',
    looking_for: {
      sponsors: false,
      guests: false,
      cohosts: false,
      cross_promotion: false,
    },
    genre_ids: [99, 67, 125, 216, 135],
  },
  {
    id: '1f54fc24ccec43c5b5907b8e62ead29e',
    title: 'Duck Call Room',
    publisher: 'Si Robertson & Justin Martin',
    image:
      'https://cdn-images-1.listennotes.com/podcasts/duck-call-room-fDRg2Ek1zca-rgTqc_HhYXC.300x300.jpg',
    thumbnail:
      'https://cdn-images-1.listennotes.com/podcasts/duck-call-room-fDRg2Ek1zca-rgTqc_HhYXC.300x300.jpg',
    listennotes_url:
      'https://www.listennotes.com/c/1f54fc24ccec43c5b5907b8e62ead29e/',
    listen_score: 'Please upgrade to the PRO plan to see this field',
    listen_score_global_rank:
      'Please upgrade to the PRO plan to see this field',
    total_episodes: 5,
    explicit_content: false,
    description:
      'The guys who kept America laughing for 11 seasons while cranking out\u00a0duck\u00a0calls\u00a0are back in the heart of\u00a0Duck\u00a0Commander to share hilarious stories, tall tales, hunting adventures, pop culture commentary, and all the antics and escapades you know and love. Join Si Robertson, Justin Martin, John-David Owen, John Godwin, Jay Stone, and Phillip McMillan where it all began \u2014 in the\u00a0Duck\u00a0Call\u00a0Room.',
    itunes_id: 1541274724,
    rss: 'Please upgrade to the PRO plan to see this field',
    latest_pub_date_ms: 1608849000000,
    earliest_pub_date_ms: 1605845700000,
    language: 'English',
    country: 'United States',
    website:
      'https://cms.megaphone.fm/channel/duckcallroom?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
    extra: {
      twitter_handle: '',
      facebook_handle: '',
      instagram_handle: '',
      wechat_handle: '',
      patreon_handle: '',
      youtube_url: '',
      linkedin_url: '',
      spotify_url: '',
      google_url: '',
      url1: '',
      url2: '',
      url3: '',
    },
    is_claimed: false,
    email: 'Please upgrade to the PRO plan to see this field',
    type: 'episodic',
    looking_for: {
      sponsors: false,
      guests: false,
      cohosts: false,
      cross_promotion: false,
    },
    genre_ids: [122, 82, 67],
  },
  {
    id: '2e02184f53f1431a915ea64277b6600a',
    title: 'Red Collar',
    publisher: 'audiochuck',
    image:
      'https://cdn-images-1.listennotes.com/podcasts/red-collar-audiochuck-NJGLK9irvdU-b75IeuoXCh3.300x300.jpg',
    thumbnail:
      'https://cdn-images-1.listennotes.com/podcasts/red-collar-audiochuck-NJGLK9irvdU-b75IeuoXCh3.300x300.jpg',
    listennotes_url:
      'https://www.listennotes.com/c/2e02184f53f1431a915ea64277b6600a/',
    listen_score: 'Please upgrade to the PRO plan to see this field',
    listen_score_global_rank:
      'Please upgrade to the PRO plan to see this field',
    total_episodes: 6,
    explicit_content: false,
    description:
      'When we think of white-collar criminals, we picture a CEO getting caught up in the latest financial scandal. But there is a subgroup within these seemingly nonviolent offenders who are never discussed in mainstream media - the white-collar criminals who kill. Join Catherine Townsend as she dives into the minds of these real-life American Psychos...who are often hiding in plain sight. This is Red Collar.',
    itunes_id: 1541330058,
    rss: 'Please upgrade to the PRO plan to see this field',
    latest_pub_date_ms: 1608624000000,
    earliest_pub_date_ms: 1605877140004,
    language: 'English',
    country: 'United States',
    website:
      'https://www.redcollarpodcast.com?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
    extra: {
      twitter_handle: '',
      facebook_handle: '',
      instagram_handle: '',
      wechat_handle: '',
      patreon_handle: '',
      youtube_url: '',
      linkedin_url: '',
      spotify_url: '',
      google_url: '',
      url1: '',
      url2: '',
      url3: '',
    },
    is_claimed: false,
    email: 'Please upgrade to the PRO plan to see this field',
    type: 'episodic',
    looking_for: {
      sponsors: false,
      guests: false,
      cohosts: false,
      cross_promotion: false,
    },
    genre_ids: [67, 135],
  },
  {
    id: '2c0ad46fe2a843e98e87a8f0a7e4d507',
    title: 'All My Relations Podcast',
    publisher: 'Matika Wilbur & Adrienne Keene',
    image:
      'https://cdn-images-1.listennotes.com/podcasts/all-my-relations-podcast-matika-wilbur-4koiPRT5AdW.300x300.jpg',
    thumbnail:
      'https://cdn-images-1.listennotes.com/podcasts/all-my-relations-podcast-matika-wilbur-4koiPRT5AdW.300x300.jpg',
    listennotes_url:
      'https://www.listennotes.com/c/2c0ad46fe2a843e98e87a8f0a7e4d507/',
    listen_score: 'Please upgrade to the PRO plan to see this field',
    listen_score_global_rank:
      'Please upgrade to the PRO plan to see this field',
    total_episodes: 23,
    explicit_content: false,
    description:
      'Welcome! All My Relations is a podcast hosted by Matika Wilbur (Swinomish and Tulalip) and Adrienne Keene (Cherokee Nation) to explore our relationships\u2014 relationships to land, to our creatural relatives, and to one another.\u00a0\u00a0Each episode invites guests to delve into a different topic facing Native American peoples today. We keep it real, play some games, laugh a lot, and even cry sometimes. We invite you to join us!',
    itunes_id: 1454424563,
    rss: 'Please upgrade to the PRO plan to see this field',
    latest_pub_date_ms: 1607576400000,
    earliest_pub_date_ms: 1551168000022,
    language: 'English',
    country: 'United States',
    website:
      'http://www.allmyrelationspodcast.com?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
    extra: {
      twitter_handle: '',
      facebook_handle: '',
      instagram_handle: '',
      wechat_handle: '',
      patreon_handle: '',
      youtube_url: '',
      linkedin_url: '',
      spotify_url: '',
      google_url: '',
      url1: '',
      url2: '',
      url3: '',
    },
    is_claimed: false,
    email: 'Please upgrade to the PRO plan to see this field',
    type: 'episodic',
    looking_for: {
      sponsors: false,
      guests: false,
      cohosts: false,
      cross_promotion: false,
    },
    genre_ids: [126, 122, 111, 67],
  },
  {
    id: '83371e27a5bc4bddafce218f84855cca',
    title: 'Jacked',
    publisher: 'Wondery | UMG',
    image:
      'https://cdn-images-1.listennotes.com/podcasts/jacked-wondery-umg-wyu03SXRdAN-TONVUSLfjPY.300x300.jpg',
    thumbnail:
      'https://cdn-images-1.listennotes.com/podcasts/jacked-wondery-umg-wyu03SXRdAN-TONVUSLfjPY.300x300.jpg',
    listennotes_url:
      'https://www.listennotes.com/c/83371e27a5bc4bddafce218f84855cca/',
    listen_score: 'Please upgrade to the PRO plan to see this field',
    listen_score_global_rank:
      'Please upgrade to the PRO plan to see this field',
    total_episodes: 9,
    explicit_content: false,
    description:
      '\n      <p>Have you ever had a dream? Something you wanted <em>so</em> bad you just couldn\u2019t let it go? For a group of kids in Harlem in the Eighties, their dreams would change pop music forever. Teddy Riley, Timmy Gatling, and Aaron Hall form a group called Guy that would fuse hip-hop and R&amp;B and launch a new sound. By the early Nineties, the New Jack Sound dominated the pop music charts: Bell Biv Devoe, Bobby Brown, Boyz II Men, and many more. But the rise of the New Jack sound would come at a cost, and not everyone would make it to the top. Hosted by Taraji P Henson.  From Wondery and Universal Music Group, Jacked is a story of friendship, gangsters, double-crosses, and big dreams.</p><p>Hosted by Golden Globe winner Taraji P. Henson</p>\n    ',
    itunes_id: 1535879416,
    rss: 'Please upgrade to the PRO plan to see this field',
    latest_pub_date_ms: 1608624300000,
    earliest_pub_date_ms: 1602770400000,
    language: 'English',
    country: 'United States',
    website:
      'https://art19.com/shows/jacked?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
    extra: {
      twitter_handle: '',
      facebook_handle: '',
      instagram_handle: '',
      wechat_handle: '',
      patreon_handle: '',
      youtube_url: '',
      linkedin_url: '',
      spotify_url: '',
      google_url: '',
      url1: '',
      url2: '',
      url3: '',
    },
    is_claimed: false,
    email: 'Please upgrade to the PRO plan to see this field',
    type: 'serial',
    looking_for: {
      sponsors: false,
      guests: false,
      cohosts: false,
      cross_promotion: false,
    },
    genre_ids: [134, 122, 67],
  },
  {
    id: 'a8eba20622a64672a9fef0ff4b30a4db',
    title: 'Tenfold More Wicked',
    publisher: 'Exactly Right',
    image:
      'https://cdn-images-1.listennotes.com/podcasts/tenfold-more-wicked-JwIDkpV5T09-uxsgwlV4KTR.300x300.jpg',
    thumbnail:
      'https://cdn-images-1.listennotes.com/podcasts/tenfold-more-wicked-JwIDkpV5T09-uxsgwlV4KTR.300x300.jpg',
    listennotes_url:
      'https://www.listennotes.com/c/a8eba20622a64672a9fef0ff4b30a4db/',
    listen_score: 'Please upgrade to the PRO plan to see this field',
    listen_score_global_rank:
      'Please upgrade to the PRO plan to see this field',
    total_episodes: 6,
    explicit_content: false,
    description:
      '<p>Take a gruesome trip through history with chilling campfire stories of true crime. It&rsquo;s a unique blending of narrative nonfiction storytelling with investigative journalism, a deep dive into the lives of victims...and killers. And how they made history.</p>',
    itunes_id: 1538204210,
    rss: 'Please upgrade to the PRO plan to see this field',
    latest_pub_date_ms: 1608548400000,
    earliest_pub_date_ms: 1604073600001,
    language: 'English',
    country: 'United States',
    website:
      'https://omny.fm/shows/tenfold-more-wicked/playlists/podcast?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
    extra: {
      twitter_handle: '',
      facebook_handle: '',
      instagram_handle: '',
      wechat_handle: '',
      patreon_handle: '',
      youtube_url: '',
      linkedin_url: '',
      spotify_url: '',
      google_url: '',
      url1: '',
      url2: '',
      url3: '',
    },
    is_claimed: false,
    email: 'Please upgrade to the PRO plan to see this field',
    type: 'episodic',
    looking_for: {
      sponsors: false,
      guests: false,
      cohosts: false,
      cross_promotion: false,
    },
    genre_ids: [135, 67],
  },
  {
    id: 'd68a17eaa01c4a2db803eb4f7470c0e9',
    title: 'Graham Allen\u2019s Dear America Podcast',
    publisher: 'Graham Allen\u2019s Dear America Podcast',
    image:
      'https://cdn-images-1.listennotes.com/podcasts/graham-allens-dear-america-podcast-graham-qoFd6KYg3W7-14AGcDiQEz3.300x300.jpg',
    thumbnail:
      'https://cdn-images-1.listennotes.com/podcasts/graham-allens-dear-america-podcast-graham-qoFd6KYg3W7-14AGcDiQEz3.300x300.jpg',
    listennotes_url:
      'https://www.listennotes.com/c/d68a17eaa01c4a2db803eb4f7470c0e9/',
    listen_score: 'Please upgrade to the PRO plan to see this field',
    listen_score_global_rank:
      'Please upgrade to the PRO plan to see this field',
    total_episodes: 152,
    explicit_content: false,
    description:
      'Graham Allen cares enough about America to defend its values, so each week in the \u201cDear America" podcast, he and his band of unapologetic patriots tackle culture and politics head-on. No topic is out of bounds.\n\nIrreverent, unfiltered, and straight from the heart, Graham will always tell America what it needs to hear, not what it wants to hear \u2014 with some good laughs along the way.',
    itunes_id: 1456850698,
    rss: 'Please upgrade to the PRO plan to see this field',
    latest_pub_date_ms: 1608832803000,
    earliest_pub_date_ms: 1553026000082,
    language: 'English',
    country: 'United States',
    website: null,
    extra: {
      twitter_handle: '',
      facebook_handle: '',
      instagram_handle: '',
      wechat_handle: '',
      patreon_handle: '',
      youtube_url: '',
      linkedin_url: '',
      spotify_url: '',
      google_url: '',
      url1: '',
      url2: '',
      url3: '',
    },
    is_claimed: false,
    email: 'Please upgrade to the PRO plan to see this field',
    type: 'episodic',
    looking_for: {
      sponsors: false,
      guests: false,
      cohosts: false,
      cross_promotion: false,
    },
    genre_ids: [99, 67],
  },
  {
    id: '209505ff20454effa7517d82662523ee',
    title: 'Real Dictators',
    publisher: 'Noiser Podcasts',
    image:
      'https://cdn-images-1.listennotes.com/podcasts/real-dictators-gfL2YakxwzJ-UEC3h8Sr9Wz.300x300.jpg',
    thumbnail:
      'https://cdn-images-1.listennotes.com/podcasts/real-dictators-gfL2YakxwzJ-UEC3h8Sr9Wz.300x300.jpg',
    listennotes_url:
      'https://www.listennotes.com/c/209505ff20454effa7517d82662523ee/',
    listen_score: 'Please upgrade to the PRO plan to see this field',
    listen_score_global_rank:
      'Please upgrade to the PRO plan to see this field',
    total_episodes: 17,
    explicit_content: false,
    description:
      'Real Dictators is the new podcast series hosted by Paul McGann (Dr Who, Luther, Withnail and I) that explores the hidden lives of history\u2019s tyrants.\nAlso, check out our other podcast, Real Narcos. Out Now!',
    itunes_id: 1516194847,
    rss: 'Please upgrade to the PRO plan to see this field',
    latest_pub_date_ms: 1607346922000,
    earliest_pub_date_ms: 1586626860000,
    language: 'English',
    country: 'United States',
    website: null,
    extra: {
      twitter_handle: '',
      facebook_handle: '',
      instagram_handle: '',
      wechat_handle: '',
      patreon_handle: '',
      youtube_url: '',
      linkedin_url: '',
      spotify_url: '',
      google_url: '',
      url1: '',
      url2: '',
      url3: '',
    },
    is_claimed: false,
    email: 'Please upgrade to the PRO plan to see this field',
    type: 'serial',
    looking_for: {
      sponsors: false,
      guests: false,
      cohosts: false,
      cross_promotion: false,
    },
    genre_ids: [125, 67],
  },
  {
    id: '64ff51664b254bb0879e5c78e06be2d9',
    title: 'House of Broken Dreams: The Jennifer Kesse Story',
    publisher: 'FOX News',
    image:
      'https://cdn-images-1.listennotes.com/podcasts/house-of-broken-dreams-the-jennifer-kesse-BtH4MCsTxbm-LX2NSahui6_.300x300.jpg',
    thumbnail:
      'https://cdn-images-1.listennotes.com/podcasts/house-of-broken-dreams-the-jennifer-kesse-BtH4MCsTxbm-LX2NSahui6_.300x300.jpg',
    listennotes_url:
      'https://www.listennotes.com/c/64ff51664b254bb0879e5c78e06be2d9/',
    listen_score: 'Please upgrade to the PRO plan to see this field',
    listen_score_global_rank:
      'Please upgrade to the PRO plan to see this field',
    total_episodes: 10,
    explicit_content: false,
    description:
      '<p>She had everything going for her: A good job, close friends, a loving family, a boyfriend and a brand new condo. Her family describes her as a strong, fun loving, career-minded, and responsible young woman. So why did Jennifer Kesse seemingly vanish into thin air?</p>\n<p>On the morning of Tuesday, January 24, 2006, Jennifer Kesse failed to show up for work at Central Florida Investments where she was a finance manager. Jennifer was known for her reliability, but on that winter morning 14 years ago, nobody heard from Jen. And that meant something was drastically wrong.</p>\n<p>In this podcast, hosted by crime reporter Cristina Corbin, she travels to Florida to uncover new leads, exclusive interviews, and examine evidence in recently unsealed police records.</p>\n<p>You&rsquo;ll also hear from Jennifer&rsquo;s family who call their home a &ldquo;house of broken dreams&rdquo; because they bought it with their son and daughter in mind&mdash;anticipating visits with their friends and ultimately their significant others.</p>\n<p>Years later, the Jennifer Kesse case is anything but cold. In fact, the investigation, by some accounts, is only just beginning.d</p>',
    itunes_id: 1539220513,
    rss: 'Please upgrade to the PRO plan to see this field',
    latest_pub_date_ms: 1605132300000,
    earliest_pub_date_ms: 1604697960000,
    language: 'English',
    country: 'United States',
    website:
      'https://radio.foxnews.com/podcast/derby-city-betrayal/?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
    extra: {
      twitter_handle: '',
      facebook_handle: '',
      instagram_handle: '',
      wechat_handle: '',
      patreon_handle: '',
      youtube_url: '',
      linkedin_url: '',
      spotify_url: '',
      google_url: '',
      url1: '',
      url2: '',
      url3: '',
    },
    is_claimed: false,
    email: 'Please upgrade to the PRO plan to see this field',
    type: 'serial',
    looking_for: {
      sponsors: false,
      guests: false,
      cohosts: false,
      cross_promotion: false,
    },
    genre_ids: [135, 67, 99, 244, 122],
  },
  {
    id: '0fab732a73c3472eb8061f4065275131',
    title: 'Bill Gates and Rashida Jones Ask Big Questions',
    publisher: 'Gates Notes',
    image:
      'https://cdn-images-1.listennotes.com/podcasts/bill-gates-and-rashida-jones-ask-big-DNt7PLVBhSc-ZsG_RgTJWI-.300x300.jpg',
    thumbnail:
      'https://cdn-images-1.listennotes.com/podcasts/bill-gates-and-rashida-jones-ask-big-DNt7PLVBhSc-ZsG_RgTJWI-.300x300.jpg',
    listennotes_url:
      'https://www.listennotes.com/c/0fab732a73c3472eb8061f4065275131/',
    listen_score: 'Please upgrade to the PRO plan to see this field',
    listen_score_global_rank:
      'Please upgrade to the PRO plan to see this field',
    total_episodes: 6,
    explicit_content: false,
    description:
      '\n      <p>Bill Gates and Rashida Jones Ask Big Questions pairs Bill Gates with actress and writer Rashida Jones to tackle some of the biggest questions facing us today: Is it too late to solve climate change? Does everybody lie? Is inequality inevitable? Join them for deep dives into these questions and even a few answers.</p>\n    ',
    itunes_id: 1538630420,
    rss: 'Please upgrade to the PRO plan to see this field',
    latest_pub_date_ms: 1607932800000,
    earliest_pub_date_ms: 1605168000002,
    language: 'English',
    country: 'United States',
    website:
      'https://www.gatesnotes.com/podcast?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
    extra: {
      twitter_handle: '',
      facebook_handle: '',
      instagram_handle: '',
      wechat_handle: '',
      patreon_handle: '',
      youtube_url: '',
      linkedin_url: '',
      spotify_url: '',
      google_url: '',
      url1: '',
      url2: '',
      url3: '',
    },
    is_claimed: false,
    email: 'Please upgrade to the PRO plan to see this field',
    type: 'episodic',
    looking_for: {
      sponsors: false,
      guests: false,
      cohosts: false,
      cross_promotion: false,
    },
    genre_ids: [67, 122],
  },
  {
    id: '8925644f689944c5a96a4e5542ec075b',
    title: 'Louder with Crowder',
    publisher: 'Blaze Podcast Network',
    image:
      'https://cdn-images-1.listennotes.com/podcasts/louder-with-crowder-steven-crowder-iUDHN_KkF8n-v64BswOgdVW.300x300.jpg',
    thumbnail:
      'https://cdn-images-1.listennotes.com/podcasts/louder-with-crowder-steven-crowder-iUDHN_KkF8n-v64BswOgdVW.300x300.jpg',
    listennotes_url:
      'https://www.listennotes.com/c/8925644f689944c5a96a4e5542ec075b/',
    listen_score: 'Please upgrade to the PRO plan to see this field',
    listen_score_global_rank:
      'Please upgrade to the PRO plan to see this field',
    total_episodes: 251,
    explicit_content: false,
    description:
      "Steven Crowder brings you news, entertainment and politics with the most politically incorrect show on the web. Guests, rants, sketches, your calls ... it's whatever.",
    itunes_id: 929121341,
    rss: 'Please upgrade to the PRO plan to see this field',
    latest_pub_date_ms: 1607965200000,
    earliest_pub_date_ms: 1416528000216,
    language: 'English',
    country: 'United States',
    website:
      'http://louderwithcrowder.com?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
    extra: {
      twitter_handle: '',
      facebook_handle: '',
      instagram_handle: '',
      wechat_handle: '',
      patreon_handle: '',
      youtube_url: '',
      linkedin_url: '',
      spotify_url: '',
      google_url: '',
      url1: '',
      url2: '',
      url3: '',
    },
    is_claimed: false,
    email: 'Please upgrade to the PRO plan to see this field',
    type: 'episodic',
    looking_for: {
      sponsors: false,
      guests: false,
      cohosts: false,
      cross_promotion: false,
    },
    genre_ids: [67, 99, 133],
  },
  {
    id: 'fa4a5d80ca30481c9e1c68c8e56680cb',
    title: "Bannon's War Room",
    publisher: 'WarRoom.org',
    image:
      'https://cdn-images-1.listennotes.com/podcasts/bannons-war-room-warroomorg-RL680QF59Ef-JVtBzDmHe8I.300x300.jpg',
    thumbnail:
      'https://cdn-images-1.listennotes.com/podcasts/bannons-war-room-warroomorg-RL680QF59Ef-JVtBzDmHe8I.300x300.jpg',
    listennotes_url:
      'https://www.listennotes.com/c/fa4a5d80ca30481c9e1c68c8e56680cb/',
    listen_score: 'Please upgrade to the PRO plan to see this field',
    listen_score_global_rank:
      'Please upgrade to the PRO plan to see this field',
    total_episodes: 783,
    explicit_content: false,
    description:
      'WAR ROOM: Pandemic is the first and most comprehensive program to bring the most up to the minute information on the coronavirus pandemic and the news of the day. Stephen K. Bannon, Raheem Kassam, Jack Maxey, and Vish Burra bring medical experts, politicians, business leaders, and those on the front lines for a comprehensive look at the latest news from all and provide their insider insights.',
    itunes_id: 1485351658,
    rss: 'Please upgrade to the PRO plan to see this field',
    latest_pub_date_ms: 1608915600001,
    earliest_pub_date_ms: 1571760480194,
    language: 'English',
    country: 'United States',
    website:
      'https://warroomimpeachment.podbean.com?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
    extra: {
      twitter_handle: '',
      facebook_handle: '',
      instagram_handle: '',
      wechat_handle: '',
      patreon_handle: '',
      youtube_url: '',
      linkedin_url: '',
      spotify_url: '',
      google_url: '',
      url1: '',
      url2: '',
      url3: '',
    },
    is_claimed: false,
    email: 'Please upgrade to the PRO plan to see this field',
    type: 'episodic',
    looking_for: {
      sponsors: false,
      guests: false,
      cohosts: false,
      cross_promotion: false,
    },
    genre_ids: [216, 215, 213, 99, 67],
  },
  {
    id: '2f9db8979aae46419cbef30ae96c4f47',
    title: 'Ben Ferguson Podcast',
    publisher: 'The Ben Ferguson Show',
    image:
      'https://cdn-images-1.listennotes.com/podcasts/ben-ferguson-podcast-the-ben-ferguson-show-8mtEcDln7uQ-aT1Wsk69p-y.300x300.jpg',
    thumbnail:
      'https://cdn-images-1.listennotes.com/podcasts/ben-ferguson-podcast-the-ben-ferguson-show-8mtEcDln7uQ-aT1Wsk69p-y.300x300.jpg',
    listennotes_url:
      'https://www.listennotes.com/c/2f9db8979aae46419cbef30ae96c4f47/',
    listen_score: 'Please upgrade to the PRO plan to see this field',
    listen_score_global_rank:
      'Please upgrade to the PRO plan to see this field',
    total_episodes: 91,
    explicit_content: false,
    description:
      'If you hate the liberal media & ANTIFA but love President Trump than this is the podcast for you. <br /><br />Ben Ferguson Brings you the commentary on the news that the bias media will not cover',
    itunes_id: 1386375601,
    rss: 'Please upgrade to the PRO plan to see this field',
    latest_pub_date_ms: 1608781921000,
    earliest_pub_date_ms: 1526484036000,
    language: 'English',
    country: 'United States',
    website:
      'https://www.iheart.com/podcast/867-Ben-Ferguson-Morning-Updat-29342597?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
    extra: {
      twitter_handle: '',
      facebook_handle: '',
      instagram_handle: '',
      wechat_handle: '',
      patreon_handle: '',
      youtube_url: '',
      linkedin_url: '',
      spotify_url: '',
      google_url: '',
      url1: '',
      url2: '',
      url3: '',
    },
    is_claimed: false,
    email: 'Please upgrade to the PRO plan to see this field',
    type: 'episodic',
    looking_for: {
      sponsors: false,
      guests: false,
      cohosts: false,
      cross_promotion: false,
    },
    genre_ids: [122, 67],
  },
  {
    id: '8f66797ab56543d1b5f329ea4177ed3b',
    title: 'Mark Levin Podcast',
    publisher: 'Westwood One Podcast Network',
    image:
      'https://cdn-images-1.listennotes.com/podcasts/mark-levin-podcast-westwood-one-podcast-XCuPMzgA9SI-lnRGHjVNuZF.300x300.jpg',
    thumbnail:
      'https://cdn-images-1.listennotes.com/podcasts/mark-levin-podcast-westwood-one-podcast-XCuPMzgA9SI-lnRGHjVNuZF.300x300.jpg',
    listennotes_url:
      'https://www.listennotes.com/c/8f66797ab56543d1b5f329ea4177ed3b/',
    listen_score: 'Please upgrade to the PRO plan to see this field',
    listen_score_global_rank:
      'Please upgrade to the PRO plan to see this field',
    total_episodes: 853,
    explicit_content: false,
    description:
      'Mark Levin is one of the hottest properties in Talk radio today. He is also one of the leading authors in the conservative political arena. Mark\'s radio show on WABC in New York City skyrocketed to Number 1 on the AM dial in his first 18 months on the air in the competitive 6:00 PM - 8:00 PM time slot. Mark\'s latest book, "Unfreedom of the Press," is out now. When your books are endorsed by Rush Limbaugh and Sean Hannity, you know you have a winner on your hands. In a short period of time, Mark has become one of the most listened to local radio Talk show hosts in the nation.',
    itunes_id: 1099510856,
    rss: 'Please upgrade to the PRO plan to see this field',
    latest_pub_date_ms: 1608949800000,
    earliest_pub_date_ms: 1505956997721,
    language: 'English',
    country: 'United States',
    website:
      'http://www.marklevinshow.com/?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website',
    extra: {
      twitter_handle: '',
      facebook_handle: '',
      instagram_handle: '',
      wechat_handle: '',
      patreon_handle: '',
      youtube_url: '',
      linkedin_url: '',
      spotify_url: '',
      google_url: '',
      url1: '',
      url2: '',
      url3: '',
    },
    is_claimed: false,
    email: 'Please upgrade to the PRO plan to see this field',
    type: 'episodic',
    looking_for: {
      sponsors: false,
      guests: false,
      cohosts: false,
      cross_promotion: false,
    },
    genre_ids: [215, 99, 67, 216],
  },
]; */

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.dark,
    flexGrow: 1,
    color: theme.palette.primary.contrastText,
    minHeight: '100vh',
  },
  searchbarContainer: {
    padding: '0.5rem 1rem',
    [theme.breakpoints.up('sm')]: {
      padding: '0.5rem 3rem',
    },
  },
  chipContainer: {
    backgroundColor: theme.palette.primary.dark,
    display: 'flex',
    flexWrap: 'wrap',
    color: theme.palette.primary.contrastText,
    padding: '1rem 1rem',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      padding: '2rem 8rem',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '0rem 16rem',
      margin: '3rem 0rem',
    },
  },
  chip: {
    maxHeight: '3vh',
    backgroundColor: '#202020',
    color: theme.palette.primary.contrastText,
    borderRadius: 0,
    fontFamily: 'Roboto',
    fontSize: 15,
    width: '75%',
    '&:hover': {
      backgroundColor: '#151515',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 15,
      padding: 10,
      maxWidth: '33%',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 20,
      padding: 10,
      margin: 1,
      maxWidth: '25%',
    },
  },
  title: {
    margin: '3rem 2rem',
    textAlign: 'start',
    fontSize: 30,
    fontFamily: 'Roboto',
    [theme.breakpoints.up('sm')]: {
      fontSize: 60,
    },
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const {
    genres,
    page,
    podcastList,
    setPodcastList,
    getBestPodcasts,
    getGenres,
    setSelectedGenre,
    setPage,
    selectedGenre,
    getBestPodcastsByGenre,
  } = useContext(PodcastContext);

  const loader = useRef(null);
  console.log(page);
  useEffect(() => {
    getGenres();
  }, []);

  useEffect(() => {
    getBestPodcasts();
  }, [page]);

  useEffect(() => {
    getBestPodcastsByGenre();
  }, [selectedGenre]);

  useEffect(() => {
    var options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, []);

  const handleGenreOption = (selectedGenre) => {
    setPodcastList([]);
    setPage(1);
    setSelectedGenre(selectedGenre);
  };

  const handleObserver = (entities) => {
    const target = entities[0];
    console.log(target);
    if (target.isIntersecting) {
      setPage((page) => page + 1);
    }
  };

  const renderGenres = () => {
    console.log(selectedGenre);
    return genres.map((genre) => {
      return (
        <Chip
          className={classes.chip}
          label={genre.name}
          key={genre.id}
          onClick={() => handleGenreOption(genre)}
        />
      );
    });
  };

  return (
    <div className={classes.container}>
      <Grid>
        <Grid item xs={12} className={classes.searchbarContainer}>
          <SearchBar />
        </Grid>
        {/* <Divider style={{ margin: '1vh 7vw' }} /> */}
        <Grid item xs={12} className={classes.chipContainer}>
          {genres ? (
            renderGenres()
          ) : (
            <CircularProgress color="primary" size="8vw" />
          )}
        </Grid>
        {/* <Divider style={{ margin: '2vh 7vw' }} /> */}
        <Grid item xs={12}>
          <div className={classes.title}>
            {selectedGenre.name === undefined ? (
              <div>Top List</div>
            ) : (
              <div>{selectedGenre.name}</div>
            )}
          </div>
          {podcastList.length > 0 ? (
            <ItemsGrid
              infoList={{ podcastList, episodesList: [] }}
              search={false}
            />
          ) : (
            <CircularProgress color="primary" size="8vw" />
          )}
        </Grid>
      </Grid>
      <div className="loading" ref={loader}>
        <h2>Load More</h2>
      </div>
    </div>
  );
};

export default LandingPage;
