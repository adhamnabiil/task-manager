import { useRef, useState } from "react";
import SingleTask from "./SingleTask";

const List = ({
  tasks,
  toggleTaskStatus,
  deleteTask,
  isDeleting,
  isToggling,
  openEditModal,
  onReorderTasks,
}) => {
  const [draggingTask, setDraggingTask] = useState(null);
  const draggedOverTask = useRef(null);

  const handleDragStart = (e, task) => {
    setDraggingTask(task);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragEnter = (e, task) => {
    e.preventDefault();
    draggedOverTask.current = task;
  };

  const handleDragEnd = () => {
    if (
      draggingTask &&
      draggedOverTask.current &&
      draggingTask.id !== draggedOverTask.current.id
    ) {
      const draggedIndex = tasks.findIndex((t) => t.id === draggingTask.id);
      const targetIndex = tasks.findIndex(
        (t) => t.id === draggedOverTask.current.id
      );
      const newTasks = [...tasks];
      const [removed] = newTasks.splice(draggedIndex, 1);
      newTasks.splice(targetIndex, 0, removed);

      onReorderTasks(newTasks);
    }
    setDraggingTask(null);
    draggedOverTask.current = null;
  };
  return (
    <ul className=" mt-4">
      {tasks.map((task) => (
        <SingleTask
          key={task.id}
          task={task}
          toggleTaskStatus={toggleTaskStatus}
          isToggling={isToggling}
          deleteTask={deleteTask}
          openEditModal={openEditModal}
          isDeleting={isDeleting}
          onDragStart={handleDragStart}
          onDragEnter={handleDragEnter}
          onDragEnd={handleDragEnd}
          isDragging={draggingTask?.id === task.id}
        />
      ))}
    </ul>
  );
};
export default List;
