import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice/cartSlice";

const Product = () => {
  const [product,setProduct]=useState({});
  const [reviews,setReviews]=useState([]);
  const { id } = useParams();
  const [rating, setRating] = useState(0); 
  const [review,setReview]=useState(''); 
  const dispatch=useDispatch();
  const {user}=useSelector(state=>state.user)

  const handleReviewSubmit = async () => {
    // eslint-disable-next-line no-useless-catch
    try {
      const {data} = await axios.post(`http://localhost:3000/products/review/${id}`, 
        {
          username:'dummy',
          ProductId:id,
          ReviewText:review,
          Rating:rating
        });
      return data; // Return the data to handle success case
    } catch (error) {
      throw error; // Throw error to handle failure case
    }
  }

  const fetchReviews=async()=>{
    const {data}=await axios.get(import.meta.env.VITE_SERVER_URL+'/products/review/'+id);
    setReviews(data);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(review.length<5){
      toast.error('Review must be at least 5 characters long');
      return;
    }
    if(review.length>70){
      toast.error('Review must be at less than 70 characters long');
      return;
    }
    if(rating===0){
      toast.error('Please select a rating');
      return;
    }
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
      }).then(()=>{
        fetchReviews();
      })

    } catch (error) {
      console.error('Error submitting review:', error);
      toast.error('Failed to submit review'); // Handle any synchronous errors
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString(); // You can customize the format here
  };

  useEffect(()=>{
    const fetchData=async()=>{
      const {data}=await axios.get(import.meta.env.VITE_SERVER_URL+'/products/'+id);
      setProduct(data);
    }

  
    fetchData();
    fetchReviews()
  },[])

  return (
    <div className="w-screen mx-auto  md:w-[95vw] p-1 md:p-4">
      <div className="flex  flex-col md:flex-row gap-y-8 md:gap-y-0 gap-x-8 my-2 ">
        <div className="flex h-[300px] gap-x-4 md:w-[45%] ">
          <div className="w-[100%] overflow-hidden">
            <img
              src={ product?.images ? product.images[0] : "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=400"}
              className="bg-center  cursor-pointer duration-150 hover:scale-105 w-[100%]  h-[100%] rounded-tl-md rounded-bl-md"
              style={{ backgroundColor: "gray" }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="overflow-hidden w-[100%] h-[50%]">
              <img
                src="https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=400"
                className="bg-center hover:scale-105 duration-150 cursor-pointer  gap-2 rounded-tr-md"
                style={{ backgroundColor: "gray" }}
              />
            </div>
            <div className="overflow-hidden w-[100%] h-[50%]">
              <img
                src="https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=400"
                className="bg-center hover:scale-105 duration-150 cursor-pointer  gap-2 rounded-tr-md"
                style={{ backgroundColor: "gray" }}
              />
            </div>
          </div>
        </div>
        <div className="flex-1 lg:w-[60%]">
          <h1 className="text-2xl font-bold border-b mb-4">{product.name}</h1>
          <p className="text-gray-500 lg:w-[85%] mb-4">{product.description}</p>
          <p className="text-black font-semibold mb-2 text-lg">
            Price: {product.price}$
          </p>
          <p className="mb-4">
            <Rating style={{ maxWidth:'170px' }} value={product.rating} readOnly={true}  />
          </p>
          <button className="bg-black text-md  text-white px-6 duration-150 active:scale-[0.90] md:px-14 py-2 rounded"
          onClick={()=>{
            toast.success('Product added to cart');
            
            dispatch(addToCart({
              ...product,
              quantity:1
            }))}
            }>
            Add to Cart
          </button>
        </div>
      </div>
      <br />
      <hr />
      <br />
      {
       user!=null?
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
      :
      <p className="text-center"><Link onClick={()=>{
        sessionStorage.setItem('redirect','/product/'+id);
      }} className="font-semibold hover:underline text-blue-500" to="/login" >Login to submit a review</Link></p>
      }
      <br />
      <hr />
      
      <div className="mt-4">
        <h2 className="text-xl font-bold">Reviews</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 ">
          {
            reviews?.length===0?<p className="font-semibold text-lg p-2">No Reviews Yet</p>:
            reviews?.map((review)=>(
              <div key={review.id} className="flex m-2 items-center">
              <img
                src="https://via.placeholder.com/50"
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-2">
                <p className="text-gray-500">
                  {review.ReviewText}
                </p>
                <Rating style={{ maxWidth:'70px' }} readOnly={true} value={review.Rating} onChange={setRating} />
                <span className="text-sm text-gray-500">{formatDate(review.CreatedAt)}</span>
              </div>
            </div>
            ))
          }
        </div>
      </div>
      <br />
      <hr />
      <br />
    </div>
  );
};

export default Product;
