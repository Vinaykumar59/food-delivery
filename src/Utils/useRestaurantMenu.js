import { useState, useEffect } from "react";
import { RES_MENU_URL } from "./constants";

const useRestaurantMenu = (id) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchDataResMenu();
  }, []);

  const fetchDataResMenu = async () => {
    console.log("fetch data called outside");
    try {
      const data = await fetch(
        "https://thingproxy.freeboard.io/fetch/" +
          encodeURIComponent(
            RES_MENU_URL +
              id +
              "&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
          )
      );

      const json = await data.json();
      setResInfo(json);
    } catch (error) {
      console.log("error", error);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
