import { useRouter } from 'next/router';

import { ITitleDetails } from '../../utils/types';
import ExternalLink from '../footer/ExternalLink';

const HeroCard = ({ categories, description, coverImg, title, year }: ITitleDetails) => {
  const { route } = useRouter();

  return (
    <div className="flex w-full h-64 md:h-72 lg:h-96 bg-bg3 relative rounded-md group focus:outline-none">
      <div className="w-full md:w-45% absolute md:static bottom-0 flex flex-col md:my-8 lg:my-12 xl:my-14 py-4 md:py-0 px-4 md:px-8 lg:px-10 md:space-y-4 text-textNormal bg-gradient-to-t from-bg2 md:from-transparent md:via-transparent to-transparent rounded-md">
        <p className="text-lg md:text-xl lg:text-3xl font-bold text-textHighlight">{title}</p>
        <p className="text-sm lg:text-base">
          {categories.slice(0, 3).join(', ')}
          &nbsp;&nbsp;&#8226;&nbsp;&nbsp;
          {year}
        </p>
        <p className="line-clamp-none md:line-clamp-4 text-sm lg:text-base hidden md:block">{description}</p>
        {route.includes('/[id]') ? (
          <div className="hidden lg:block absolute lg:bottom-12 xl:bottom-14 text-sm w-max">
            <ExternalLink name="Search on Google" src={`https://www.google.com/search?query=${title} ${year}`} />
          </div>
        ) : null}
      </div>
      <div className="hidden md:block w-64 h-full absolute right-heroCardGradientWidth top-0 bg-gradient-to-r from-bg3 to-transparent"></div>
      <img className="w-full md:w-55% object-cover rounded-md" src={coverImg} alt={title} loading="lazy" />
    </div>
  );
};

export default HeroCard;
