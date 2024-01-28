import { useLocation, useNavigate } from "react-router-dom";
import { Search, Alert, Card } from "../../components";
import { Loading } from "../../../ui/components";
import { useForm } from "../../hooks/useForm";
import queryString from "query-string";
import styles from "./SearchPage.module.scss";

import { useGetPokemonByNameQuery } from "../../../redux/apis/pokemonApi";


export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  
  const { data:pokemonsFound = [], isFetching} = useGetPokemonByNameQuery(q);

  // Para mostrar el alert
  const showSearch = q.length === 0;
  const showError = q.length > 0 && pokemonsFound.length === 0;

  // Para controlar el formulario
  const { formState, onInputChange, onResetForm } = useForm({
    searchText: q,
  });
  const { searchText } = formState;

  // Handler metodo submit
  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText.toLowerCase().trim()}`);
    // onResetForm();
  };

  return (
    <div className={styles.container_search_page}>

      <div className={styles.container_elements}>

        <div className={styles.container_search}>
          <h2>Search</h2>
          <Search
            searchText={searchText}
            onInputChange={onInputChange}
            onSearchSubmit={onSearchSubmit}
          />
        </div>


        {
          isFetching ? <div className={styles.container_results}><Loading/></div> :
          (<div className={styles.container_results}>
            <h2>Results</h2>
            <div className="animate__animated animate__fadeIn" style={{ display: !showSearch ? 'none' : '' }}>
              <Alert type="blue" message="Search a Pokemon" />
            </div>
            <div className="animate__animated animate__fadeIn" style={{ display: !showError ? 'none' : '' }}>
              <Alert type="red" message="Not found" />
            </div>
              {
                pokemonsFound.map( pokemon => (<><Card key={pokemon.id} {...pokemon}/><br/></>) )
              }
          </div>)
        }
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};
