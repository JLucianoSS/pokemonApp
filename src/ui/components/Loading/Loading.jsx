
import styles from "./Loading.module.scss";

export const Loading = () => {
  return (
    <div className={styles.container_loading}>
        <img
        className={styles.loading}
        src='/assets/loading.gif'
        alt="loading"
        />
        <span style={{marginTop:'1rem'}}><b>Cargando...</b></span>
    </div>
  )
}
