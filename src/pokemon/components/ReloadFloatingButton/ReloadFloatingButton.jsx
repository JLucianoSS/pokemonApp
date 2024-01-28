import { useDispatch } from "react-redux";
import { getPokemons } from "../../../redux/slices/pokemons/thunks";
import { IoReload } from "react-icons/io5";


import styles from "./ReloadFloatingButton.module.scss";

export const ReloadFloatingButton = () => {

  const dispatch = useDispatch();

  const onClickReload = () => {
    dispatch(getPokemons());
  };

  return (
    <button onClick={onClickReload} className={styles.float}>
      <IoReload />

    </button>
  );
};
