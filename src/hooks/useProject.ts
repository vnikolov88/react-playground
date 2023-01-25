import { createOrEditProject } from './../features/project';
import { useEffect, useState } from "react";
import { GetProjectByIdResponse, getProjecyById } from "../features/project";

export const useProject = (id?: string) => {
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [project, setProject] = useState<GetProjectByIdResponse>();

  useEffect(() => {
    if (!id)
      return;

    const fetchData = async () => {
      setIsLoading(true);

      await getProjecyById(id)
      .then(function (response){
        setProject(response);
      }).catch(function (error){
        setError(error)
      });
      
      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  const upsertProject = async (project: {
    id?: string;
    title: string;
    color: string;
  }) => {
    setIsLoading(true);
    createOrEditProject(project).catch((error) => {
      setError(error);
    });
    setIsLoading(false);
  };

  return {
    upsertProject,
    isLoading,
    data: project,
    error
  };
}