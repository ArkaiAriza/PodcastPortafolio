import axios from 'axios';
import LISTENNOTES_KEY from '../keys';

export default axios.create({
  baseURL: 'https://listen-api.listennotes.com/api/v2',
  headers: { 'X-ListenAPI-Key': LISTENNOTES_KEY },
});
