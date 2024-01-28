import style from "./OptionTypes.module.scss";

export const OptionTypes = ({ newPokemon, types, checkBox, handleChange }) => {
  return (
    <>
      <label>Types:</label>
      <div className={style.container_options}>
        {types.map((type) => (
          <>
            <div className={style.label}>
              <label
                className={`${
                  !checkBox && !newPokemon.types.includes(type.ID)
                    ? style.label_disable
                    : ""
                }`}
                key={type.ID}
              >
                <input
                  className={style.checkboxLabel}
                  type="checkbox"
                  name={type.name}
                  value={type.ID}
                  onChange={handleChange}
                  checked={newPokemon.types.includes(type.ID)}
                  disabled={!checkBox && !newPokemon.types.includes(type.ID)}
                />
                {type.name}
              </label>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
