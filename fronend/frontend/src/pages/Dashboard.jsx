import { useEffect, useState } from "react";
import API from "../api/axios";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Dashboard() {

  const [projects, setProjects] =
    useState([]);

  const [name, setName] =
    useState("");

  const [description, setDescription] =
    useState("");

  const loadProjects =
    async () => {

      const res =
        await API.get("/projects");

      setProjects(res.data);
    };

  useEffect(() => {
    loadProjects();
  }, []);

  const createProject =
    async () => {

      await API.post(
        "/projects",
        {
          name,
          description,
        }
      );

      setName("");
      setDescription("");

      loadProjects();
    };

  const deleteProject =
    async (id) => {

      if (
        !window.confirm(
          "Delete Project?"
        )
      )
        return;

      await API.delete(
        `/projects/${id}`
      );

      loadProjects();
    };

  const updateProject =
    async (project) => {

      const newName =
prompt(
  "Project Name",
  project.name
);

const newDescription =
prompt(
  "Description",
  project.description
);

      if (!newName) return;

      await API.put(
  `/projects/${project._id}`,
  {
    name:newName,
    description:newDescription,
  }
);

      loadProjects();
    };

  return (
    <>
      
      <div className="container">

        <h1>
          My Projects
        </h1>

        <div className="card">

          <input
            value={name}
            placeholder="Project Name"
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
          />

          <input
            value={description}
            placeholder="Description"
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
          />

          <button
            onClick={createProject}
          >
            Create Project
          </button>

        </div>

        <div className="grid">

          {projects.map(
            (project) => (
              <div
                key={
                  project._id
                }
                className="project-card"
              >
                <h3>
                  {project.name}
                </h3>

                <p>
                  {
                    project.description
                  }
                </p>

                <Link
                  to={`/project/${project._id}`}
                >
                  Open
                </Link>

                <br />
                <br />

                <button
                  onClick={() =>
                    updateProject(
                      project
                    )
                  }
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    deleteProject(
                      project._id
                    )
                  }
                >
                  Delete
                </button>
              </div>
            )
          )}

        </div>

      </div>
    </>
  );
}