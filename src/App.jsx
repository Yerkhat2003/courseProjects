import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MainDashboard from "./components/MainDashboard";
import UserForm from "./components/UserForm";
import { tasks } from "./data/tasks";

function App() {
  const [selectedFilter, setSelectedFilter] = useState("Все задачи");
  const [currentPage, setCurrentPage] = useState("tasks");

  // Объект соответствий фильтров - более компактный и читаемый подход
  const filterConfig = {
    "Все задачи": () => tasks,
    Важное: () => tasks.filter((task) => task.priority === "Высокий"),
    Завершённые: () => tasks.filter((task) => task.status === "Выполнено"),
  };

  const filterTasks = (filter) => {
    const filterFn = filterConfig[filter] || filterConfig["Все задачи"];
    return filterFn();
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
        onPageChange={setCurrentPage}
        currentPage={currentPage}
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
        {currentPage === "userform" ? (
          <UserForm />
        ) : (
          <MainDashboard tasks={filteredTasks} />
        )}
      </div>
    </div>
  );
}

export default App;
