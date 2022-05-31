import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '472eb9c3f2ac1bf77bbb6771cd09c0a8',
  },
});

export const getTrending = async () => {
  const { data } = await instance.get('/trending/all/day');
  return data;
};

export const getMovie = async id => {
  const { data } = await instance.get(`movie/${id}`);

  return data;
};
