import { useRouter } from 'next/router';

import { textClass } from '../../utils';
import { SingleTitlePageProps } from '../../utils/types';
import HeroCard from '../cards/HeroCard';
import VerticalCardCarousel from '../carousels/VerticalCardCarousel';
import MetaHead from '../MetaHead';
import PagePlaceHolder from '../spinners';

interface SingleTitlePageCompProps extends SingleTitlePageProps {
  isTV: boolean;
}

const SingleTitlePage = ({ isTV, similarTitlesList, singleTitleDetails }: SingleTitlePageCompProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <PagePlaceHolder />;
  }

  const { title, description } = singleTitleDetails;

  return (
    <>
      <MetaHead pageTitle={title} />
      <HeroCard {...singleTitleDetails} />
      <div className="hidden md:block md:h-10"></div>
      <div className="my-10 mx-1 md:hidden">
        <p className={`${textClass} mb-2`}>OverView</p>
        <p>{description}</p>
      </div>
      <VerticalCardCarousel dataList={similarTitlesList} name={`Similar ${isTV ? 'Shows' : 'Movies'}`} />
    </>
  );
};

export default SingleTitlePage;
