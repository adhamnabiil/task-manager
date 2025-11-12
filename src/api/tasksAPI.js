import axiosInstance from "./axiosInstance";

const tasksAPI = {
  getTasks: () => axiosInstance.get("todos"),
  addTask: (newTask) => axiosInstance.post("todos/add", newTask),
  editTask: (taskId, updatedData) =>
    axiosInstance.put(`todos/${taskId}`, updatedData),
  deleteTask: (taskId) => axiosInstance.delete(`todos/${taskId}`),
};

export default tasksAPI;
