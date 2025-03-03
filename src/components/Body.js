import React, { useContext, useEffect } from "react";
import Itemlist, { Topres } from "./Itemlist";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [filteredrestaurants, setfilteredrestaurants] = useState([]);
  const [searchfilter, setsearchfilter] = useState([]);
  const [taketext, settaketext] = useState("");
  const status = useOnlineStatus();
  const { setchangename, loggedinusername } = useContext(UserContext);
  // console.log(filteredrestaurants);

  const TopRatedRestaurants = Topres(Itemlist);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const d = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9545388&lng=77.6400098&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await d.json();
    setfilteredrestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setsearchfilter(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (filteredrestaurants.length === 0) {
    return <Shimmer />;
  }

  if (!status) {
    return <h1>You Are Offline!!!!! Check you Intenet connection.....</h1>;
  }

  return (
    <div className="body">
      <div className="flex m-6 gap-2">
        <input
          className="border-black border px-2 rounded-sm"
          placeholder="search..."
          value={taketext}
          onChange={(event) => {
            settaketext(event.target.value);
          }}
        />
        <button
          className="border-black border px-2 rounded-sm"
          onClick={() => {
            let fltr = filteredrestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(taketext.toLowerCase())
            );
            setsearchfilter(fltr);
          }}
        >
          Search
        </button>

        <div className="flex gap-2">
          <button
            className="border border-black px-2 rounded-sm bg-gray-100"
            onClick={() => {
              const fltrd = filteredrestaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setsearchfilter(fltrd);
            }}
          >
            Top Rated Restaurants
          </button>
          <div className="">
            <label>ChangeUsername: </label>
            <input
              className="border-2 border-black p-1"
              value={loggedinusername}
              onChange={(e) => {
                setchangename(e.target.value);
              }}
            ></input>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        {searchfilter.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            className="restaurant-cards-links"
          >
            {restaurant.info.avgRating > 4.5 ? (
              <TopRatedRestaurants data={restaurant} />
            ) : (
              <Itemlist key={restaurant.info.id} data={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
