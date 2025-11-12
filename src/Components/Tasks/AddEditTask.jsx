import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { useMemo, useState } from "react";

const AddEditTask = ({
  isAdding,
  task,
  addTask,
  editTask,
  isSubmitting,
  handleClose,
}) => {
  const [taskName, setTaskName] = useState(isAdding ? "" : task.todo);

  const isValidName = useMemo(
    () =>
      isAdding
        ? taskName.trim().length > 0
        : taskName !== task.todo && taskName.trim().length > 0,
    [taskName, isAdding, task]
  );

  const handleSubmit = () => {
    if (isAdding) {
      addTask(taskName);
    } else {
      editTask(taskName, task.id);
    }
  };

  return (
    <Dialog open={true} onClose={handleClose} fullWidth>
      <DialogTitle>New task</DialogTitle>
      <DialogContent>
        <div className="my-2">
          <TextField
            label="Add task"
            size="small"
            fullWidth
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button color="primary" variant="outlined" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          color="primary"
          variant="contained"
          disabled={!isValidName || isSubmitting}
          onClick={handleSubmit}
        >
          {isSubmitting ? <CircularProgress /> : "Apply"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default AddEditTask;
