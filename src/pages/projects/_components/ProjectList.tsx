import { mdiDelete, mdiSquareEditOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../../components/Modal";
import { ProjectResponse } from "../../../features/project";

type Props = {
    projects: ProjectResponse[],
    deleteProject: (id: string) => void
};

const ProjectList = ({ projects, deleteProject }: Props) => {
    const projectList = projects
    const [itemIdToDelete, setItemIdToDelete] = useState<string | null>(null);

    const [dialog, setDialog] = useState({
        message: "",
        openModal: false,
        item: "",
        title: ""
    });

    var projectId: string;
    const handleDialog = (message: string, openModal: boolean, item: string, title: string) => {
        setDialog({
            message,
            openModal,
            item,
            title
        });
    };

    const handleDelete = (name: string, id?: string) => {
        handleDialog("Are you sure you want to delete", true, name, "Delete Project Confirmation");
        if (id)
            setItemIdToDelete(id);
    };

    const areUSureDelete = (choose: boolean) => {
        if (choose && itemIdToDelete) {
            deleteProject(itemIdToDelete);
        }
        handleDialog("", false, "", "");
    };

    return (
        <>
            <table className="table w-full border-b border-gray-200 shadow rounded-t-lg" >
                <thead>
                    <tr>
                        <th scope='col'>Id</th>
                        <th scope='col'>Project Title</th>
                        <th scope='col'>Project Color</th>
                        <th scope='col'>Edit</th>
                        <th scope='col'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {projectList.map(item => (
                        <tr key={item.id}>
                            <td >{item.id} </td>
                            <td>{item.title} </td>
                            <td>{item.color}</td>
                            <td>
                                <Link to={item.id} >
                                    <Icon path={mdiSquareEditOutline} size={1} />
                                </Link>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(item.title, item.id)}>
                                    <Icon path={mdiDelete} size={1} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
            {dialog.openModal && <Modal
                item={dialog.item}
                setChoice={areUSureDelete}
                message={dialog.message}
                title={dialog.title}
            />}
        </>
    )
};

export default ProjectList