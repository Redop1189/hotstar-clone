import { InferGetStaticPropsType } from 'next';

import FullPage from '../../components/pageReuse/FullPage';
import { nowPlayingShows, popularShows, topRatedShows } from '../../utils/apiResp';

const TVPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { heroList, nowPlayingShowsList, popularShowsList, topRatedShowsList } = props;

  const pageList = [
    { name: 'Now Playing', dataList: nowPlayingShowsList },
    { name: 'Popular TV', dataList: popularShowsList },
    { name: 'Top Rated TV', dataList: topRatedShowsList },
  ];

  return <FullPage heroList={heroList} pageTitle="TV" pageLists={pageList} />;
};

export const getStaticProps = async () => {
  const popularShowsList = await popularShows();
  const nowPlayingShowsList = await nowPlayingShows();
  const topRatedShowsList = await topRatedShows();
  const heroList = nowPlayingShowsList.slice(0, 6);

  return {
    props: {
      popularShowsList,
      nowPlayingShowsList,
      topRatedShowsList,
      heroList,
    },
    revalidate: 172800,
  };
};

export default TVPage;
