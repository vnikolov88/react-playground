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
    <div className="mt-4">
      <ProjectForm project={data} />
    </div>
  );
};

export default EditProjectPage;