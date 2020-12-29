import HeroCarousel from '../components/carousels/HeroCarousel';
import VerticalCardCarousel from '../components/carousels/VerticalCardCarousel';
import { mockData } from '../utils';

const AppHome = () => (
  <>
    <HeroCarousel dataList={mockData(5)} />
    <div className="h-10"></div>
    <VerticalCardCarousel link={{ name: 'Popular Movies', src: '/' }} dataList={mockData(21)} />
    <VerticalCardCarousel link={{ name: 'Popular Movies', src: '/' }} dataList={mockData(21)} />
    <VerticalCardCarousel link={{ name: 'Popular Movies', src: '/' }} dataList={mockData(21)} />
    <VerticalCardCarousel link={{ name: 'Popular Movies', src: '/' }} dataList={mockData(21)} />
  </>
);

export default AppHome;
