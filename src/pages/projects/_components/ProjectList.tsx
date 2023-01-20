import { mdiDelete, mdiSquareEditOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../../components/Modal";
import { ProjectResponse } from "../../../features/project";

type Props = {
    projectList: ProjectResponse[],
    deleteProject: (id: string) => void
};

const ProjectList = ({ projectList, deleteProject }: Props) => {
    const projects = projectList;

    const [dialog, setDialog] = useState({
        message: "",
        openModal: false,
        item: "",
        title: ""
    });

    let projectId = "";
    const handleDialog = (message: string, openModal: boolean, item: string, title: string) => {
        setDialog({
            message,
            openModal,
            item,
            title
        });
    };

    const handleDelete = (id: string, name: string) => {
        handleDialog("Are you sure you want to delete", true, name, "Delete Project Confirmation");
        projectId = id;
    };

    const areUSureDelete = (choose: boolean) => {
        if (choose) {
            deleteProject(projectId);
        }
        handleDialog("", false, "", "");
    };

    return (
        <table className="table w-full border-b border-gray-200 shadow rounded-t-lg" >
            <thead>
                <tr>
                    <th scope='col'>Id</th>
                    <th scope='col'>Project Name</th>
                    <th scope='col'>Project Color</th>
                    <th scope='col'>Edit</th>
                    <th scope='col'>Delete</th>
                </tr>
            </thead>
            <tbody>
                {projects.map(item => (
                    <tr key={item.id}>
                        <td >{item.id} </td>
                        <td>{item.name} </td>
                        <td>{item.color}</td>
                        <td>
                            <Link to={item.id} >
                                <Icon path={mdiSquareEditOutline} size={1} />
                            </Link>
                        </td>
                        <td>
                            <button onClick={() => handleDelete(item.id, item.name)}>
                                <Icon path={mdiDelete} size={1} />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
            {dialog.openModal && <Modal
                item={dialog.item}
                setChoice={areUSureDelete}
                message={dialog.message}
                title={dialog.title}
            />}
        </table>
    )
};

export default ProjectList