import { useEffect, useState } from "react";
import { deleteProject, getProjectList, ProjectListresponse } from "../features/project";


export const useProjectList = (page: number, size: number) => {

  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [projectList, setProjectList] = useState<ProjectListresponse>();


  const deleteProj = async (id: string) => {
    deleteProject(id)
    .then(function (){
      getProjects();
    }).catch((error) => {
      setError(error);
    });
   
  };

  useEffect(() => {
      getProjects();
    
  }, [page]);

  const getProjects = async () =>  {
    setIsLoading(true);
      await getProjectList(page, size)
      .then(function (response){
        setProjectList(response);
      })
      .catch(function(error){
        setError(error);
      });
      setIsLoading(false);
  }

  return {
    deleteProj,
    data: projectList,
    isLoading,
    error
  };

}