import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/urls";
import { clearcart } from "../utils/cartSlice";

const Cart = () => {
  cartitems = useSelector((store) => store.cart.items);
  console.log(cartitems);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearcart());
  };
  return (
    <div className="m-5 p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Cart</h1>
      <span
        onClick={handleClearCart}
        className="rounded-md bg-black text-white cursor-pointer mt-5 p-2 border-none shadow-md"
      >
        Clear Cart 🗑️
      </span>
      {cartitems.length === 0 && (
        <h1 className="text-3xl mt-28 font-semibold">
          Cart is Empty, Add items to cart
        </h1>
      )}
      <div className="w-6/12 mx-auto">
        {cartitems.map((item) => {
          return (
            <div
              key={item.card.info.id}
              className="mx-4 p-4 my-10 text-left flex justify-between items-center border-b-2 border-white shadow-lg"
            >
              <div className="">
                <span className="font-semibold">{item.card.info.name}</span>
                <p className="font-semiboldc mt-1">
                  ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </p>
                <p className="max-w-md mt-1">{item.card.info.description}</p>
              </div>
              <div>
                {/* instead remove each item */}
                {/* <span
                  className="rounded-md bg-red-700 text-white shadow-lg cursor-pointer py-1 px-4 absolute hover:border-2 "
                  onClick={() => handleRemove(food)}
                >
                  Remove
                </span> */}
                <img
                  className="w-44 rounded-md"
                  src={CDN_URL + item.card.info.imageId}
                ></img>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
