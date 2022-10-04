import PropTypes from 'prop-types';

import s from './Button.module.css';

const Button = ({ navigate, location }) => {
  return (
    <button type="button" className={s.btn} onClick={() => navigate(location)}>
      &#10094; Go back
    </button>
  );
};
export default Button;

Button.propTypes = {
  navigate: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
};
