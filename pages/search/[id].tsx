import { useRouter } from 'next/router';

import Gridzzz from '../../components/Gridzzz';

const SearchPage = () => {
  const { query } = useRouter();

  const searchQuery = query.id as string;

  return (
    <>
      <div>{searchQuery}</div>
      <Gridzzz />
    </>
  );
};

export default SearchPage;
