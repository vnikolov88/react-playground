import { Outlet, Link, Routes, Route, Router } from "react-router-dom";
import List from "./List";
import EditProjectPage, { CreateProjectPage } from "./_components/[projectId]";


const Projects = () => {

  
  return (
    <div>
      <Link to="/projects/new">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create Project
        </button>
      </Link>

      <List/>
      
      <Link to="/projects/1/edit">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Update Project
        </button>
      </Link>
    </div>
  )

}

export default Projects;