import { useEffect, useState } from "react";
import { deleteProject, getProjectList, ProjectListresponse } from "../features/project";


export const useProjectList = (page: number, size: number) => {

  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [projectList, setProjectList] = useState<ProjectListresponse>();


  const deleteProj = async (id: string) => {
    deleteProject(id).catch((error) => {
      setError(error);
    });
    getProjects();
  };

  useEffect(() => {
    getProjects();
  }, [page]);

  async function getProjects() {
    const fetchData = async () => {
      setIsLoading(true);
      setProjectList(await getProjectList(page, size));
      setIsLoading(false);
    };

    fetchData();
  }

  return {
    deleteProj,
    data: projectList,
    isLoading,
    error
  };

}