const EXERCISE_HOST = 'exercisedb.p.rapidapi.com';
const YOUTUBE_HOST = 'youtube-search-and-download.p.rapidapi.com';
const API_KEY = process.env.REACT_APP_API_KEY;

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': EXERCISE_HOST,
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': YOUTUBE_HOST,
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
