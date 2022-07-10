import { createContext, useState } from "react";

export const ColorContext = createContext({
  color: {},
  setColor: () => {},
});

export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState({});

  const value = { color, setColor };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};
