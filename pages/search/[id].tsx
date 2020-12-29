import { useRouter } from 'next/router';

import Gridzzz from '../../components/Gridzzz';
import { mockData } from '../../utils';

const SearchPage = () => {
  const { query } = useRouter();

  const searchQuery = query.id as string;

  return (
    <>
      <div>{searchQuery}</div>
      <Gridzzz dataList={mockData(25)} />
    </>
  );
};

export default SearchPage;
