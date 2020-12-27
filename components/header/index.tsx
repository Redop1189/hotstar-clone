import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { classFull, iconButtonClass } from '../../utils';
import AppHeading from './AppHeading';
import NavItem from './NavItem';
import SearchBar from './SearchBar';

const AppHeader = () => {
  const [value, setValue] = useState('');
  const [expandMenu, setExpandMenu] = useState(false);

  const { asPath } = useRouter();

  const toggleMenu = () => setExpandMenu(!expandMenu);

  useEffect(() => setExpandMenu(false), [asPath]);

  return (
    <header className={`${classFull} py-5 sticky top-0 bg-bgFull`} style={{ zIndex: 99 }}>
      <div className="sm:hidden w-full flex justify-between items-center relative">
        <AppHeading />
        <button aria-label="expand menu" className={iconButtonClass} onClick={toggleMenu}>
          <svg
            className="w-5 h-5 text-textHighlight"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {expandMenu ? (
          <div className="absolute top-10 w-full bg-bgFull flex flex-col space-y-2 pt-2 pb-6">
            <NavItem name="TV" />
            <NavItem name="Movies" />
            <SearchBar setValue={setValue} value={value} />
          </div>
        ) : null}
      </div>
      <div className="hidden sm:flex w-full justify-between items-center">
        <div className="flex items-center">
          <AppHeading />
          <nav>
            <NavItem name="TV" />
            <NavItem name="Movies" />
          </nav>
        </div>
        <SearchBar setValue={setValue} value={value} />
      </div>
    </header>
  );
};

export default AppHeader;
