import { useNewPokemon } from "../../hooks/useNewPokemon";
import { OptionTypes } from "../../components";
import { areThereErrors } from "../../utils/areThereErrors";
import styles from "./Form.module.scss";

export const Form = () => {
  const {
    newPokemon,
    errors,
    types,
    checkBox,
    handleChange,
    handleSubmit,
    cleanFields,
  } = useNewPokemon();


  return (
    <div className={styles.container_form}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.first_fields}>
            <div className={styles.first_fields__field}>
                <label>Name:</label>
                <input
                  className={styles.custom_input}
                  type="text"
                  name="name"
                  value={newPokemon.name}
                  onChange={handleChange}
                  placeholder="Name"
                />
            </div>
            {errors.name ? <p className={styles.errors}>{errors.name}</p> : <div className={styles.space}></div>}
            <div className={styles.first_fields__field}>
                <label>Image:</label>
                  <input
                    className={styles.custom_input}
                    type="text"
                    name="images"
                    value={newPokemon.images}
                    onChange={handleChange}
                    placeholder="Image:url"
                  />
            </div>
          {/* {newPokemon.images && errors.images==="" ? <img className={styles.preview_img} src={newPokemon.images} alt="preview" /> : ""} */}
        {errors.images ? <p className={styles.errors}>{errors.images}</p> : <div className={styles.space}></div>}
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <label>Hp:</label>
            <input
              className={styles.custom_input}
              type="number"
              step="1"
              name="hp"
              value={newPokemon.hp}
              onChange={handleChange}
            />
          </div>

          {errors.hp ? <p className={styles.errors}>{errors.hp}</p> : <div className={styles.space}></div>}

          <div className={styles.stat}>
            <label>Attack:</label>
            <input
              className={styles.custom_input}
              type="number"
              name="attack"
              value={newPokemon.attack}
              onChange={handleChange}
            />
          </div>

          {errors.attack ? <p className={styles.errors}>{errors.attack}</p> : <div className={styles.space}></div>}

          <div className={styles.stat}>
            <label>Defense:</label>
            <input
              className={styles.custom_input}
              type="number"
              name="defense"
              value={newPokemon.defense}
              onChange={handleChange}
            />
          </div>
          {errors.defense ? <p className={styles.errors}>{errors.defense}</p> : <div className={styles.space}></div>}

          <div className={styles.stat}>
            <label>Speed:</label>
            <input
              className={styles.custom_input}
              type="number"
              name="speed"
              value={newPokemon.speed}
              onChange={handleChange}
            />
          </div>
          {errors.speed ? <p className={styles.errors}>{errors.speed}</p> : <div className={styles.space}></div>}

          <div className={styles.stat}>
            <label>Height:</label>
            <input
              className={styles.custom_input}
              type="number"
              name="height"
              value={newPokemon.height}
              onChange={handleChange}
            />
          </div>
          {errors.height ? <p className={styles.errors}>{errors.height}</p> : <div className={styles.space}></div>}

          <div className={styles.stat}>
            <label>Weight:</label>
            <input
              className={styles.custom_input}
              type="number"
              name="weight"
              value={newPokemon.weight}
              onChange={handleChange}
            />
          </div>
          {errors.weight ? <p className={styles.errors}>{errors.weight}</p> : <div className={styles.space}></div>}
        </div>

        <OptionTypes
          newPokemon={newPokemon}
          types={types}
          checkBox={checkBox}
          handleChange={handleChange}
        />
        {errors.types ? <p className={styles.errors}>{errors.types}</p> : <div className={styles.space}></div>}

        <a className={styles.cleanLink} onClick={cleanFields}>
          Clean Fields
        </a>

        <button
          className={`${styles.createButton} ${!areThereErrors(errors) ? styles.disabledButton : ''}`}
          disabled={!areThereErrors(errors)}
          type="submit"
        >
          Create
        </button>

        <br />
      </form>
       
    </div>
  );
};
