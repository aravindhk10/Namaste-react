import { useEffect, useState } from "react";
import { MENU_API } from "./urls";

const useRestaurantMenu = (resId) => {
  const [menus, setmenus] = useState(null);

  useEffect(() => {
    fetching();
  }, []);

  const fetching = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setmenus(json.data);
  };

  return menus;
};

export default useRestaurantMenu;
