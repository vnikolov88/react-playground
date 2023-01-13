import { Outlet, Link } from "react-router-dom";
import Navbar from "../../components/Navbar";


const Projects = () => {
  return (
    <div>
      <Link to="/projects/new">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create Project
        </button>
      </Link>
    </div>
  )

}

export default Projects;