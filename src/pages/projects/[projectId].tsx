import { useProject } from "../../hooks/useProject";
import ProjectForm from "./_components/ProjectForm";
import { useParams } from "react-router-dom";

const EditProjectPage = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const { data, isLoading, error } = useProject(projectId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-blue-500">
        Edit Project
      </h1>
      <div className="mt-4">
        <ProjectForm project={data} />
      </div>
    </div>
  );
};

export default EditProjectPage;