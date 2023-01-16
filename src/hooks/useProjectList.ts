import { useEffect, useState } from "react";
import { getProjectList, ProjectListresponse } from "../features/project";


export const useProjectList = (page : number, size: number) => {

    const [error, setError] = useState<Error | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [projectList, setProjectList] = useState<ProjectListresponse>();


    useEffect(() => {
   
        const fetchData = async () => {
            setProjectList(await getProjectList(page, size));
        };
    
        fetchData();
      },[page]);
   
    
      return {
        data: projectList,
        isLoading,
        error
      };
}