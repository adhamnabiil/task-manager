import { useEffect, useState } from "react";
import List from "./List";
import AddEditTask from "./AddEditTask";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import NoTasks from "./NoTasks";
import apiRequest, { handlePromiseError } from "../../api/apiRequest";
import tasksAPI from "../../api/tasksAPI";
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [addEditModal, setAddEditModal] = useState({ open: false, data: null });
  const [loading, setLoading] = useState(true);
  const [isToggling, setIsToggling] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    try {
      const data = await apiRequest(tasksAPI.getTasks);
      setTasks(data.todos);
      setFilteredTasks(data.todos);
    } catch (error) {
      toast.error(error?.data?.message || "An error occured");
    } finally {
      setLoading(false);
    }
  };

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

  const toggleTaskStatus = async (newStatus, taskId) => {
    try {
      setIsToggling(true);
      const response = await apiRequest(tasksAPI.editTask, taskId, {
        completed: newStatus,
      });
      setTasks(tasks.map((task) => (task.id === taskId ? response : task)));
      setFilteredTasks(
        filteredTasks.map((task) => (task.id === taskId ? response : task))
      );
    } catch (error) {
      handlePromiseError(error);
    } finally {
      setIsToggling(false);
    }
  };

  const addTask = async (taskName) => {
    const newTask = { todo: taskName, userId: 1 };
    try {
      setIsSubmitting(true);
      const response = await apiRequest(tasksAPI.addTask, newTask);
      setTasks([...tasks, response]);
      if (
        response.todo.toLowerCase().includes(searchValue.trim().toLowerCase())
      )
        setFilteredTasks([...filteredTasks, response]);
      setAddEditModal({ open: false, data: null });
      toast.success("Task Added successfully");
    } catch (error) {
      handlePromiseError(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const editTask = async (newName, taskId) => {
    try {
      setIsSubmitting(true);
      const response = await apiRequest(tasksAPI.editTask, taskId, {
        todo: newName,
      });
      setTasks(tasks.map((task) => (task.id === taskId ? response : task)));
      setFilteredTasks(
        filteredTasks.map((task) => (task.id === taskId ? response : task))
      );
      setAddEditModal({ open: false, data: null });
      toast.success("Task updated successfully");
    } catch (error) {
      handlePromiseError(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      setIsDeleting(true);
      const response = await apiRequest(tasksAPI.deleteTask, taskId);
      setTasks(tasks.filter((task) => task.id !== response.id));
      setFilteredTasks(filteredTasks.filter((task) => task.id !== response.id));
      toast.success("Task Deleted successfully");
    } catch (error) {
      handlePromiseError(error);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleReorderTasks = (newOrderedTasks) => {
    setFilteredTasks(newOrderedTasks);
    if (searchValue.trim() === "") {
      setTasks(newOrderedTasks);
    }
  };

  const openEditModal = (task = null) => {
    setAddEditModal({ open: true, data: task });
  };

  return (
    <div className="max-w-[700px] mx-auto mt-[100px] px-4">
      <div className="flex justify-between items-center gap-4">
        <div className="flex items-center">
          <Button
            variant="contained"
            size="large"
            onClick={() => setAddEditModal({ open: true, task: null })}
          >
            Add
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
      {loading ? (
        <div className="w-full flex justify-center items-center">
          <CircularProgress />
        </div>
      ) : filteredTasks.length === 0 ? (
        <NoTasks />
      ) : (
        <List
          tasks={filteredTasks}
          toggleTaskStatus={toggleTaskStatus}
          isToggling={isToggling}
          deleteTask={deleteTask}
          isDeleting={isDeleting}
          openEditModal={openEditModal}
          onReorderTasks={handleReorderTasks}
        />
      )}
      {addEditModal.open && (
        <AddEditTask
          isAdding={!addEditModal.data}
          task={addEditModal.data}
          addTask={addTask}
          editTask={editTask}
          isSubmitting={isSubmitting}
          handleClose={() => setAddEditModal({ open: false, data: null })}
        />
      )}
    </div>
  );
};
export default Tasks;
