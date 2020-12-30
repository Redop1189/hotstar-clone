/* eslint-disable jsx-a11y/anchor-is-valid */
import NextLink from 'next/link';

import { ITitleDetails } from '../../utils/types';

const HeroCard = ({ categories, description, coverImg, title, year, id, mediaType }: ITitleDetails) => (
  <NextLink href={`/${mediaType}/${id}`}>
    <a tabIndex={-1} className="flex w-full h-64 md:h-72 lg:h-96 mx-1 bg-bg3 relative rounded-md group">
      <div className="w-full md:w-45% absolute md:static bottom-0 flex flex-col md:my-8 lg:my-16 py-4 md:py-0 px-4 md:px-8 lg:px-10 md:space-y-4 text-textNormal bg-gradient-to-t from-bg2 md:from-transparent md:via-transparent to-transparent rounded-md">
        <p className="text-lg md:text-xl lg:text-3xl font-bold text-textHighlight">{title}</p>
        <p className="text-sm lg:text-base">
          {categories.slice(0, 3).join(', ')}
          &nbsp;&nbsp;&#8226;&nbsp;&nbsp;
          {year}
        </p>
        <p className="clampedLine clampedLine2 text-sm lg:text-base hidden md:block">{description}</p>
      </div>
      <div className="hidden md:block w-64 h-full absolute right-heroCardGradientWidth top-0 bg-gradient-to-r from-bg3 to-transparent"></div>
      <img className="w-full md:w-55% object-cover rounded-md" src={coverImg} alt={title} loading="lazy" />
    </a>
  </NextLink>
);

export default HeroCard;
