import { InferGetStaticPropsType } from 'next';

import HeroCarousel from '../components/carousels/HeroCarousel';
import VerticalCardCarousel from '../components/carousels/VerticalCardCarousel';
import { popularMovies, popularShows, topRatedMovies, topRatedShows } from '../utils/apiResp';

const AppHome = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { heroList, popularMoviesList, popularShowsList, topRatedMoviesList, topRatedShowsList } = props;

  return (
    <>
      <HeroCarousel dataList={heroList} />
      <div className="h-10"></div>
      <VerticalCardCarousel name="Popular Movies" dataList={popularMoviesList} />
      <VerticalCardCarousel name="Popular Shows" dataList={popularShowsList} />
      <VerticalCardCarousel name="Top Rated Movies" dataList={topRatedMoviesList} />
      <VerticalCardCarousel name="Top Rated Shows" dataList={topRatedShowsList} />
    </>
  );
};

export const getStaticProps = async () => {
  const popularMoviesList = await popularMovies();
  const popularShowsList = await popularShows();
  const topRatedMoviesList = await topRatedMovies();
  const topRatedShowsList = await topRatedShows();
  const heroList = [...popularMoviesList.slice(0, 3), ...popularShowsList.slice(0, 3)];

  return {
    props: {
      popularMoviesList,
      popularShowsList,
      topRatedMoviesList,
      topRatedShowsList,
      heroList,
    },
  };
};

export default AppHome;
