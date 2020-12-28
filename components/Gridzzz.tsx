import useCardCount from '../hooks/useCardCount';
import { demoTitle, textClass } from '../utils';
import SmallCard from './cards/SmallCard';

const Gridzzz = () => {
  const { pos } = useCardCount({ xs: 2, sm: 3, md: 3, lg: 4, xl: 5 });

  return (
    <>
      <p className={`${textClass} my-5`}></p>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mb-10">
        {Array(25)
          .fill(0)
          .map((_, j) => (
            <SmallCard pos={pos(j)} variant="full" titleDetails={{ ...demoTitle }} key={j} />
          ))}
      </div>
    </>
  );
};

export default Gridzzz;
