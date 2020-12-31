import { InferGetStaticPropsType } from 'next';

import FullPage from '../components/pageReuse/FullPage';
import { popularMovies, popularShows, topRatedMovies, topRatedShows } from '../utils/apiResp';

const AppHome = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { heroList, popularMoviesList, popularShowsList, topRatedMoviesList, topRatedShowsList } = props;

  const pageLists = [
    { name: 'Popular Movies', dataList: popularMoviesList },
    { name: 'Popular Shows', dataList: popularShowsList },
    { name: 'Top Rated Movies', dataList: topRatedMoviesList },
    { name: 'Top Rated Shows', dataList: topRatedShowsList },
  ];

  return <FullPage pageTitle="Home" heroList={heroList} pageLists={pageLists} />;
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
    revalidate: 172800,
  };
};

export default AppHome;
