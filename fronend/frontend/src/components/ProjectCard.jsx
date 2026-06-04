import API from "../api/axios";
import { Link } from "react-router-dom";

export default function ProjectCard({
  project,
  refresh,
}) {
  const deleteProject =
    async () => {
      await API.delete(
        `/projects/${project._id}`
      );

      refresh();
    };

  return (
    <div className="card">

      <Link
        to={`/project/${project._id}`}
      >
        <h3>{project.name}</h3>
      </Link>

      <p>
        {project.description}
      </p>

      <button
        onClick={deleteProject}
      >
        Delete
      </button>

    </div>
  );
}