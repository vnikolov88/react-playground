import { useState } from "react";
import Pagination from "../../components/Pagination";
import { useProject } from "../../hooks/useProject";
import { useProjectList } from "../../hooks/useProjectList";
import ProjectList from "./_components/ProjectList";


const List = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const size = 10
    const projectId="";
    const { data, isLoading, error } = useProjectList(currentPage, size);
    const { deleteProj } = useProject(projectId);
    
    if (isLoading) {
        return <div>Loading...</div>;
    }
    
    if (error) {
      return <div>{error.message}</div>;
    }

    return (
        <div>
            
        {data != null &&
            <ProjectList projectList={data?.projectList} deleteProject={deleteProj}/>}
    
          {data != null && <Pagination currentPage={currentPage}
              totalPages={ data.totalPages }
              setCurrentPage={setCurrentPage}
              ></Pagination>
          }
          </div>
    )
};

export default List;