import { ITitleDetails } from '../../utils/types';
import HeroCarousel from '../carousels/HeroCarousel';
import VerticalCardCarousel from '../carousels/VerticalCardCarousel';
import MetaHead from '../MetaHead';

interface FullPageProps {
  pageLists: {
    name: string;
    dataList: ITitleDetails[];
  }[];
  pageTitle: string;
  heroList: ITitleDetails[];
}

const FullPage = ({ heroList, pageLists, pageTitle }: FullPageProps) => (
  <>
    <MetaHead pageTitle={pageTitle} />
    <HeroCarousel dataList={heroList} />
    <div className="h-10"></div>
    {pageLists.map(i => (
      <VerticalCardCarousel {...i} key={i.name} />
    ))}
  </>
);

export default FullPage;
