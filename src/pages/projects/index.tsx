import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";


const Projects = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-bold underline text-blue-500">
        Projects
      </h1>
      <div className="bg-slate-500">
        <Outlet />
      </div>
    </div>
  )

}

export default Projects;