import axios from 'axios';

const KEYS = 'AIzaSyBX1M5kX4OWSQlsHr4pjNCxoGK-_1EoUmQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 25,
    key: KEYS,
  },
});
