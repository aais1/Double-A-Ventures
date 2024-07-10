import { Outlet } from "react-router-dom";
import { AdminSideBar , ResponsiveMenu } from '../components/admin';
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { Toaster } from "react-hot-toast";

const AdminLayout = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="flex">
      <Toaster/>
      <div className="md:w-[20%]">
        <AdminSideBar />
      </div>
      <div className="w-[100%] px-6 py-3 md:[80%] min-h-screen bg-slate-200">
        <Outlet />
        <div className={`${showMenu ? 'hidden':''} md:hidden cursor-pointer text-4xl text-gray-800 font-bold absolute top-4 right-4`}
        onClick={()=>setShowMenu(!showMenu)}>
          <AiOutlineMenu /> 
        </div>
      </div>

      {/* Responsive */}
      
      {
        showMenu && (
          <div className="md:hidden absolute h-screen bg-[rgba(19,19,19,0.71)] backdrop-blur-sm w-screen">
            <div className="md:hidden cursor-pointer pointer text-4xl text-white font-bold absolute top-4 right-4"
            onClick={()=>setShowMenu(!showMenu)}>
              <RxCross2 /> 
            </div>

            <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
            
          </div>
        )
      }
    </div>
  );
}

export default AdminLayout;