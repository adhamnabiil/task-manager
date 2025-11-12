import SingleTask from "./SingleTask";

const List = ({
  tasks,
  toggleTaskStatus,
  deleteTask,
  isDeleting,
  isToggling,
  openEditModal,
}) => {
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
        />
      ))}
    </ul>
  );
};
export default List;
