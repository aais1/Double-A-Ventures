import { Outlet } from "react-router-dom";
import { AdminSideBar } from './components/admin';


const AdminLayout = () => {
  return (
    <div className="flex gap-x-2">
      <div className="w-[20%]">
        <AdminSideBar />
      </div>
      <div className="w-3/4">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;