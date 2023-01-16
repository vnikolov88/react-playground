import Navbar from "../components/Navbar";
import { Outlet, Route, Router, Routes } from "react-router-dom";
import EditProjectPage, { CreateProjectPage } from "./projects/_components/[projectId]";

function App() {

  return (
    <>
      <Navbar />
      <Outlet/>
      <Routes >
        <Route path="projects/new"  element={<CreateProjectPage/>}></Route>
        <Route path="projects/:projectId/edit" element={<EditProjectPage/>}> </Route>
      </Routes>
    </>
  )
}

export default App
