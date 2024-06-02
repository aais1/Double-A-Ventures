import { useCart } from "../../context/CartContext";

const Header = () => {
  const { showCart, setShowCart } = useCart();
  console.log(showCart);
  return (
    <div className="bg-gray-800">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="text-white text-lg font-semibold">Logo</div>
        <nav className="space-x-4 flex">
          <a className="text-white hover:text-gray-300" href="#">
            Home
          </a>
          <a className="text-white hover:text-gray-300" href="#">
            Products
          </a>
          <a
            className="text-white hover:text-gray-300"
            href="#"
            onClick={() => setShowCart(!showCart)}
          >
            Cart
          </a>
          <a className="text-white hover:text-gray-300" href="#">
            Account
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
