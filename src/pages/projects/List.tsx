import { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import Modal from "../../components/Modal";
import Pagination from "../../components/Pagination";
import { useProject } from "../../hooks/useProject";
import { useProjectList } from "../../hooks/useProjectList";
import ProjectList from "./_components/ProjectList";


const List = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const size = 10
    const { data, isLoading, error, deleteProj } = useProjectList(currentPage, size);

    if (error) {
        return <div>{error.message}</div>;
    }

    return (
        <>
            {data != null && !isLoading &&
                <ProjectList projects={data?.projects} deleteProject={deleteProj} />}
            {isLoading && <Loading />}

            <div className="flow-root mt-4">
                <div className="float-left">
                    <Link to="/projects/new">
                        <button className="btn"> Create Project</button>
                    </Link>
                </div >
                <div className="float-right">
                    {data != null && data.totalPages > 0 && !isLoading && <Pagination currentPage={currentPage}
                        totalPages={data.totalPages}
                        setCurrentPage={setCurrentPage}
                    ></Pagination>
                    }
                </div>

            </div>
        </>
    )
};

export default List;