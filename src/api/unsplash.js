import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ZluuHvOhyLluDKV9js7B0TmEM4AHCYAojJYH3RcUyns'
  }
});