import { arrowBtnClass } from '../../utils';

interface LeftArrowProps {
  onPress: () => void;
}

const LeftArrow = ({ onPress }: LeftArrowProps) => (
  <button
    aria-label="previous"
    onClick={onPress}
    className={`${arrowBtnClass} left-0 ml-1`}
    style={{ top: 'calc(50% - 1.5rem)' }}
  >
    <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  </button>
);

export default LeftArrow;
