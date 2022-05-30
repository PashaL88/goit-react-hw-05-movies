import axios from 'axios';

const instance = axios.create({
  baseUrl: ``,
  params: {
    api_key: `472eb9c3f2ac1bf77bbb6771cd09c0a8`,
  },
});

export const getMovies = async () => {
  const { data } = await instance.get(
    'https://api.themoviedb.org/3/trending/all/day'
  );
  return data;
};
