import { useEffect, useState } from "react";
import { deleteProject, GetProjectByIdResponse, getProjecyById } from "../features/project";

export const useProject = (id?: string) => {
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [project, setProject] = useState<GetProjectByIdResponse>();
  
  useEffect(() => {
    if (!id)
      return;

    const fetchData = async () => {
      setProject(await getProjecyById(id));
    };

    fetchData();
  }, [id]);

  const deleteProj = (id: string) => {
    deleteProject(id).catch((error) => {
      setError(error);
    });
  };


  return {
    deleteProj,
    data: project,
    isLoading,
    error
  };
 

}