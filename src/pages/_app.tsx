import Navbar from "../components/Navbar";
import { Outlet, Route, Router, Routes } from "react-router-dom";
import EditProjectPage from "./projects/[projectId]";

function App() {
  return (
    <div className="container max-w-screen-xl mx-auto px-5">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
