import { gridCardClass } from '../../utils';
import { ITitleDetails, TCardIndex } from '../../utils/types';
import GridCardCommon from './GridCardCommon';

interface GridCardProps extends ITitleDetails {
  pos: TCardIndex;
}

const VerticalCard = ({ pos, ...rest }: GridCardProps) => (
  <div className={`h-64 mx-1 ${gridCardClass(pos)}`}>
    <GridCardCommon {...rest} />
  </div>
);

export default VerticalCard;
