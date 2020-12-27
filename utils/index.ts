import { ITitleDetails, TCardIndex } from './types';

export const classFull = 'max-w-screen-2xl px-4 xl:px-12 mx-auto';

export const iconButtonClass = 'ml-3 p-2 border border-inputPlaceholder hover:bg-bg2 rounded-md';

export const arrowBtnClass = 'absolute px-1 py-4 z-50 rounded-md bg-gray-500';

export const gridCardClass = (pos: TCardIndex) =>
  `relative z-10 hover:z-40 group bg-bg2 rounded-md transform transition-transform ease-out lg:hover:scale-125 ${
    pos === 'first' ? 'lg:hover:translate-x-11%' : pos === 'last' ? 'lg:hover:-translate-x-12%' : ''
  }`;

export const textClass = 'text-xl font-semibold text-textHighlight';

export const bpLabels = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

export const demoTitle: ITitleDetails = {
  categories: ['SuperHero', 'Sci-Fi', 'Marvel', 'Action'],
  year: 2019,
  description: 'The Greatest Movie Evermade. The most Ambitious Crossover in the history of Entertainment.',
  imgSrc: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_hm_m1/sources/r1/cms/prod/6882/676882-m',
  title: 'Avengers: Endgame',
};
