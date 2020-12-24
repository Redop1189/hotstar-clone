/* eslint-disable jsx-a11y/anchor-is-valid */
import NextLink from 'next/link';

interface NavItemProps {
  name: 'TV' | 'Movies';
}

const NavItem = ({ name }: NavItemProps) => (
  <NextLink href={`/${name.toLowerCase()}`}>
    <a className="text-lg hover:text-textHighlight font-semibold tracking-wide sm:mr-5">{name}</a>
  </NextLink>
);

export default NavItem;
