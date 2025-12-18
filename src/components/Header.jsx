function Header({ currentPage, onPageChange }) {
  const handleNavigation = (page) => {
    onPageChange(page);
  };

  return (
    <header className="bg-slate-800 text-white px-4 py-3 sticky top-0 z-50 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold">TaskNest</h1>
          <span className="text-gray-300 text-sm">
            Ваш центр управления задачами
          </span>
        </div>
        <nav className="flex items-center gap-4">
          <button
            onClick={() => handleNavigation("tasks")}
            className={`transition-colors duration-200 px-3 py-2 rounded-md ${
              currentPage === "tasks"
                ? "text-white bg-slate-700"
                : "text-gray-300 hover:text-white hover:bg-slate-700"
            }`}
          >
            Задачи
          </button>
          <button
            onClick={() => handleNavigation("boards")}
            className={`transition-colors duration-200 px-3 py-2 rounded-md ${
              currentPage === "boards"
                ? "text-white bg-slate-700"
                : "text-gray-300 hover:text-white hover:bg-slate-700"
            }`}
          >
            Доски
          </button>
          <button
            onClick={() => handleNavigation("userform")}
            className={`transition-colors duration-200 px-4 py-2 rounded-md border ${
              currentPage === "userform"
                ? "text-white bg-slate-700 border-slate-500"
                : "text-gray-300 hover:text-white hover:bg-slate-700 border-slate-600 hover:border-slate-500"
            }`}
          >
            Профиль
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
