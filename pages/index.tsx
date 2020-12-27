import GridCard from '../components/cards/GridCard';
import HeroCarousel from '../components/carousels/HeroCarousel';
import { demoTitle } from '../utils';

const AppHome = () => (
  <>
    <HeroCarousel />
    <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-7 my-8">
      <GridCard {...demoTitle} pos="first" />
      <GridCard {...demoTitle} pos="middle" />
      <GridCard {...demoTitle} pos="middle" />
      <GridCard {...demoTitle} pos="middle" />
      <GridCard {...demoTitle} pos="middle" />
      <GridCard {...demoTitle} pos="middle" />
      <GridCard {...demoTitle} pos="last" />
    </div>
  </>
);

export default AppHome;
