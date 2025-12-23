import "./Header.scss";

function Header({ currentPage, onPageChange }) {
  const handleNavigation = (page) => {
    onPageChange(page);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-brand">
          <h1 className="brand-title">TaskNest</h1>
          <span className="brand-subtitle">
            Ваш центр управления задачами
          </span>
        </div>
        <nav className="header-nav">
          <button
            onClick={() => handleNavigation("tasks")}
            className={`nav-button ${currentPage === "tasks" ? "active" : ""}`}
          >
            Задачи
          </button>
          <button
            onClick={() => handleNavigation("boards")}
            className={`nav-button ${currentPage === "boards" ? "active" : ""}`}
          >
            Доски
          </button>
          <button
            onClick={() => handleNavigation("userform")}
            className={`nav-button profile-button ${currentPage === "userform" ? "active" : ""}`}
          >
            Профиль
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
