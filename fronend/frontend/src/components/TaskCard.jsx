import API from "../api/axios";

export default function TaskCard({
  task,
  loadTasks,
}) {

  const deleteTask =
    async () => {

      await API.delete(
        `/tasks/${task._id}`
      );

      loadTasks();
    };

  const updateStatus =
    async (status) => {

      await API.put(
        `/tasks/${task._id}`,
        {
          status,
        }
      );

      loadTasks();
    };

  return (
    <div className="card">

      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <p>{task.status}</p>

      <select
        onChange={(e)=>
          updateStatus(
            e.target.value
          )
        }
      >
        <option>
          To Do
        </option>

        <option>
          In Progress
        </option>

        <option>
          Done
        </option>

      </select>

      <button
        onClick=  {deleteTask}
      >
        Delete
      </button>

    </div>
  );
}