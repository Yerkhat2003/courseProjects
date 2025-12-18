import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MainDashboard from "./components/MainDashboard";
import UserForm from "./components/UserForm";
import BoardsList from "./components/BoardsList";
import { tasks } from "./data/tasks";

function App() {
  const [selectedFilter, setSelectedFilter] = useState("Все задачи");
  const [currentPage, setCurrentPage] = useState("tasks");

  const [boards, setBoards] = useState([
    {
      id: 1,
      title: "Учебная доска",
      description: "Доска для заданий и конспектов по React",
      createdAt: "2025-03-15",
    },
    {
      id: 2,
      title: "Рабочие задачи",
      description: "Ежедневные задачи и проекты",
      createdAt: "2025-03-10",
    },
    {
      id: 3,
      title: "Личные дела",
      description: "Планы и напоминания",
      createdAt: "2025-03-05",
    },
  ]);

  const addBoard = (newBoard) => {
    setBoards((prevBoards) => [...prevBoards, newBoard]);
  };

  const deleteBoard = (id) => {
    setBoards((prevBoards) => prevBoards.filter((board) => board.id !== id));
  };

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
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
        onPageChange={setCurrentPage}
        currentPage={currentPage}
      />
      <div className="flex-1 flex flex-col min-h-screen">
        <Header currentPage={currentPage} onPageChange={setCurrentPage} />
        {currentPage === "userform" ? (
          <UserForm />
        ) : currentPage === "boards" ? (
          <BoardsList
            boards={boards}
            onDeleteBoard={deleteBoard}
            onAddBoard={addBoard}
          />
        ) : (
          <MainDashboard tasks={filteredTasks} boards={boards} />
        )}
      </div>
    </div>
  );
}

export default App;
