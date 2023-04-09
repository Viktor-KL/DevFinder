import { FC, useRef } from "react";
import styles from "./Search.module.scss";

import { ReactComponent as SearchIcon } from "assets/icon-search.svg";

interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

const Search: FC<SearchProps> = ({ hasError, onSubmit }) => {
  const searchRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const text = searchRef.current ? searchRef.current.value : "";

    if (text) {
      onSubmit(text)
      if (searchRef.current)
        searchRef.current.value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}>
          <SearchIcon />
        </label>
        <input
          type="text"
          className={styles.textField}
          id="search"
          name="username"
          placeholder="Search GitHub username..."
          ref={searchRef}
        />
        {hasError && <div className={styles.error}>No result</div>}
        <button>Search</button>
      </div>
    </form>
  );
};

export default Search;
