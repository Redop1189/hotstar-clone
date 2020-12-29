/* eslint-disable @typescript-eslint/no-explicit-any */
import { movieGenres, tvGenres } from '.';
import { ITitleDetails } from './types';

// common
const fallbackImg = '../fallbackImg.png';
const getYear = (fullDate: string) => new Date(fullDate).getFullYear();
const getImgSrc = (path: string | null) => (path ? `https://image.tmdb.org/t/p/original${path}` : fallbackImg);
const getGenreNames = ({ arr, isTV }: { arr: number[]; isTV: boolean }) =>
  arr.map(i => (isTV ? tvGenres : movieGenres).find(j => j.id === i)?.name || 'NA');

// movie
const url = ({ path, query }: { path: string; query: string }) =>
  `https://api.themoviedb.org/3${path}?api_key=${process.env.TMDB_API_KEY}&language=en-US&${query}`;

const getList = async (arg: { isTV: boolean; path: string }): Promise<ITitleDetails[]> => {
  const { isTV, path } = arg;

  const resp = await fetch(url({ path, query: 'page=1' }));

  if (resp.ok) {
    const { results } = await resp.json();

    return (results as any[]).map(i => ({
      categories: getGenreNames({ arr: i.genre_ids, isTV }),
      description: i.overview,
      id: i.id,
      coverImg: getImgSrc(i.backdrop_path),
      posterImg: getImgSrc(i.poster_path),
      title: isTV ? i.name : i.title,
      year: getYear(isTV ? i.first_air_date : i.release_date),
    }));
  }

  throw new Error();
};

export const nowPlayingMovies = () => getList({ isTV: false, path: '/movie/now_playing' });
export const topRatedMovies = () => getList({ isTV: false, path: '/movie/top_rated' });
export const popularMovies = () => getList({ isTV: false, path: '/movie/popular' });

export const nowPlayingShows = () => getList({ isTV: true, path: '/tv/on_the_air' });
export const topRatedShows = () => getList({ isTV: true, path: '/tv/top_rated' });
export const popularShows = () => getList({ isTV: true, path: '/tv/popular' });
