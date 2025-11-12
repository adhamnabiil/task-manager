import { useEffect, useState } from "react";
import List from "./List";
import AddEditTask from "./AddEditTask";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import NoTasks from "./NoTasks";
import { genId } from "../../utils/genId";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [addEditModal, setAddEditModal] = useState({ open: false, data: null });

  useEffect(() => {
    const tasks = [
      { id: 1, todo: "play", completed: false },
      { id: 2, todo: "work", completed: true },
      { id: 3, todo: "study", completed: false },
    ];
    setTasks(tasks);
    setFilteredTasks(tasks);
  }, []);

  const handleSearch = (search) => {
    if (search.trim() === 0) {
      setFilteredTasks(tasks);
      return;
    }

    const filtered = tasks.filter((task) =>
      task.todo.toLowerCase().includes(search.trim().toLowerCase())
    );
    setFilteredTasks(filtered);
  };

  const toggleTaskStatus = (newStatus, taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: newStatus } : task
      )
    );
  };

  const addTask = (taskName) => {
    setTasks([...tasks, { id: genId(), todo: taskName, completed: false }]);
  };

  const editTask = (newName, taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, todo: newName } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const openEditModal = (task) => {
    setAddEditModal({ open: true, data: task });
  };

  return (
    <div className="max-w-[700px] mx-auto mt-[100px] px-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Button
            variant="contained"
            size="large"
            onClick={() => setAddEditModal({ open: true, task: null })}
          >
            Add a task
          </Button>
        </div>
        <div className="relative">
          <TextField
            label="Search tasks..."
            size="small"
            fullWidth
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
              handleSearch(e.target.value);
            }}
          />
          <SearchIcon
            className="absolute right-0 top-[50%] translate-y-[-50%]"
            color="primary"
          />
        </div>
      </div>
      {filteredTasks.length === 0 ? (
        <NoTasks />
      ) : (
        <List
          tasks={filteredTasks}
          toggleTaskStatus={toggleTaskStatus}
          deleteTask={deleteTask}
          openEditModal={openEditModal}
        />
      )}
      {addEditModal.open && (
        <AddEditTask
          isAdding={!addEditModal.data}
          task={addEditModal.data}
          addTask={addTask}
          editTask={editTask}
          handleClose={() => setAddEditModal({ open: false, data: null })}
        />
      )}
    </div>
  );
};
export default Tasks;
