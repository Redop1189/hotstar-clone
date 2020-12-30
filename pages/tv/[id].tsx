import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import SingleTitlePage from '../../components/pageReuse/SingleTitlePage';
import { oneShow, similarShows } from '../../utils/apiResp';
import { SingleTitlePageProps } from '../../utils/types';

const SingleTVShow = (props: InferGetStaticPropsType<typeof getStaticProps>) => (
  <SingleTitlePage isTV={true} {...props} />
);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: '87739' } }, { params: { id: '82856' } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<SingleTitlePageProps> = async ({ params }) => {
  const id = params?.id as string;

  const singleTitleDetails = await oneShow(id);
  const similarTitlesList = await similarShows(id);

  return {
    props: {
      singleTitleDetails,
      similarTitlesList,
    },
  };
};

export default SingleTVShow;
