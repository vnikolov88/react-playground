import { faEdit, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { ProjectListresponse, ProjectResponse } from "../../../features/project";

type Props = {
    projectList: ProjectResponse[], 
    deleteProject: (id: string) => void
};

const ProjectList = ({projectList, deleteProject}: Props) => {
    const projects = projectList;
    
    
    
    return (  
        <table >
            <thead>
                <tr>
                    <th scope='col'>Id</th>
                    <th scope='col'>Project Name</th>
                    <th scope='col'>Begin Date</th>
                    <th scope='col'>End Date</th>
                    <th scope='col'>Edit</th>
                    <th scope='col'>Delete</th>
                </tr>
            </thead>
            <tbody>
                    {projects.map(item => (
                        <tr key={item.id}>
                            <td >{item.id} </td>
                            <td>{item.name} </td>
                            <td>{item.beginDate}</td>
                            <td>{item.endDate}</td>
                            <td>{item.endDate}</td>
                            <td>
                                <Link to={item.id+"/edit"} >
                                    <FontAwesomeIcon icon={faEdit} />
                                </Link>
                            </td>
                            <td>
                                <button onClick={()=> deleteProject(item.id)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </td>
                        </tr>
                    ))}
            </tbody>
        </table>
        ) 

};

export default ProjectList