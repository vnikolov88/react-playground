

export const getProjecyById = async (id: string): Promise<GetProjectByIdResponse> => {
    //TODO get from backend
    return {
      id: "1",
      name: "Person 1",
      color: "0000",
    };
  }
  
  export interface ProjectRequest {
    id?: string;
    name: string;
    color: string
  }
  
  export interface  GetProjectByIdResponse {
    id: string;
    name: string;
    color: string
  };

 

export const getProjectList = async (page: number, size: number) : Promise<ProjectListresponse> =>{

    return {
        projectList:  [
            {
                id: "1",
                name: "Project 1",
                color: "000"
            },
            {
                id: "2",
                name: "project 4",
                color: "000"
            },
            {
                id: "3",
                name: "project 5",
                color: "000"
            },
        ],
        totalPages : 4
  }
}

export const createOrEditProject = async(project: ProjectRequest) => {
  //throw new Error("Thrown from thisThrows()");
  return Promise.resolve();

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


 