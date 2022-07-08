import PropTypes from "prop-types";

const ContenedorColor = ({ color }) => {
  return (
    <div
      style={{
        backgroundColor: `${color}`,
        height: "90%",
        width: "99%",
        border: "solid 2px grey",
      }}
    ></div>
  );
};

export default ContenedorColor;

ContenedorColor.defaultProps = {
  color: "white",
};

ContenedorColor.propTypes = {
  color: PropTypes.string,
};
