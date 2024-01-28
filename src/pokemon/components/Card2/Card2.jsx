

import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../../utils/capitalized";
import { TypeColores } from "../TypeColores/TypeColores";
import styles from "./Card2.module.scss";

export const Card2 = ({ id, name, images, types }) => {
  return (
    <div className={styles.tarjeta}>
      <Link to={`/pokemon/${id}`}>
        <img className={styles.tarjeta_img} src={images} alt={name} />
      </Link>
      <div className={styles.tarjeta_cuerpo}>
        <p className={styles.tarjeta_cuerpo_titulo}>#{id}</p>
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
  )
}




/**
<div class="card" aria-hidden="true">
        <img className="placeholder " src="/pikachu.gif" class="card-img-top" alt="DSADSADS"/>
        <div class="card-body">
            <h5 class="card-title placeholder-glow">
            <span class="placeholder col-2"></span>
            </h5>
            <p className="placeholder-glow">
                <span class="placeholder col-12"></span>
                <span class="placeholder col-12"></span>
                <span class="placeholder col-6"></span>
            </p>
        </div>
    </div> 

 * 
 */