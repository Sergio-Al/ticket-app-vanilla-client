import React, { createContext, useState } from "react";
export const UIContext = createContext();

const UIProvider = ({ children }) => {
  const [hideMenu, setHideMenu] = useState(false);
  const showMenuValue = () => {
    setHideMenu(false);
  };

  const hideMenuValue = () => {
    setHideMenu(true);
  };
  return (
    <UIContext.Provider value={{ hideMenu, hideMenuValue, showMenuValue }}>
      {children}
    </UIContext.Provider>
  );
};

export default UIProvider;
