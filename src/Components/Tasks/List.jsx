import SingleTask from "./SingleTask";

const List = ({ tasks, toggleTaskStatus, deleteTask, openEditModal }) => {
  return (
    <ul className=" mt-4">
      {tasks.map((task) => (
        <SingleTask
          key={task.id}
          task={task}
          toggleTaskStatus={toggleTaskStatus}
          deleteTask={deleteTask}
          openEditModal={openEditModal}
        />
      ))}
    </ul>
  );
};
export default List;
