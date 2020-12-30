import NextHead from 'next/head';

const MetaHead = ({ pageTitle }: { pageTitle: string }) => (
  <NextHead>
    <title>Disney+ Hotstar Clone - {pageTitle}</title>
    <meta
      name="description"
      content="Disney plus Hotstar clone using NextJS, TailwindCSS and TMDB API by Vishnumohan R K"
    />
  </NextHead>
);

export default MetaHead;
