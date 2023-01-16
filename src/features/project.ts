export const getProjecyById = async (id: string): Promise<GetProjectByIdResponse> => {
    //TODO get from backend
    return {
      id: "1",
      name: "Person 1",
      beginDate: "",
    };
  }
  
  export type GetProjectByIdResponse = {
    id: string;
    name: string;
    beginDate: String;
    endDate?: String;
  };

export const getProjectList = async (page: number, size: number) : Promise<ProjectListresponse> =>{

    return {
        projectList:  [
            {
                id: "1",
                name: "Project 1",
                beginDate: ""
            },
            {
                id: "2",
                name: "project 4",
                beginDate: ""
            },
            {
                id: "3",
                name: "project 5",
                beginDate: ""
            },
        ],
        totalPages : 4
  }
}

  export type ProjectListresponse ={
    projectList : ProjectResponse[],
    totalPages : number,
  }

export interface ProjectResponse  extends GetProjectByIdResponse{
} 

export const deleteProject = async (id: string) => {
  return Promise.resolve;
       
}


 