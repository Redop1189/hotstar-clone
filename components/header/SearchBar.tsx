import { useRouter } from 'next/router';

import { githubLink, iconButtonClass } from '../../utils';

interface SearchBarProps {
  value: string;
  setValue: (val: string) => void;
}

const SearchBar = ({ setValue, value }: SearchBarProps) => {
  const router = useRouter();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value) router.push({ pathname: `/search/${value.toLowerCase()}` });
    setValue('');
  };

  return (
    <div className="flex items-center w-full sm:w-auto">
      <form className="w-full" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search"
          value={value}
          onChange={handleInput}
          aria-label="search"
          className="transition-width w-full md:w-60 md:focus:w-80 lg:focus:w-96 py-1.5 focus:border-accent bg-bgFull border-b-2 border-inputBorder placeholder-inputPlaceholder focus:outline-none"
        />
      </form>
      <a
        aria-label="View On GitHub"
        title="View On GitHub"
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className={iconButtonClass}
      >
        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      </a>
    </div>
  );
};

export default SearchBar;
