import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ text, type }) => {
  return (
    <button className="btn-cambia-color" type={type}>
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
};
