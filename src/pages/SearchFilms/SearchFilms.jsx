import { Outlet } from 'react-router-dom';

export default function SearchFilms() {
  return (
    <div>
      <form>
        <div>
          <input
            placeholder="Let's find it!"
            type="text"
            name="search"
            autoFocus
            autoComplete="off"
            required
            width="300"
          />
          <button>Search</button>
        </div>
      </form>
      <Outlet />
    </div>
  );
}
