import { useContext, useEffect } from "react";
import { UIContext } from "../context/UIContext";

const useHideMenu = (hideValue) => {
  const { showMenuValue, hideMenuValue } = useContext(UIContext);
  useEffect(() => {
    if (hideValue) {
      hideMenuValue();
    } else {
      showMenuValue();
    }
  }, [hideMenuValue, showMenuValue, hideValue]);
  return;
};

export default useHideMenu;
