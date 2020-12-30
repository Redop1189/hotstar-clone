import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import SingleTitlePage from '../../components/pageReuse/SingleTitlePage';
import { oneMovie, similarMovies } from '../../utils/apiResp';
import { SingleTitlePageProps } from '../../utils/types';

const SingleMovie = (props: InferGetStaticPropsType<typeof getStaticProps>) => (
  <SingleTitlePage isTV={false} {...props} />
);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: '464052' } }, { params: { id: '363088' } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<SingleTitlePageProps> = async ({ params }) => {
  const id = params?.id as string;

  const singleTitleDetails = await oneMovie(id);
  const similarTitlesList = await similarMovies(id);

  return {
    props: {
      singleTitleDetails,
      similarTitlesList,
    },
  };
};

export default SingleMovie;
