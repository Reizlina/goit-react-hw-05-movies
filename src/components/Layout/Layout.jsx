import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Loader from 'components/Loader';
import s from './Layout.module.css';

const getActiveStyle = ({ isActive }) => {
  return isActive ? { color: 'darkred' } : { color: 'grey' };
};

export default function Layout() {
  return (
    <>
      <nav className={s.nav}>
        <NavLink className={s.link} style={getActiveStyle} to="/home">
          Home
        </NavLink>
        <NavLink className={s.link} style={getActiveStyle} to="/movies">
          Movies
        </NavLink>
      </nav>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
