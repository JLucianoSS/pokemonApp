
import styles from "./Alert.module.scss";

export const Alert = ({ type, message }) => {
  const alertClass = type === 'blue' ? styles.blueAlert : styles.redAlert;

  return (
    <div className={`${styles.alertContainer} ${alertClass}`}>
      {message}
    </div>
  );
};

