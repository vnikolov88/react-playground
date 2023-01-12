import { Outlet } from "react-router-dom";


const Projects = () => {
  return (
    <div>
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