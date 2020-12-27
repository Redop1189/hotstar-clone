import { ITitleDetails } from '../../utils/types';

interface GridCardProps extends ITitleDetails {
  pos: 'first' | 'middle' | 'last';
}

const VerticalCard = ({ categories, description, imgSrc, title, pos }: GridCardProps) => (
  <div
    className={`relative z-10 hover:z-40 group h-64 bg-bg2 rounded-md transform transition-transform duration-300 ease-in-out lg:hover:scale-125 ${
      pos === 'first' ? 'lg:hover:translate-x-11%' : pos === 'last' ? 'lg:hover:-translate-x-12%' : ''
    }`}
  >
    <img className="h-full object-cover rounded-md" src={imgSrc} alt={title} />
    <div className="absolute bottom-0 w-full h-1/2 rounded-md text-xs transition-opacity opacity-0 group-hover:opacity-100 bg-gradient-to-t from-bg2 via-bg2 to-transparent">
      <div className="absolute bottom-0 z-20 flex flex-col space-y-1 text-xs w-full p-4">
        <p className="font-bold text-textHighlight">{title}</p>
        <p className="text-textHighlight">{categories.slice(0, 3).join(', ')}</p>
        <p className="clampedLine">{description}</p>
      </div>
    </div>
  </div>
);

export default VerticalCard;
