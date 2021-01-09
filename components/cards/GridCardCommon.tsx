import NextImage from 'next/image';

import { ITitleDetails } from '../../utils/types';

const GridCardCommon = ({ categories, description, title, posterImg }: ITitleDetails) => (
  <>
    <NextImage layout="fill" className="h-full object-cover rounded-md" src={posterImg} alt={title} />
    <div className="absolute bottom-0 w-full h-1/2 rounded-md text-xs transition-opacity opacity-0 group-hover:opacity-100 bg-gradient-to-t from-bg2 via-bg2 to-transparent">
      <div className="absolute bottom-0 z-20 flex flex-col space-y-1 text-xs w-full p-4">
        <p className="font-bold text-textHighlight">{title}</p>
        <p className="text-textHighlight">{categories.slice(0, 3).join(', ')}</p>
        <p className="line-clamp-2">{description}</p>
      </div>
    </div>
  </>
);

export default GridCardCommon;
