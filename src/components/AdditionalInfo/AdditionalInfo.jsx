import { Outlet, Link, useLocation } from 'react-router-dom';

import s from './AdditionalInfo.module.css';

const AdditionalInfo = () => {
  const location = useLocation();
  return (
    <>
      <div className={s.more_info}>
        <h4>Additional information</h4>
        <ul className={s.list}>
          <li>
            <Link
              to="cast"
              state={{ from: location.state?.from }}
              className={s.link}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              to="reviews"
              state={{ from: location.state?.from }}
              className={s.link}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default AdditionalInfo;
