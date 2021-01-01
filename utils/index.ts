import { ITitleDetails, TCardIndex } from './types';

export const iconButtonClass = 'ml-3 p-2 border border-inputPlaceholder hover:bg-bg2 rounded-md';

export const arrowBtnClass = 'absolute px-1 py-4 z-50 rounded-md bg-gray-500';

export const gridCardClass = (pos: TCardIndex) =>
  `relative z-10 hover:z-40 group bg-bg2 rounded-md transform transition-transform ease-out lg:hover:scale-125 ${
    pos === 'first' ? 'lg:hover:translate-x-11%' : pos === 'last' ? 'lg:hover:-translate-x-12%' : ''
  }`;

export const textClass = 'text-xl font-semibold text-textHighlight';

export const bpLabels = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

export const githubLink = 'https://github.com/vishnumohanrk/hotstar-clone';

export const getCardPos = (currentBPValue: number, index: number): TCardIndex => {
  const end = Array(25)
    .fill(0)
    .map((_, j) => (j + 1) * currentBPValue - 1);

  return index % currentBPValue === 0 ? 'first' : end.includes(index) ? 'last' : 'middle';
};

const demoTitle = (id: number): ITitleDetails => ({
  categories: ['SuperHero', 'Sci-Fi', 'Marvel', 'Action'],
  year: 2019,
  description: 'The Greatest Movie Evermade. The most Ambitious Crossover in the history of Entertainment.',
  coverImg: 'https://image.tmdb.org/t/p/w500/q034rbTWteRNA8sMSc2YjegmiUx.jpg',
  posterImg: 'https://image.tmdb.org/t/p/w500/q034rbTWteRNA8sMSc2YjegmiUx.jpg',
  title: 'Avengers: Endgame',
  mediaType: 'movies',
  id,
});

export const mockData = (n: number) =>
  Array(n)
    .fill(0)
    .map((_, j) => demoTitle(j));

export const movieGenres = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' },
];

export const tvGenres = [
  { id: 10759, name: 'Action & Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 10762, name: 'Kids' },
  { id: 9648, name: 'Mystery' },
  { id: 10763, name: 'News' },
  { id: 10764, name: 'Reality' },
  { id: 10765, name: 'Sci-Fi & Fantasy' },
  { id: 10766, name: 'Soap' },
  { id: 10767, name: 'Talk' },
  { id: 10768, name: 'War & Politics' },
  { id: 37, name: 'Western' },
];

// TODO: ADJUST CARD LINK TAB FOCUS
