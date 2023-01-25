import axios, { Axios } from 'axios';


export const getProjecyById = async (id: string): Promise<GetProjectByIdResponse> => {
    return axios.get('/projects/'+id).then(function (response){
      return response.data;
    });
  }
  
  export interface ProjectRequest {
    id?: string;
    title: string;
    color: string
  }
  
  export interface  GetProjectByIdResponse {
    id: string;
    title: string;
    color: string
  };


export const getProjectList = async (page: number, size: number) : Promise<ProjectListresponse> => {
   return axios.get('/projects/list?page=' + page + '&totalItemsPerPage=' + size)
    .then(function (response) {
        return response.data; 
    });
}

export const createOrEditProject = async(project: ProjectRequest) => {
  return axios.post('/projects', project);
}

export type ProjectListresponse = {
  projects : ProjectResponse[],
  totalPages : number,
}

export interface ProjectResponse {
  id: string;
  title: string;
  color: string
} 

export const deleteProjectCall = async (id: string) => {
  return axios.delete('/projects?id='+id)
}


 