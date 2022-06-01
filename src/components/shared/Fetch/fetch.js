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

export const getMovieById = async id => {
  const { data } = await instance.get(`movie/${id}`);

  return data;
};

export const getMovie = async query => {
  const { data } = await instance.get(`search/movie/`, {
    params: {
      query,
    },
  });

  return data;
};

export const getCast = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);

  return data;
};

export const getReviews = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews`);

  return data;
};
