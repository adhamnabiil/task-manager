import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { useMemo, useState } from "react";

const AddEditTask = ({ isAdding, task, addTask, editTask, handleClose }) => {
  const [taskName, setTaskName] = useState(isAdding ? "" : task.todo);

  const isValidName = useMemo(
    () =>
      isAdding
        ? taskName.trim().length > 0
        : taskName !== task.todo && taskName.trim().length > 0,
    [taskName, isAdding, task]
  );

  const handleApply = () => {
    if (isAdding) {
      addTask(taskName);
    } else {
      editTask(taskName, task.id);
    }
    handleClose();
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
          disabled={!isValidName}
          onClick={handleApply}
        >
          Apply
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default AddEditTask;
