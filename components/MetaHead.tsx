import NextHead from 'next/head';

const MetaHead = ({ pageTitle }: { pageTitle: string }) => (
  <NextHead>
    <title>{pageTitle} - Hotstar Clone</title>
    <meta
      name="description"
      content="Disney plus Hotstar clone using NextJS, TailwindCSS and TMDB API by Vishnumohan R K"
    />
  </NextHead>
);

export default MetaHead;
