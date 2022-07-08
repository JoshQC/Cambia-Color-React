import { useContext } from "react";

import ContenedorColor from "./ContenedorColor/ContenedorColor";
import FormularioCambiaColor from "./FormularioCambiaColor/FormularioCambiaColor";
import { ColorContext } from "../../contexts/color";

const Main = () => {
  const { color } = useContext(ColorContext);

  return (
    <div style={{ width: "500px", height: "500px" }}>
      <ContenedorColor color={color} />
      <FormularioCambiaColor />
    </div>
  );
};

export default Main;
