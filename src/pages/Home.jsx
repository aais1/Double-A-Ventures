import Cart from "../modals/Cart";
import { addToCart } from "../redux/cartSlice/cartSlice";
import { useDispatch } from "react-redux";
import { Gallery, ItemCard } from "../components";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const { setShowCart } = useCart();

  if (sessionStorage.getItem("showCart")) {
    setShowCart(true);
    sessionStorage.removeItem("showCart");
  }

  useEffect(() => {
    const fetchProducts = async () => {
      const resp = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/products`
      );
      setProducts(resp.data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-8">
        <Gallery />

        <div className="mt-14 px-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {
            //first four elements
            products.slice(0, 4).map((product) => (
              <div key={product.id}>
                <ItemCard
                  id={product.id}
                  image={product.images[0]}
                  name={product.name}
                  price={product.price}
                  rating={product?.rating}
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
