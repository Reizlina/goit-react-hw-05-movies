import s from './Button.module.css';

const Button = ({ navigater, location }) => {
  return (
    <button type="button" className={s.btn} onClick={() => navigater(location)}>
      &#10094; Go back
    </button>
  );
};
export default Button;
