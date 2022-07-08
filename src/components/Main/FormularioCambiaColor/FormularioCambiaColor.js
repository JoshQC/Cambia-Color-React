import { useState, useContext } from "react";

import Input from "../../../layout/Input/Input";
import Button from "../../../layout/Button/Button";
import { ColorContext } from "../../../contexts/color";

const FormularioCambiaColor = () => {
  const [value, setValue] = useState("");
  const { setColor } = useContext(ColorContext);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setColor(value.toLowerCase());
  };

  return (
    <form style={{ width: "100%", height: "10%" }} onSubmit={handleOnSubmit}>
      <Input
        onChange={handleOnChange}
        type={"text"}
        name={"color"}
        value={value}
        required={true}
      />
      <Button type={"submit"} text="Cambiar" />
    </form>
  );
};

export default FormularioCambiaColor;
