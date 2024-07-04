import { useParams } from "react-router-dom";
import { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import toast from "react-hot-toast";

const Product = () => {
  const { id } = useParams();
  const [rating, setRating] = useState(0); 
  const [review,setReview]=useState(''); 

  const handleReviewSubmit = async () => {
    // eslint-disable-next-line no-useless-catch
    try {
      const resp = await fetch(`http://localhost:3000/products/${id}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          rating,
          review
        })
      });
      const data = await resp.json();
      return data; // Return the data to handle success case
    } catch (error) {
      throw error; // Throw error to handle failure case
    }
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const promise = handleReviewSubmit(); // Call the async function and get the promise
      toast.promise(promise, {
        loading: 'Posting',
        success: 'Review Posted',
        error: 'Error when Posting',
      },{
        error:{
          duration:1800
        },
        success:{
          duration:1800
        }
      });
    } catch (error) {
      console.error('Error submitting review:', error);
      toast.error('Failed to submit review'); // Handle any synchronous errors
    }
  }
  
  // Assuming you trigger handleReviewSubmit somewhere, for example on form submit
  // Make sure handleSubmit is called instead:
  // Example: <form onSubmit={handleSubmit}>
  
  // const [product,setProduct]=useState({});

  // const fetchProduct= async ()=>{
  //     const resp=await fetch(`http://localhost:3000/products/${id}`);
  //     const data=await resp.json();
  //     setProduct(data);
  // }

  // fetchProduct();

  const product = {
    name: "Wireless Bluetooth Headphones",
    description:
      "High-quality wireless headphones with noise cancellation and 20 hours of battery life.not good batery life i know but yeah wat can i do i just need some static data so that the page looks good lol no but i will make it better soon i promise. Thanks :)",
    price: "$59.99",
    rating:4
  };

  return (
    <div className="w-screen mx-auto  md:w-[95vw] p-1 md:p-4">
      <div className="flex  flex-col md:flex-row gap-y-8 md:gap-y-0 gap-x-8 my-2 ">
        <div className="flex h-[300px] gap-x-4 md:w-[45%] ">
          <div>
            <img
              src="https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=400"
              className="bg-center  cursor-pointer  h-[100%] rounded-tl-md rounded-bl-md"
              style={{ backgroundColor: "gray" }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <img
              src="https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=400"
              className="bg-center cursor-pointer h-[50%] gap-2 rounded-tr-md"
              style={{ backgroundColor: "gray" }}
            />
            <img
              src="https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=400"
              className="bg-center cursor-pointer h-[50%] gap-2 rounded-br-md"
              style={{ backgroundColor: "gray" }}
            />
          </div>
        </div>
        <div className=" md:w-[60%]">
          <h1 className="text-2xl font-bold border-b mb-4">{product.name}</h1>
          <p className="text-gray-500 w-[90%] md:w-[50%] mb-4">{product.description}</p>
          <p className="text-black font-semibold mb-2 text-lg">
            Price: {product.price}
          </p>
          <p className="mb-4">
            <Rating style={{ maxWidth:'170px' }} value={product.rating} readOnly={true}  />
          </p>
          <button className="bg-blue-500  text-white px-4 py-2 rounded">
            Add to Cart
          </button>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <div className="w-[90vw] md:w-[75vw] mx-auto">
        <form onSubmit={handleSubmit}>

        <div className="flex gap-4 items-center mb-4">
        <span className="font-semibold text-gray-500">Give the product a rating :</span>
        <Rating style={{ maxWidth:'170px' }} value={rating} onChange={setRating} />
        </div>

        <input
          type="text"
          placeholder="Submit a review"
          value={review}
          onChange={(e)=>setReview(e.target.value)}
          className="border border-gray-500 w-[70%] md:w-[90%] rounded-tl-full rounded-bl-full px-4 py-2 focus:outline-blue-500 active:border-blue-500"
        />
        
        <button className="w-[20%] md:w-[10%] rounded-tr-full rounded-br-full border border-blue-500 text-blue-500 font-semibold p-2 hover:bg-blue-500 hover:text-white duration-150 active:scale-95"
        type="submit">
          Submit
        </button>
        </form>
      </div>
      <br />
      <hr />
      <div className="mt-4">
        <h2 className="text-xl font-bold">Reviews</h2>
        <div className="flex flex-col md:flex-row flex-wrap gap-x-2 mt-2">
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/50"
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-2">
              <h3 className="font-bold">John Doe</h3>
              <p className="text-gray-500">Rating: 4.5</p>
              <p className="text-gray-500">
                "Great product! Highly recommended."
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/50"
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-2">
              <h3 className="font-bold">Jane Smith</h3>
              <p className="text-gray-500">Rating: 5.0</p>
              <p className="text-gray-500">
                "Excellent quality. Worth every penny."
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <hr />
      <br />
    </div>
  );
};

export default Product;
