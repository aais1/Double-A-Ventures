import Cart from "../modals/Cart";
import { addToCart } from '../redux/cartSlice/cartSlice'
import { useDispatch } from "react-redux";
import { Gallery,ItemCard } from "../components";

const Home = () => {

  const dispatch=useDispatch();
  const products = [
    {
      id: 1,
      name: 'Shoe',
      price: 69.99,
      image: 'path_to_shoe_image',
      rating: 3,
    },
    {
      id: 2,
      name: 'Watch',
      price: 49.99,
      image: '../../../watch.png',
      rating:1,
    },
    {
      id: 3,
      name: 'Shirt',
      price: 99.99,
      image: 'path_to_shirt_image',
      rating: 0,
    },
  ];
  
  
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-8">

        <Gallery/>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          
        {products.map(product => (
     
        <div key={product.id}>
        <ItemCard
          id={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          rating={product.rating}
        />
        </div>
      ))}
          
          
        </div>
      </div>
    </div>
  );
};

export default Home;
