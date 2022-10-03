export default function SearchFilms() {
  return (
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
  );
}
