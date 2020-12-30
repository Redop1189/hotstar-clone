import { InferGetStaticPropsType } from 'next';

import HeroCarousel from '../../components/carousels/HeroCarousel';
import VerticalCardCarousel from '../../components/carousels/VerticalCardCarousel';
import { nowPlayingMovies, popularMovies, topRatedMovies } from '../../utils/apiResp';

const AppHome = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { heroList, nowPlayingMoviesList, popularMoviesList, topRatedMoviesList } = props;

  return (
    <>
      <HeroCarousel dataList={heroList} />
      <div className="h-10"></div>
      <VerticalCardCarousel name="Now Playing" dataList={nowPlayingMoviesList} />
      <VerticalCardCarousel name="Popular Movies" dataList={popularMoviesList} />
      <VerticalCardCarousel name="Top Rated Movies" dataList={topRatedMoviesList} />
    </>
  );
};

export const getStaticProps = async () => {
  const popularMoviesList = await popularMovies();
  const nowPlayingMoviesList = await nowPlayingMovies();
  const topRatedMoviesList = await topRatedMovies();
  const heroList = nowPlayingMoviesList.slice(0, 6);

  return {
    props: {
      popularMoviesList,
      nowPlayingMoviesList,
      topRatedMoviesList,
      heroList,
    },
  };
};

export default AppHome;
