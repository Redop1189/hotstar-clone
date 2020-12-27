import GridCard from '../components/cards/GridCard';
import HeroCard from '../components/cards/HeroCard';
import { ITitleDetails } from '../utils/types';
// import PagePlaceHolder from '../components/spinners';

const demoTitle: ITitleDetails = {
  categories: ['SuperHero', 'Sci-Fi', 'Marvel', 'Action'],
  year: 2019,
  description: 'The Greatest Movie Evermade. The most Ambitious Crossover in the history of Entertainment.',
  imgSrc: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_hm_m1/sources/r1/cms/prod/6882/676882-m',
  title: 'Avengers: Endgame',
};

const AppHome = () => (
  <>
    <HeroCard {...demoTitle} />
    <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-7 my-8">
      <GridCard {...demoTitle} transformClass="firstTransform" />
      <GridCard {...demoTitle} transformClass="normalTransform" />
      <GridCard {...demoTitle} transformClass="normalTransform" />
      <GridCard {...demoTitle} transformClass="normalTransform" />
      <GridCard {...demoTitle} transformClass="normalTransform" />
      <GridCard {...demoTitle} transformClass="normalTransform" />
      <GridCard {...demoTitle} transformClass="lastTransform" />
    </div>
    <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-7 my-8">
      <GridCard {...demoTitle} transformClass="firstTransform" />
      <GridCard {...demoTitle} transformClass="normalTransform" />
      <GridCard {...demoTitle} transformClass="normalTransform" />
      <GridCard {...demoTitle} transformClass="normalTransform" />
      <GridCard {...demoTitle} transformClass="normalTransform" />
      <GridCard {...demoTitle} transformClass="normalTransform" />
      <GridCard {...demoTitle} transformClass="lastTransform" />
    </div>
    <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-7 my-8">
      <GridCard {...demoTitle} transformClass="firstTransform" />
      <GridCard {...demoTitle} transformClass="normalTransform" />
      <GridCard {...demoTitle} transformClass="normalTransform" />
      <GridCard {...demoTitle} transformClass="normalTransform" />
      <GridCard {...demoTitle} transformClass="normalTransform" />
      <GridCard {...demoTitle} transformClass="normalTransform" />
      <GridCard {...demoTitle} transformClass="lastTransform" />
    </div>
  </>
);

export default AppHome;
