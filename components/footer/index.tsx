import { githubLink } from '../../utils';
import ExternalLink from './ExternalLink';

const AppFooter = () => (
  <footer className="text-sm flex justify-center md:justify-end space-x-4 mt-4 pb-8">
    <ExternalLink name="View On Github" src={githubLink} />
    <ExternalLink name="Data from TMDb" src="https://developers.themoviedb.org/3" />
  </footer>
);

export default AppFooter;
