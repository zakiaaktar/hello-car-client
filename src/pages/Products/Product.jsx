import { Link } from "react-router-dom";

const Product = ({ product }) => {
  //console.log(product);
  //const brandName = product?.brandName;
  const { _id, brandName, name, image, description, rating } = product;



  return (
    <div className="card shadow-xl w-96 mx-auto p-4 rounded-lg border border-[#FF9209] text-center my-16">
      <div>
        <img className="rounded-lg rounded-br-[100px]" src={image} alt="" />
      </div>
      <div className="my-4 h-20">
        <h2 className="font-bold text-lg text-black mb-2">{name}</h2>
        <p className="font-semibold text-sm bg-[#FF9209] text-white w-fit rounded px-2 mx-auto my-4">
          {brandName}
        </p>
      </div>
      <Link to={`/products/${_id}`}>
        <button className="btn btn-outline bg-slate-100 border-0 border-b-4 w-2/4 mx-auto border-[#FF9209] text-black cursor-pointer mb-3">
          More Deatails...
        </button>
      </Link>
    </div>
  );
};

export default Product;
