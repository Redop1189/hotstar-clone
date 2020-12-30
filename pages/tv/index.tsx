import { InferGetStaticPropsType } from 'next';

import HeroCarousel from '../../components/carousels/HeroCarousel';
import VerticalCardCarousel from '../../components/carousels/VerticalCardCarousel';
import MetaHead from '../../components/MetaHead';
import { nowPlayingShows, popularShows, topRatedShows } from '../../utils/apiResp';

const TVPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { heroList, nowPlayingShowsList, popularShowsList, topRatedShowsList } = props;

  return (
    <>
      <MetaHead pageTitle="TV" />
      <HeroCarousel dataList={heroList} />
      <div className="h-10"></div>
      <VerticalCardCarousel name="Now Playing" dataList={nowPlayingShowsList} />
      <VerticalCardCarousel name="Popular TV" dataList={popularShowsList} />
      <VerticalCardCarousel name="Top Rated TV" dataList={topRatedShowsList} />
    </>
  );
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
  };
};

export default TVPage;
