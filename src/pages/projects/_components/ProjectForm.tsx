import { Link } from "react-router-dom";

type Props = {
  project?: {
    id: string;
    name: string;
  }
};

const ProjectForm = (props: Props) => {
  const { project } = props;

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-blue-500">
        {project ? "Edit Project" : "Create Project"}
      </h1>
      <div className="mt-4">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

              type="text"
              placeholder="Project name"
              defaultValue={project?.name}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              {project ? "Update" : "Create"}
            </button>

            <Link to="/"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );

};

export default ProjectForm;