function MainDashboard() {
  return (
    <main
      style={{
        padding: "32px",
        backgroundColor: "#f5f7fa",
        flex: 1,
        minHeight: "calc(100vh - 100px)",
      }}
    >
      <div style={{ marginBottom: "24px" }}>
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "700",
            color: "#1f2937",
            marginBottom: "8px",
          }}
        >
          Главная панель
        </h2>
        <p
          style={{
            fontSize: "15px",
            color: "#6b7280",
            lineHeight: "1.6",
          }}
        >
          Здесь в будущем будет список задач, статистика и другие виджеты.
        </p>
      </div>

      <div
        style={{
          marginTop: "24px",
          padding: "24px",
          border: "none",
          borderRadius: "12px",
          backgroundColor: "#ffffff",
          boxShadow:
            "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
          transition: "box-shadow 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow =
            "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow =
            "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)";
        }}
      >
        <h3
          style={{
            fontSize: "18px",
            fontWeight: "600",
            color: "#1f2937",
            marginBottom: "8px",
          }}
        >
          Пример блока
        </h3>
        <p
          style={{
            fontSize: "14px",
            color: "#6b7280",
            lineHeight: "1.6",
            margin: 0,
          }}
        >
          Это просто заглушка, чтобы увидеть структуру страницы.
        </p>
      </div>
    </main>
  );
}

export default MainDashboard;
