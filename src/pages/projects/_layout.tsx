import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
    
  );
};

export default Layout;