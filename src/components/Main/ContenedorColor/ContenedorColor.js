import PropTypes from "prop-types";

const ContenedorColor = ({ color }) => {
  const { name, hex } = color;
  const colorFuente = name === "White" ? "black" : "white";

  return (
    <div
      style={{
        backgroundColor: `${hex}`,
        height: "90%",
        width: "99%",
        border: "solid 2px grey",
        fontSize: "64px",
        color: `${colorFuente}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {name}
    </div>
  );
};

export default ContenedorColor;

ContenedorColor.defaultProps = {
  color: "white",
};

ContenedorColor.propTypes = {
  color: PropTypes.object,
};
