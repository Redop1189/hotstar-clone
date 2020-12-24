import { useRouter } from 'next/router';

const SearchPage = () => {
  const { query } = useRouter();

  const searchQuery = query.id as string;

  return <div>{searchQuery}</div>;
};

export default SearchPage;
