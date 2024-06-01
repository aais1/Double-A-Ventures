import { Outlet } from "react-router-dom";
import { AdminSideBar } from './components/admin';


const AdminLayout = () => {
  return (
    <div className="flex">
      <div className="md:w-[20%]">
        <AdminSideBar />
      </div>
      <div className="w-[100%] px-6 py-3 md:[80%] min-h-screen bg-slate-200">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;