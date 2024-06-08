import { useCart } from "../../context/CartContext";
import {Link} from 'react-router-dom'
import { useEffect, useRef, useState } from "react";
import {useSelector , useDispatch} from 'react-redux'
import { removeUser } from "../../redux/userSlice/userSlice";
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  const { showCart, setShowCart } = useCart();
  const {user} = useSelector((state) => state.user);
  const [showMenu,setShowMenu]=useState(false)
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const headerRef=useRef();

  const handleLogout=()=>{
    dispatch(removeUser())
    navigate('/login')
  }

  function handleScroll(){
    if(window.scrollY > 100){
      headerRef.current.classList.add('sticky','top-0');
    }else if(window.scrollY <8){
      headerRef.current.classList.remove('sticky','top-0');
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
    return ()=>{
      window.removeEventListener('scroll',handleScroll)
    }
  },[])

  return (
    <div className="bg-gray-800 z-50 " ref={headerRef}>
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="text-white text-2xl font-semibold">Logo</div>
        <nav className="space-x-4 flex text-xl">
          <button
            className="text-white hover:text-gray-300 flex items-center gap-x-1"
            href="#"
            onClick={() => setShowCart(!showCart)}
          >
            Cart <AiOutlineShoppingCart style={{fontSize:'1.5rem'}} />
          </button>
          {
          !user?.email ? (
            <Link to="/login" className="text-white hover:text-gray-300">
              Login
            </Link>
          ) : user !== null && ( // added null check here
            <div className="relative">
            <div>
            <button 
            onClick={() => setShowMenu(!showMenu)}
            className="text-white hover:text-gray-300">
              Account
            </button>
            </div>
            {
              showMenu && 
              <div className="z-30 absolute top-10 flex flex-col gap-y-2 bg-white rounded-lg gap-1 font-semibold p-1">
              <button className="px-4 py-2 hover:bg-blue-50 hover:text-black text-gray-600 rounded-lg" onClick={handleLogout}>Logout</button>
              {/* <button className="px-4 py-2 hover:bg-blue-50 hover:text-black text-gray-600 rounded-lg">Profile</button> */}
            </div>
            
            }
            </div>
          )
        }
          
        </nav>
      </div>
    </div>
  );
};

export default Header;
