import { useEffect, useState } from "react";
import { deleteProjectCall, getProjectList, ProjectListresponse } from "../features/project";


export const useProjectList = (page: number, size: number) => {

  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [projectList, setProjectList] = useState<ProjectListresponse>();

  const deleteProject = async (id: string) => {
    deleteProjectCall(id)
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
    deleteProject,
    data: projectList,
    isLoading,
    error
  };

}