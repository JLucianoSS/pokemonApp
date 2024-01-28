import { Link } from "react-router-dom";
import styles from "./Welcome.module.css";


export const WelcomePage = () => {
  return (
    <>
      <div className={`${styles.container_welcome} ${styles.cursor_aura}`}>
      <img className={styles.title_pokedex} src='assets/pokedex.png' alt="pokedex"></img>
        <Link to="/home">
          <button className={styles.animated_button} type="button">
            Entrar
          </button>
        </Link>
      </div>
    </>
  );
};
