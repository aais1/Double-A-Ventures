import React, { useState } from "react";
import axios from "axios";
import { ItemCard, Spinner } from "../components";

const Clothing = () => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = useState(true);
  React.useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios(
        import.meta.env.VITE_SERVER_URL + "/products/type/electronics"
      );
      setProducts(data);
      setTimeout(() => {
        setLoading(false);
      }, 300);
    };
    fetchData();
  }, []);
  return (
    <div className="container mx-auto">
      {loading && <Spinner />}
      {!loading && products.message && (
        <h1 className="text-center text-2xl font-semibold py-12">
          {products.message}
        </h1>
      )}
      <div className="mt-14 py-6 px-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {!loading &&
          products.length > 0 &&
          products.map((product) => (
            <div key={product.id}>
              <ItemCard
                id={product.id}
                image={product.images[0]}
                name={product.name}
                price={product.price}
                rating={product?.rating || 5}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Clothing;
