import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import API from "../api/axios";

export default function ProjectDetails() {
  const { id } = useParams();

  const [tasks, setTasks] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("To Do");

  const [editingTask, setEditingTask] = useState(null);

  const loadTasks = async () => {
    try {
      const res = await API.get(
        `/projects/${id}/tasks`
      );

      setTasks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const addTask = async () => {
    try {
      await API.post(
        `/projects/${id}/tasks`,
        {
          title,
          description,
          status,
        }
      );

      setTitle("");
      setDescription("");
      setStatus("To Do");

      loadTasks();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await API.delete(
        `/tasks/${taskId}`
      );

      loadTasks();
    } catch (err) {
      console.log(err);
    }
  };

  const updateTask = async () => {
    try {
      await API.put(
        `/tasks/${editingTask._id}`,
        {
          title: editingTask.title,
          description:
            editingTask.description,
          status:
            editingTask.status,
        }
      );

      setEditingTask(null);

      loadTasks();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
        <div className="container">

        <h2>Project Tasks</h2>

        {/* CREATE TASK */}

        <div className="card">

          <h3>Add New Task</h3>

          <input
            value={title}
            placeholder="Title"
            onChange={(e) =>
              setTitle(
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

          <select
            value={status}
            onChange={(e) =>
              setStatus(
                e.target.value
              )
            }
          >
            <option>To Do</option>
            <option>In Progress</option>
            <option>Done</option>
          </select>

          <button
            onClick={addTask}
          >
            Add Task
          </button>

        </div>

        {/* EDIT TASK */}

        {editingTask && (
          <div className="card">

            <h3>Edit Task</h3>

            <input
              value={editingTask.title}
              onChange={(e) =>
                setEditingTask({
                  ...editingTask,
                  title:
                    e.target.value,
                })
              }
            />

            <input
              value={
                editingTask.description
              }
              onChange={(e) =>
                setEditingTask({
                  ...editingTask,
                  description:
                    e.target.value,
                })
              }
            />

            <select
              value={
                editingTask.status
              }
              onChange={(e) =>
                setEditingTask({
                  ...editingTask,
                  status:
                    e.target.value,
                })
              }
            >
              <option>To Do</option>
              <option>In Progress</option>
              <option>Done</option>
            </select>

            <button
              onClick={updateTask}
            >
              Save Changes
            </button>

            <button
              onClick={() =>
                setEditingTask(null)
              }
            >
              Cancel
            </button>

          </div>
        )}

        {/* TASK LIST */}

        <div className="grid">

          {tasks.map((task) => (

            <div
              key={task._id}
              className="project-card"
            >

              <h3>
                {task.title}
              </h3>

              <p>
                {task.description}
              </p>

              <p>
                Status:
                {" "}
                {task.status}
              </p>

              <button
                onClick={() =>
                  setEditingTask(task)
                }
              >
                Edit
              </button>

              <button
                onClick={() =>
                  deleteTask(
                    task._id
                  )
                }
              >
                Delete
              </button>

            </div>

          ))}

        </div>

      </div>
    </>
  );
}