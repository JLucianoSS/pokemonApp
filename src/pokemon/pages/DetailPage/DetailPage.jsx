
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Loading } from "../../../ui";
import { useGetPokemonByIdQuery } from "../../../redux/apis";
import { capitalizeFirstLetter } from "../../utils/capitalized";
import { StatBar, TypeColores } from "../../components";
import styles from "./Detail.module.scss";




export const DetailPage = () => {

  const { id } = useParams();
  const { data:pokemon = {}, isLoading } = useGetPokemonByIdQuery( id );
  const navigate = useNavigate();
  

  if ( !pokemon ){
    return <Navigate to='/pokemons'/> 
  }
  const onNavigateback = () => {
    navigate(-1);
  }


  return (
    <>
      {
        isLoading ? <Loading/> : (
          <div className={styles.containerDetail}>

            <div className={styles.detail_img}>
                <img 
                    className="card-img img-thumbnail animate__animated animate__fadeInLeft"
                    src={pokemon.images}
                    alt={ pokemon.name } 
                    />
            </div>

            <div className={`bg-white ${styles.detail_features}`}>
                
                <div className={styles.container_basic_stats}>
                  <h3 className={` ${styles.detail_title}`}>{ capitalizeFirstLetter(pokemon.name) }</h3>
                  <span>#{pokemon.id}</span>
                  <div>
                    {pokemon.types.map((p) => (
                      <TypeColores key={p.name} typename={p.name}/>
                    ))}
                  </div>

                  <div className={`${styles.container_info} animate__animated animate__fadeInLeft`}>
                    <h1 className="fs-4">Basic Stats </h1>
                    <div className={styles.container_stats}>
                      <h3>Hp:</h3>
                      <div className={styles.stat}>
                        <StatBar stat={pokemon.hp} />
                        <p>{pokemon.hp}</p>
                      </div>
                      <h3>Attack:</h3>
                      <div className={styles.stat}>
                        <StatBar stat={pokemon.attack} />
                        <p>{pokemon.attack}</p>
                      </div>
                      <h3>Defense:</h3>
                      <div className={styles.stat}>
                        <StatBar stat={pokemon.defense} />
                        <p>{pokemon.defense}</p>
                      </div>
                      <h3>Speed:</h3>
                      <div className={styles.stat}>
                        <StatBar stat={pokemon.speed} />
                        <p>{pokemon.speed}</p>
                      </div>
                    </div>
                  </div>

                </div>

                <div className={styles.btn_back_and_more}>
                  <div className={styles.container_features}>
                    <h3>Height: {pokemon.height / 10}m</h3>
                    <h3>Weight: {pokemon.weight / 10}kg</h3>
                  </div>
                  <button
                      className="btn btn-outline-primary"
                      onClick={ onNavigateback }
                  >
                      Go Back
                  </button>
                </div>

            </div>
          </div>
        )
      }
    
      
    </>
  )
}
