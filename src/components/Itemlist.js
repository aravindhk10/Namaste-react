import React, { useContext } from "react";
import { CDN_URL } from "../utils/urls";
import UserContext from "../utils/UserContext";

const Itemlist = (props) => {
  const { data } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    data?.info;
  const { loggedinusername } = useContext(UserContext);
  return (
    <div className="m-4 p-4 w-64 hover:border border-black hover:bg-slate-100 rounded-md">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt={name}
        className={"rounded-md"}
      />
      <div className="card-content">
        <h3 className="font-bold my-2 text-center">{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <p>{avgRating} Stars</p>
        <p>{sla?.deliveryTime}mins</p>
        <p>{costForTwo}</p>
        <p>User: {loggedinusername}</p>
      </div>
    </div>
  );
};

//higher order component
export const Topres = (Itemlist) => {
  return (props) => {
    return (
      <div>
        <label className="absolute font-semibold text-white bg-black ml-4 rounded-sm p-1 border-none">
          Top Rated
        </label>
        <Itemlist {...props} />
      </div>
    );
  };
};

export default Itemlist;
