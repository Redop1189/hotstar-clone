import { arrowBtnClass } from '../../utils';

interface LeftArrowProps {
  shouldDisable: boolean;
  onPress: () => void;
}

const LeftArrow = ({ onPress, shouldDisable }: LeftArrowProps) => (
  <button
    title="Previous"
    aria-label="previous"
    onClick={onPress}
    disabled={shouldDisable}
    className={`${arrowBtnClass} left-0 ${shouldDisable ? 'opacity-50 cursor-not-allowed' : ''}`}
    style={{ top: 'calc(50% - 1.5rem)' }}
  >
    <svg className="w-4 h-4" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  </button>
);

export default LeftArrow;
