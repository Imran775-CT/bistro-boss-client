const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl relative">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-2 px-2">{price}$</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>

        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline mt-2 border-0 border-b-4 bg-slate-100">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
