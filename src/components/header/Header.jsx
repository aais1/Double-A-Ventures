import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../../redux/userSlice/userSlice";
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdNotificationsNone } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Notifications from './Notifications'

const Header = () => {
  const [search, setSearch] = useState();
  const [showNotifications,setShowNotifications]=useState(false)
  const [notifications,setNotifications]=useState([]);
  const { showCart, setShowCart } = useCart();
  const { user } = useSelector((state) => state.user);
  const [showMenu, setShowMenu] = useState(false);
  const {totalQuantity}=useSelector(state=>state.cart)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const headerRef = useRef();

  const handleLogout = () => {
    dispatch(removeUser());
    // navigate("/login");
  };



  function handleScroll() {
    if(window.scrollY>100){
    headerRef.current.style.opacity =0.95
    }else{
      headerRef.current.style.opacity =1
    }
  }

  useEffect(() => {
    // Generate dummy notifications
    const dummyNotifications = ["Notification 1", "Notification 2", "Notification 3"];
    setNotifications(dummyNotifications);

    window.addEventListener('scroll',handleScroll)

    return ()=>{
      window.removeEventListener('scroll',handleScroll)
    }

  }, []);

  useEffect(()=>{
    console.log('searching')
  },[search])

  return (
    <div className="bg-black fixed top-0 w-screen px-4 z-50" ref={headerRef}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/"><div className="text-white text-2xl font-semibold font-mono">Double&apos;A</div></Link>
        <nav className="space-x-4 flex items-center text-xl">
          <div className="relative">
            <input
              type="search"
              placeholder="Search a product"
              className="px-2 py-1 md:block hidden"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onClick={()=>setShowMenu(false)}
            />
            <div className="absolute z-50">
              {/*Seaarch results here */}
            </div>
          </div>
          <div className="relative">
          <button
            className="text-white hover:text-gray-300 flex items-center gap-x-2"
            href="#"
            onClick={() => setShowCart(!showCart)}
          >
            <AiOutlineShoppingCart onClick={()=>setShowMenu(false)} style={{ fontSize: "2.4rem" }} />
          </button>
            <div className="bg-white text-sm font-bold absolute rounded-full px-2 py-1 -top-2 -right-2">
              {totalQuantity || "0"}
            </div>
          </div>
          {!user?.email ? (
            <Link to="/login" className="text-white hover:text-gray-300">
              Login
            </Link>
          ) : (
            user !== null && ( // added null check here
              <div className="relative top-0">
                <div className="flex gap-x-2 items-center">
                  <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="text-white hover:text-gray-300 block"
                  >
                    <CgProfile style={{ fontSize: "2.4rem" }} />
                  </button>
                  <div className="cursor-pointer relative">
                    <MdNotificationsNone 
                    style={{ fontSize: "2.5rem",color:'white' }}
                    onClick={()=>setShowNotifications(!showNotifications)}
                     />
                    <Notifications notifications={notifications} showNotifications={showNotifications}/>
                  </div>
                </div>
                {showMenu && (
                  <div className="z-30 absolute top-10 -left-8 flex flex-col gap-y-2 bg-white rounded-lg gap-1 font-semibold p-1">
                    <button
                      className="px-4 py-2 hover:bg-blue-50 hover:text-black text-gray-600 rounded-lg"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                    {/* <button className="px-4 py-2 hover:bg-blue-50 hover:text-black text-gray-600 rounded-lg">Profile</button> */}
                  </div>
                )}
              </div>
            )
          )}
        </nav>
      </div>
    </div>
  );
};

export default Header;
