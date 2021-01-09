import useBPValue from '../hooks/useBPValue';
import { getCardPos } from '../utils';
import { CarouselProps } from '../utils/types';
import VerticalCard from './cards/VerticalCard';

const Gridzzz = ({ dataList }: CarouselProps) => {
  const currentValue = useBPValue({ xs: 2, sm: 3, md: 4, lg: 5, xl: 7 });

  return (
    <div className="grid gap-x-2.5 gap-y-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 mb-10 lg:mx-1">
      {dataList.map((i, j) => (
        <VerticalCard {...i} pos={getCardPos(currentValue, j)} key={i.id} />
      ))}
    </div>
  );
};

export default Gridzzz;
