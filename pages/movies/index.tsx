import { InferGetStaticPropsType } from 'next';

import FullPage from '../../components/pageReuse/FullPage';
import { nowPlayingMovies, popularMovies, topRatedMovies } from '../../utils/apiResp';

const MoviesPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { heroList, nowPlayingMoviesList, popularMoviesList, topRatedMoviesList } = props;

  const pageList = [
    { name: 'Now Playing', dataList: nowPlayingMoviesList },
    { name: 'Popular Movies', dataList: popularMoviesList },
    { name: 'Top Rated Movies', dataList: topRatedMoviesList },
  ];

  return <FullPage heroList={heroList} pageTitle="Movies" pageLists={pageList} />;
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
    revalidate: 172800,
  };
};

export default MoviesPage;
