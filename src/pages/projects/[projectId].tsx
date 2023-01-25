
import { useParams } from "react-router-dom";
import { useProject } from "../../hooks/useProject";
import ProjectForm from "./_components/ProjectForm";

export  const EditProjectPage = () => {
  const { projectId } = useParams<{ projectId?: string }>();
  const { error, upsertProject } = useProject(projectId);

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
      <ProjectForm projectId={projectId} />
  );

};

export default EditProjectPage;

