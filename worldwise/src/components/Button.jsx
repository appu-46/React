import styles from "./Button.module.css";
import PropTypes from "prop-types";

Button.propTypes = {
  children: PropTypes.object,
  onClick: PropTypes.object,
  type: PropTypes.string,
};

function Button({ children, onClick, type }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;
