import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';

import Gridzzz from '../../components/Gridzzz';
import MetaHead from '../../components/MetaHead';
import CardSpinner from '../../components/spinners/CardSpinner';
import { textClass } from '../../utils';
import { search } from '../../utils/apiResp';
import { ITitleDetails } from '../../utils/types';

const SearchPage = ({ dataList }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { query, isFallback } = useRouter();

  if (isFallback) {
    return <CardSpinner />;
  }

  const searchQuery = query.id as string;

  const term = `Search results for ${searchQuery}`;

  return (
    <>
      <MetaHead pageTitle={term} />
      <p className={`${textClass} mt-2 mb-6 lg:mx-1`}>{term}</p>
      <Gridzzz dataList={dataList} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'loki' } }, { params: { id: 'avengers' } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<{ dataList: ITitleDetails[] }> = async ({ params }) => {
  const dataList = await search(params?.id as string);

  return {
    props: {
      dataList,
    },
  };
};

export default SearchPage;
