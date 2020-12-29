import useBPValue from '../hooks/useBPValue';
import { getCardPos, textClass } from '../utils';
import { CarouselProps } from '../utils/types';
import SmallCard from './cards/SmallCard';

const Gridzzz = ({ dataList }: CarouselProps) => {
  const currentValue = useBPValue({ xs: 2, sm: 3, md: 3, lg: 4, xl: 5 });

  return (
    <>
      <p className={`${textClass} my-5`}></p>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mb-10">
        {dataList.map((i, j) => (
          <SmallCard pos={getCardPos(currentValue, j)} variant="full" titleDetails={{ ...i }} key={i.id} />
        ))}
      </div>
    </>
  );
};

export default Gridzzz;
