/* eslint-disable jsx-a11y/anchor-is-valid */
import NextLink from 'next/link';

const Header = () => (
  <header className="sticky top-0 flex max-w-screen-xl p-4 mx-auto bg-bgPrimary">
    <NextLink href="/">
      <a className="text-2xl font-bold text-textSecondary">Movies App</a>
    </NextLink>
  </header>
);

export default Header;
