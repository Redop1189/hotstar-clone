/* eslint-disable @typescript-eslint/no-explicit-any */
import { movieGenres, tvGenres } from '.';
import { ITitleDetails } from './types';

// common
interface apiFetcherArgs {
  isTV: boolean;
  path: string;
}

const fallbackImg = '../fallbackImg.png';

const getYear = (fullDate: string) => new Date(fullDate).getFullYear();

const getImgSrc = (path: string | null) => (path ? `https://image.tmdb.org/t/p/w500${path}` : fallbackImg);

const getGenreNames = ({ arr, isTV }: { arr: number[]; isTV: boolean }) =>
  arr.map(i => (isTV ? tvGenres : movieGenres).find(j => j.id === i)?.name || 'NA');

const getDetails = (i: any, isTV: boolean) =>
  ({
    description: i.overview,
    id: i.id,
    coverImg: getImgSrc(i.backdrop_path),
    posterImg: getImgSrc(i.poster_path),
    title: isTV ? i.name : i.title,
    year: getYear(isTV ? i.first_air_date : i.release_date),
    mediaType: isTV ? 'tv' : 'movie',
  } as Omit<ITitleDetails, 'categories'>);

// fns
const url = ({ path, query }: { path: string; query: string }) =>
  `https://api.themoviedb.org/3${path}?api_key=${process.env.TMDB_API_KEY}&language=en-US&${query}`;

const getList = async ({ isTV, path }: apiFetcherArgs): Promise<ITitleDetails[]> => {
  const resp = await fetch(url({ path, query: 'page=1' }));

  if (resp.ok) {
    const { results } = await resp.json();

    return (results as any[]).map(i => ({
      categories: getGenreNames({ arr: i.genre_ids, isTV }),
      ...getDetails(i, isTV),
    }));
  }

  throw new Error();
};

const getSingleTitle = async ({ isTV, path }: apiFetcherArgs): Promise<ITitleDetails> => {
  const resp = await fetch(url({ path, query: '' }));

  if (resp.ok) {
    const data = await resp.json();

    return {
      categories: data.genres.map((i: typeof tvGenres[number]) => i.name),
      ...getDetails(data, isTV),
    };
  }

  throw new Error();
};

export const nowPlayingMovies = () => getList({ isTV: false, path: '/movie/now_playing' });
export const topRatedMovies = () => getList({ isTV: false, path: '/movie/top_rated' });
export const popularMovies = () => getList({ isTV: false, path: '/movie/popular' });

export const nowPlayingShows = () => getList({ isTV: true, path: '/tv/on_the_air' });
export const topRatedShows = () => getList({ isTV: true, path: '/tv/top_rated' });
export const popularShows = () => getList({ isTV: true, path: '/tv/popular' });

export const oneMovie = (id: number) => getSingleTitle({ isTV: false, path: `/movie/${id}` });
export const similarMovies = (id: number) => getList({ isTV: false, path: `/movie/${id}/similar` });

export const oneShow = (id: number) => getSingleTitle({ isTV: true, path: `/tv/${id}` });
export const similarShows = (id: number) => getList({ isTV: true, path: `/tv/${id}/similar` });
