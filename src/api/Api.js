import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'c4c535d4c92d9e8cd45d9f8a1dc15d0d',
    language: 'en-US',
  },
});

export const getTrendingFilms = async () => {
  const { data } = await instance.get('trending/all/day');
  return data;
};

export const getInfoFilms = async id => {
  const { data } = await instance.get(`movie/${id}`);
  return data;
};
