import { NavLink, Outlet } from 'react-router-dom';

const getActiveStyle = ({ isActive }) => {
  return isActive ? { color: 'darkred' } : { color: 'darkblue' };
};

export default function Layout() {
  return (
    <>
      <nav>
        <NavLink style={getActiveStyle} to="/home">
          Home
        </NavLink>
        <NavLink style={getActiveStyle} to="/movies">
          Movies
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
