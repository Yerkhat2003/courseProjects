function Sidebar({
  selectedFilter,
  onFilterChange,
  onPageChange,
  currentPage,
}) {
  const menuItems = [
    { icon: "📋", label: "Все задачи", page: "tasks" },
    { icon: "⭐", label: "Важное", page: "tasks" },
    { icon: "✅", label: "Завершённые", page: "tasks" },
    { icon: "📌", label: "Доски", page: "boards" },
    { icon: "👤", label: "Форма пользователя", page: "userform" },
    { icon: "⚙️", label: "Настройки", page: "settings" },
  ];

  const handleItemClick = (label, page) => {
    if (label !== "Настройки") {
      if (page === "userform") {
        onPageChange("userform");
      } else if (page === "boards") {
        onPageChange("boards");
      } else {
        onFilterChange(label);
        onPageChange("tasks");
      }
    }
  };

  return (
    <aside className="w-[260px] bg-white py-6 border-r border-gray-200 min-h-screen box-border shadow-sm">
      <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-500 px-6 mb-4">
        Меню
      </h2>
      <ul className="list-none p-0 m-0">
        {menuItems.map((item, index) => {
          const isActive =
            (item.page === "userform" && currentPage === "userform") ||
            (item.page === "boards" && currentPage === "boards") ||
            (item.page === "tasks" &&
              selectedFilter === item.label &&
              currentPage === "tasks");
          return (
            <li
              key={index}
              onClick={() => handleItemClick(item.label, item.page)}
              className={`py-3 px-6 cursor-pointer transition-all duration-200 mb-1 ${
                isActive
                  ? "bg-gray-100 border-l-4 border-indigo-500"
                  : "border-l-4 border-transparent hover:bg-gray-100 hover:border-l-4 hover:border-indigo-500"
              }`}
            >
              <span className="mr-3 text-lg">{item.icon}</span>
              <span
                className={`text-[15px] ${
                  isActive
                    ? "font-semibold text-indigo-500"
                    : "font-medium text-gray-800"
                }`}
              >
                {item.label}
              </span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
