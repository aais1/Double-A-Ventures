import Cart from "../modals/Cart";
import { addToCart } from '../redux/cartSlice/cartSlice'
import { useDispatch } from "react-redux";
import { Gallery } from "../components";

const Home = () => {

  const dispatch=useDispatch();
  
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-8">

        <Cart/>

        <Gallery/>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          <div className="bg-white rounded-lg shadow-md p-4 hover:border-black border cursor-pointer">
            <img
              src="https://dummyimage.com/300x200"
              alt="Product"
              className="w-full h-40 object-cover mb-4"
            />
            <div className="flex justify-between">
            <h2 className="text-lg font-semibold">Product 1</h2> 
            <span className="text-red-500 text-xl font-bold">$20</span>
            </div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md"
            onClick={()=>{
              
              const product = {
                id: 1,
                name: "Dummy Product",
                price: 10,
              };

              dispatch(addToCart(product));
              alert('add')
            }}>
              Add to Cart
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 hover:border-black border cursor-pointer">
            <img
              src="https://dummyimage.com/300x200"
              alt="Product"
              className="w-full h-40 object-cover mb-4"
            />
            <div className="flex justify-between">
            <h2 className="text-lg font-semibold">Product 1</h2> 
            <span className="text-red-500 text-xl font-bold">$20</span>
            </div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">
              Add to Cart
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 hover:border-black border cursor-pointer">
            <img
              src="https://dummyimage.com/300x200"
              alt="Product"
              className="w-full h-40 object-cover mb-4"
            />
            <div className="flex justify-between">
            <h2 className="text-lg font-semibold">Product 1</h2> 
            <span className="text-red-500 text-xl font-bold">$20</span>
            </div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">
              Add to Cart
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 hover:border-black border cursor-pointer">
            <img
              src="https://dummyimage.com/300x200"
              alt="Product"
              className="w-full h-40 object-cover mb-4"
            />
            <div className="flex justify-between">
            <h2 className="text-lg font-semibold">Product 1</h2> 
            <span className="text-red-500 text-xl font-bold">$20</span>
            </div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">
              Add to Cart
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 hover:border-black border cursor-pointer">
            <img
              src="https://dummyimage.com/300x200"
              alt="Product"
              className="w-full h-40 object-cover mb-4"
            />
            <div className="flex justify-between">
            <h2 className="text-lg font-semibold">Product 1</h2> 
            <span className="text-red-500 text-xl font-bold">$20</span>
            </div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">
              Add to Cart
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 hover:border-black border cursor-pointer">
            <img
              src="https://dummyimage.com/300x200"
              alt="Product"
              className="w-full h-40 object-cover mb-4"
            />
            <div className="flex justify-between">
            <h2 className="text-lg font-semibold">Product 1</h2> 
            <span className="text-red-500 text-xl font-bold">$20</span>
            </div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">
              Add to Cart
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 hover:border-black border cursor-pointer">
            <img
              src="https://dummyimage.com/300x200"
              alt="Product"
              className="w-full h-40 object-cover mb-4"
            />
           <div className="flex justify-between">
            <h2 className="text-lg font-semibold">Product 1</h2> 
            <span className="text-red-500 text-xl font-bold">$20</span>
            </div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">
              Add to Cart
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 hover:border-black border cursor-pointer">
            <img
              src="https://dummyimage.com/300x200"
              alt="Product"
              className="w-full h-40 object-cover mb-4"
            />
         <div className="flex justify-between">
            <h2 className="text-lg font-semibold">Product 1</h2> 
            <span className="text-red-500 text-xl font-bold">$20</span>
            </div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">
              Add to Cart
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
