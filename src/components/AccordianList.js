import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/urls";
import { additem } from "../utils/cartSlice";
const AccordianList = ({ data }) => {
  console.log(data);
  const dispatch = useDispatch();
  const handleAdd = (food) => {
    dispatch(additem(food));
  };
  return (
    <div>
      {data?.card?.card.itemCards.map((food) => {
        return (
          <div
            key={food.card.info.id}
            className="mx-4 p-4 my-10 text-left flex justify-between items-center border-b-2 border-white shadow-lg"
          >
            <div className="">
              <span className="font-semibold">{food.card.info.name}</span>
              <p className="font-semiboldc mt-1">
                ₹
                {food.card.info.price
                  ? food.card.info.price / 100
                  : food.card.info.defaultPrice / 100}
              </p>
              <p className="max-w-md mt-1">{food.card.info.description}</p>
            </div>
            <div>
              <span
                className="rounded-md bg-black text-white shadow-lg cursor-pointer py-1 px-4 absolute hover:border-2 "
                onClick={() => handleAdd(food)}
              >
                Add
              </span>
              <img
                className="w-44 rounded-md"
                src={CDN_URL + food.card.info.imageId}
              ></img>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AccordianList;
