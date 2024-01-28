
import { useEffect } from "react";
import { setCategory, setOrder, toggleStrongerVisible, toggleTypeVisible } from "../../../redux/slices/filters";
import { filterByOrigen, filterByType, orderByAttack, orderByName } from "../../../redux/slices/pokemons/pokemonsSlice";
import { useDispatch, useSelector } from "react-redux";
import { getTypes } from "../../../redux/slices/types/thunks";
import styles from "./Filters.module.scss";


export const Filters = () => {

  const { category, typeVisible, order, strongerVisible } = useSelector((state) => state.filters);
  const { types } = useSelector((state) => state.types);
  const dispatch = useDispatch();


  /* FILTERS ORIGEN */
  const handleCategoryClick = (category) => {
    dispatch(filterByOrigen(category));
    dispatch(setCategory(category));
  };



  /* FILTERS TYPE */
  const handleTypeClick = (event) => {
    const type = event.target.value;
    const selectedValue = event.target.value;
    dispatch(filterByType(type));
    dispatch(toggleTypeVisible(selectedValue));
  };



  /* ORDERS */
  const handleOrderClick = (order) => {
    dispatch(orderByName(order));
    dispatch(setOrder(order));
  };



  /* FILTER STRONGER */
  const handleStrongerClick = () => {
    dispatch(orderByAttack(!strongerVisible));
    dispatch(toggleStrongerVisible()); 
  };


  useEffect(() => {
    dispatch(getTypes());
  }, []);


  return (
    <div className={styles.container_btn}>


      <div className={styles.buttons_origen_filters}>
        <button name="all" onClick={() => handleCategoryClick('all')} className={category === 'all' ? styles.active : styles.btn}>
          All
        </button>
        <button name="created" onClick={() => handleCategoryClick('created')} className={category === 'created' ? styles.active : styles.btn}>
          Created
        </button>
        <button name="api" onClick={() => handleCategoryClick('api')} className={category === 'api' ? styles.active : styles.btn}>
          Api
        </button>
      </div>



      <div className={` ${styles.button_Types}`}>
         <select className="" onChange={handleTypeClick} value={typeVisible} >
          <option  key={0} value="all">
            AllTypes
          </option>
          {types.map((type) => (
            <option key={type.ID} value={type.name}>
              {type.name}
            </option>
          ))}
        </select>
        
      </div>


      <div className={styles.buttons_order}>
        <button onClick={() => handleOrderClick('asc')} className={order === 'asc' ? styles.active : styles.btn}>
          A-Z
        </button>
        <button onClick={() => handleOrderClick('desc')} className={order === 'desc' ? styles.active : styles.btn}>
          Z-A
        </button>
      </div>



      <div className={styles.button_stronger}>
        <button onClick={handleStrongerClick} className={strongerVisible ? styles.active : styles.btn}>
          Stronger
        </button>
      </div>


    </div>
  );
}

