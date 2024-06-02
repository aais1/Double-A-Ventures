import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";

const Home = () => {
  
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">
          Welcome to our E-commerce Store!
        </h1>

        {/* swiper js */}

        {/* <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper> */}

        <p className="text-gray-600 mb-8">
          Browse our wide selection of products.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
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
