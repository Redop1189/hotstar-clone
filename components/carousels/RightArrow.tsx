import { arrowBtnClass } from '../../utils';

interface RightArrowProps {
  shouldDisable: boolean;
  onPress: () => void;
}

const RightArrow = ({ onPress, shouldDisable }: RightArrowProps) => (
  <button
    title="Next"
    aria-label="next"
    onClick={onPress}
    disabled={shouldDisable}
    className={`${arrowBtnClass} right-0 ${shouldDisable ? 'opacity-50 cursor-not-allowed' : ''}`}
    style={{ top: 'calc(50% - 1.5rem)' }}
  >
    <svg className="w-4 h-4" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  </button>
);

export default RightArrow;
