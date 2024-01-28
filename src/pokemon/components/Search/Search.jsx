
import styles from "./Search.module.scss";


export const Search = ({ searchText, onInputChange,onSearchSubmit  }) => {

  return (
    <form className={styles.form_container} onSubmit={ onSearchSubmit }>
      <input
        type="text"
        placeholder="Search pokemons"
        className=""
        autoComplete="off"
        name="searchText"
        value={ searchText }
        onChange={ onInputChange }

        
      />
      <button type="submit" className="">
        Search
      </button>
    </form>
  );
};
