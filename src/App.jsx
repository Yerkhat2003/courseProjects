import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MainDashboard from "./components/MainDashboard";
import { tasks } from "./data/tasks";

function App() {
  const [selectedFilter, setSelectedFilter] = useState("Все задачи");

  const filterTasks = (filter) => {
    switch (filter) {
      case "Важное":
        return tasks.filter((task) => task.priority === "Высокий");
      case "Завершённые":
        return tasks.filter((task) => task.status === "Выполнено");
      case "Все задачи":
      default:
        return tasks;
    }
  };

  const filteredTasks = filterTasks(selectedFilter);

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#f5f7fa",
      }}
    >
      <Sidebar
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
      />
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Header />
        <MainDashboard tasks={filteredTasks} />
      </div>
    </div>
  );
}

export default App;
