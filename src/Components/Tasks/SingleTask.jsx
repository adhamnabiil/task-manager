import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
const SingleTask = ({
  task,
  toggleTaskStatus,
  isToggling,
  deleteTask,
  isDeleting,
  openEditModal,
}) => {
  return (
    <li
      draggable
      className="flex justify-between items-center border-blue-200 border-b-1 mb-2"
    >
      <div className="flex items-center">
        <Checkbox
          checked={task.completed}
          onChange={(e) => toggleTaskStatus(e.target.checked, task.id)}
          disabled={isToggling}
        />
        <Typography
          variant="body1"
          className={`${task.completed ? "line-through" : ""}`}
        >
          {task.todo}
        </Typography>
      </div>
      <div className="flex gap-2 text-black">
        <IconButton
          color="inherit"
          onClick={() => openEditModal(task)}
          disabled={isDeleting}
        >
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => deleteTask(task.id)} disabled={isDeleting}>
          <DeleteIcon color="error" />
        </IconButton>
      </div>
    </li>
  );
};
export default SingleTask;
