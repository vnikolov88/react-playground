
import { useParams } from "react-router-dom";
import { useProject } from "../../../hooks/useProject";
import ProjectForm from "./ProjectForm";

export  const EditProjectPage = () => {
  const { projectId } = useParams<{ projectId?: string }>();
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

export const CreateProjectPage = () => {
  
  let data: { id: string; name: string; } | undefined;

  return (
    <div className="mt-4">
      <ProjectForm project={data} />
    </div>
  );
};

export default EditProjectPage;

