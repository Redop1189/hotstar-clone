import { demoTitle, textClass } from '../utils';
import SmallCard from './cards/SmallCard';

const Gridzzz = () => {
  return (
    <>
      <p className={`${textClass} my-5`}></p>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mb-10">
        {Array(25)
          .fill(0)
          .map((_, j) => (
            <SmallCard pos="middle" variant="full" titleDetails={{ ...demoTitle }} key={j} />
          ))}
      </div>
    </>
  );
};

export default Gridzzz;
