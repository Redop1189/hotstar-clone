import { arrowBtnClass } from '../../utils';

interface RightArrowProps {
  onPress: () => void;
}

const RightArrow = ({ onPress }: RightArrowProps) => (
  <button
    aria-label="next"
    onClick={onPress}
    className={`${arrowBtnClass} right-0 mr-1`}
    style={{ top: 'calc(50% - 1.5rem)' }}
  >
    <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  </button>
);

export default RightArrow;
