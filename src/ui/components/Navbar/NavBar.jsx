
import { Link, NavLink } from 'react-router-dom';
import { RiArrowGoBackFill } from "react-icons/ri";
import styles from "./NavBar.module.scss";

export const NavBar = () => {
  return (
    <nav className={styles.nav}>

      <div className={styles.barra_superior}>
        <Link className={styles.logo} to="/pokemons">
          <img src="/assets/pokedex.png" alt="logo-pokemon" />
        </Link>
        <div className={`${styles.nav__links} animate__animated animate__fadeIn`}>
          <NavLink className={ ({ isActive }) => `${styles.nav__link} ${ isActive ? styles.active : '' }`} to="/pokemons">Pokedex</NavLink>
          <NavLink className={ ({ isActive }) => `${styles.nav__link} ${ isActive ? styles.active : '' }`} to="/search">Search</NavLink>
          <NavLink className={ ({ isActive }) => `${styles.nav__link} ${ isActive ? styles.active : '' }`} to="/create-pokemon">Create</NavLink>
          <NavLink className={ ({ isActive }) => `${styles.nav__link} ${ isActive ? styles.active : '' }`} to="/about-me">About</NavLink>
        </div>
        <div className={styles.logout}>
          <Link className={styles.logout__link} to="/welcome">
            <RiArrowGoBackFill />
          </Link>
        </div>
      </div>

      <div className={styles.barra_inferior}></div>



    </nav>

  )
}
