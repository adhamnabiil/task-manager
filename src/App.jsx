import "./App.css";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <ToastContainer />
      <Header />
      <Tasks />
    </div>
  );
}

export default App;
