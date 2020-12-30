import { useRouter } from 'next/router';

import { textClass } from '../../utils';

const SearchPage = () => {
  const { query } = useRouter();

  const searchQuery = query.id as string;

  return (
    <div className={`${textClass} text-textNormal`}>
      <p>Search Query: {searchQuery}</p>
      <p>Coming Soon</p>
    </div>
  );
};

export default SearchPage;
