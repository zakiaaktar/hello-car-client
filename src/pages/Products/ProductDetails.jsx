import { useLoaderData } from "react-router-dom";


const ProductDetails = () => {
    const data = useLoaderData();
    console.log(data);
    const { _id, brandName, name, image, description, rating, price } = data;



    return (
        <>
         

      <div className="w-11/12 lg:w-1/2 shadow-xl mt-14 mx-auto rounded-lg">
        <div>
          <img className="w-full text-center" src={image} alt="product-img" />
        </div>
        <div className="card-body text-center">
          <h2 className="lg:text-2xl text-white bg-[#FF9209] font-bold">{name}</h2>
          <p className="">Featured: {description}</p>
          <p className="text-xl text-[#FF9209] font-bold text-semibold">
            Price: {price} Crore
          </p>
          <div className="mt-4">
            <button
              
              className="btn btn-outline bg-slate-100 border-0 border-b-4  mx-auto border-[#FF9209] text-black cursor-pointer mb-11"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
        </>
    );
};

export default ProductDetails;