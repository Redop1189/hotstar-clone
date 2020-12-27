import { gridCardClass, textClass } from '../../utils';
import { ITitleDetails, TCardIndex } from '../../utils/types';
import GridCardCommon from './GridCardCommon';

interface SmallCardProps {
  variant: 'small' | 'full';
  pos: TCardIndex;
  text?: string;
  titleDetails?: ITitleDetails;
}

const SmallCard = ({ variant, titleDetails, text, pos }: SmallCardProps) => (
  <div
    className={`${gridCardClass(pos)} h-32 md:h-48 ${
      variant === 'small' ? 'border border-inputBorder' : ''
    } flex justify-center items-center`}
  >
    {variant === 'full' && titleDetails ? <GridCardCommon {...titleDetails} /> : <p className={textClass}>{text}</p>}
  </div>
);

export default SmallCard;
