import PropTypes from "prop-types";
import "./Input.css";

const Input = ({ type, onChange, value, required, name }) => {
  return (
    <input
      className="inp-cambia-color"
      type={type}
      onChange={onChange}
      value={value}
      name={name}
      required={required}
    ></input>
  );
};

export default Input;

Input.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
};
