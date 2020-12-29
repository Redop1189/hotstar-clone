import HeroCarousel from '../components/carousels/HeroCarousel';
import VerticalCardCarousel from '../components/carousels/VerticalCardCarousel';
import { mockData } from '../utils';

const AppHome = () => (
  <>
    <HeroCarousel dataList={mockData(5)} />
    <div className="h-10"></div>
    <VerticalCardCarousel name="Popular Movies" dataList={mockData(21)} />
    <VerticalCardCarousel name="Popular Shows" dataList={mockData(21)} />
    <VerticalCardCarousel name="Top Rated Movies" dataList={mockData(21)} />
    <VerticalCardCarousel name="Top Rated Shows" dataList={mockData(21)} />
  </>
);

export default AppHome;
