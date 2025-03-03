import AccordianList from "./AccordianList";

const RestaurantCategory = ({ data, setIndex, ifIndex }) => {
  return (
    <div className="m-4 w-6/12 mx-auto bg-slate-100 py-1">
      <div
        className="flex justify-between m-2 cursor-pointer "
        onClick={() => setIndex()}
      >
        <span className="font-semibold">
          {data?.card?.card.title}({data?.card?.card?.itemCards?.length})
        </span>
        <span>🔽</span>
      </div>
      <div>
        {ifIndex && (
          <div className="">
            <AccordianList data={data} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
