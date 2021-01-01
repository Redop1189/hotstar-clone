import { arrowBtnClass } from '../../utils';

interface RightArrowProps {
  direction: 'Previous' | 'Next';
  shouldDisable: boolean;
  onPress: () => void;
}

const ArrowBtn = ({ onPress, shouldDisable, direction }: RightArrowProps) => (
  <button
    title={direction}
    aria-label={direction}
    onClick={onPress}
    disabled={shouldDisable}
    className={`${arrowBtnClass} ${direction === 'Next' ? 'right-0' : 'left-0'} ${
      shouldDisable ? 'opacity-50 cursor-not-allowed' : ''
    }`}
    style={{ top: 'calc(50% - 1.5rem)' }}
  >
    <svg
      className={`w-4 h-4 transform ${direction === 'Previous' ? 'rotate-180' : ''}`}
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  </button>
);

export default ArrowBtn;
