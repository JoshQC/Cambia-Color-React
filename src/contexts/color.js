import { createContext, useState } from "react";

export const ColorContext = createContext({
  color: null,
  setColor: () => null,
});

export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState(null);
  const value = { color, setColor };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};
