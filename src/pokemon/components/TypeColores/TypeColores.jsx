import styles  from './TypeColores.module.scss'

export const TypeColores = ({ typename }) => {

  const typeColors = {
    normal: "Gainsboro",
    fighting: "Darkred",
    flying: "Skyblue",
    poison: "Mediumpurple",
    ground: "BurlyWood",
    rock: "Peru",
    bug: "YellowGreen",
    ghost: "Purple",
    steel: "Silver",
    fire: "Firebrick",
    water: "RoyalBlue",
    grass: "Limegreen",
    electric: "Gold",
    psychic: "Violet",
    ice: "AquaMarine",
    dragon: "MediumSlateBlue",
    dark: "SlateGray",
    fairy: "rgb(255, 136, 238)",
    unknown: "white",
    shadow: "brown",
  };


  const setColor = (typename) => {
    return {
      background: typeColors[typename] || "white",
    };
  }

  return <span className={styles.color_type} style={setColor(typename)}>{typename}</span>;

};
