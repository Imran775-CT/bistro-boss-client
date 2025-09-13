import cardImg1 from '../../../assets/shop/banner2.jpg'
import cardImg2 from '../../../assets/reservation/category-pizza.jpg'
import cardImg3 from '../../../assets/home/featured.jpg'
const ProductCards = () => {
  const products = [
    {
      id: 1,
      title: "Product One",
      desc: "This is a short description of product one.",
      price: "$25",
      img: cardImg1, // আপনার লোকাল ইমেজও দিতে পারেন
    },
    {
      id: 2,
      title: "Product Two",
      desc: "This is a short description of product two.",
      price: "$30",
      img: cardImg2,
    },
    {
      id: 3,
      title: "Product Three",
      desc: "This is a short description of product three.",
      price: "$40",
      img: cardImg3,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col md:flex-row bg-white shadow-lg rounded-2xl overflow-hidden"
        >
          {/* Image (60%) */}
          <div className="md:w-3/5 w-full">
            <img
              src={product.img}
              alt={product.title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Content (40%) */}
          <div className="md:w-2/5 w-full p-4 flex flex-col justify-between items-center">
            <div>
              <h2 className="text-xl font-bold mb-2">{product.title}</h2>
              <p className="text-gray-600 mb-2">{product.desc}</p>
              <p className="text-lg font-semibold text-gray-800">{product.price}</p>
            </div>
            <button className="btn btn-outline mt-2 border-0 border-b-4 bg-slate-100">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
