import { Link } from "react-router-dom";

import { capitalizeFirstLetter } from "../../utils/capitalized";

import styles from "./Card.module.scss";
import { TypeColores } from "../TypeColores/TypeColores";
import { Card2 } from "../Card2/Card2";

export const Card = ({ id, name, images, types }) => {


  const cardUUID = (
    <div className={styles.tarjeta}>
      <div className={styles.tarjeta_img}>
        <Link to={`/pokemon/${id}`}>
          <img className={styles.tarjeta_img_size} src={images} alt={name} />
        </Link>
      </div>
      <div className={styles.tarjeta_cuerpo}>
        <p className={styles.tarjeta_cuerpo_titulo}>#{acortarCadena(id,5)}</p>
        <Link className={styles.tarjeta_cuerpo_enlace} to={`/pokemon/${id}`}>
          <h5 className={styles.tarjeta_cuerpo_enlace}>{capitalizeFirstLetter(name)}</h5>
        </Link>
        <hr />
        <div className={styles.tarjeta_cuerpo_tipos}>
          {types.map((type) => (
            <TypeColores key={type.name} typename={type.name}/>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {
        (typeof id === 'number') ?  (<Card2 id={id} name={name} images={images} types={types}/>) : cardUUID
      }
    </>
  );
};



function acortarCadena(cadena, longitudMaxima) {
  // Verificar si la cadena es más larga que la longitud máxima
  if (cadena.length > longitudMaxima) {
    // Acortar la cadena y agregar puntos suspensivos
    return cadena.substring(0, longitudMaxima) + '...';
  }
  // Si la cadena no es más larga que la longitud máxima, devolver la cadena original
  return cadena;
}
