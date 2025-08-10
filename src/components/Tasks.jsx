import { CalendarDays, ChevronRightIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
function Tasks(props) {
  const { tasks, onTaskClick, onDeleteTaskClick } = props;
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <div className="bg-slate-400 p-2 rounded-md text-white ">
            <CalendarDays />
          </div>
          <button
            style={{ cursor: "pointer" }}
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 w-full text-left text-white p-2 rounded-md ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <Button
            style={{ cursor: "pointer" }}
            onClick={() => onSeeDetailsClick(task)}
          >
            <ChevronRightIcon />
          </Button>
          <Button
            style={{ cursor: "pointer" }}
            onClick={() => onDeleteTaskClick(task.id)}
          >
            <Trash2Icon />
          </Button>
        </li>
      ))}
    </ul>
  );
}
export default Tasks;
