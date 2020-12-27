import { ITitleDetails } from '../../utils/types';

const HeroCard = ({ categories, description, imgSrc, title, year }: ITitleDetails) => (
  <div className="flex w-full h-64 md:h-72 lg:h-96 bg-bg3 relative rounded-md group">
    <div className="w-full md:w-45% absolute md:static bottom-0 flex flex-col md:my-8 lg:my-16 py-4 md:py-0 px-4 md:px-8 lg:px-10 space-y-1 md:space-y-4 text-textNormal transition-opacity duration-200 ease-in-out opacity-0 md:opacity-100 group-hover:opacity-100 bg-gradient-to-t from-bg2 md:from-transparent via-bg2 md:via-transparent to-transparent rounded-md">
      <p className="text-2xl lg:text-3xl font-bold text-textHighlight">{title}</p>
      <p>
        {categories.slice(0, 3).join(', ')}
        &nbsp;&nbsp;&#8226;&nbsp;&nbsp;
        {year}
      </p>
      <p className="clampedLine clampedLine2">{description}</p>
    </div>
    <div className="hidden md:block w-64 h-full absolute right-heroCardGradientWidth top-0 bg-gradient-to-r from-bg3 to-transparent"></div>
    <img className="w-full md:w-55% object-cover rounded-md" src={imgSrc} alt={title} />
  </div>
);

export default HeroCard;
