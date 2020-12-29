import { classFull, githubLink } from '../../utils';
import ExternalLink from './ExternalLink';

const AppFooter = () => (
  <footer className={`${classFull} text-sm flex justify-center md:justify-end space-x-4 mt-4 pb-8`}>
    <ExternalLink name="View On Github" src={githubLink} />
    <ExternalLink name="Powered by TMDB" src="https://developers.themoviedb.org/3" />
  </footer>
);

export default AppFooter;
