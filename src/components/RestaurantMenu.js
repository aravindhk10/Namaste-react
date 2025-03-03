import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menu = useRestaurantMenu(resId);
  const { name, city, locality, cuisines, costForTwoMessage } =
    menu?.cards[2]?.card?.card?.info || {};
  const menuList =
    menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.carousel || {};
  // console.log(menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const CatogeryFiltr =
    menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(CatogeryFiltr);

  const [index, setindex] = useState();
  return menu === null ? (
    <Shimmer />
  ) : (
    <div className="text-center m-3 p-3">
      <h2 className="font-bold text-lg">{name}</h2>
      <p>
        {locality}, {city}
      </p>
      <p>{costForTwoMessage}</p>
      <p>{cuisines.join(", ")}</p>

      <h3 className="font-semibold mt-5">Menu</h3>
      <div>
        {CatogeryFiltr.map((category, indx) => (
          <RestaurantCategory
            data={category}
            key={category?.card?.card?.categoryId}
            ifIndex={indx === index ? true : false}
            setIndex={() => setindex(indx === index ? null : indx)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
