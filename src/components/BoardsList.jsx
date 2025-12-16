function BoardsList({ boards, onDeleteBoard, onAddBoard }) {
  const handleAddBoard = () => {
    const title = prompt("Введите название доски:");
    if (!title) return;

    const description = prompt("Введите описание доски:") || "";
    const newId = boards.length > 0 ? Math.max(...boards.map((b) => b.id)) + 1 : 1;
    const newBoard = {
      id: newId,
      title,
      description,
      createdAt: new Date().toISOString().split("T")[0],
    };

    onAddBoard(newBoard);
  };

  return (
    <div
      style={{
        padding: "32px",
        backgroundColor: "#f5f7fa",
        flex: 1,
        minHeight: "calc(100vh - 100px)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <h1
          style={{
            fontSize: "28px",
            fontWeight: "700",
            color: "#1f2937",
            margin: 0,
          }}
        >
          Доски
        </h1>
        <button
          onClick={handleAddBoard}
          style={{
            padding: "12px 24px",
            backgroundColor: "#667eea",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#5568d3";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#667eea";
          }}
        >
          + Добавить доску
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {boards.map((board) => (
          <div
            key={board.id}
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "24px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
              transition: "all 0.2s ease",
              border: "1px solid #e5e7eb",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.12)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.08)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "12px",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#1f2937",
                  margin: 0,
                  flex: 1,
                }}
              >
                {board.title}
              </h3>
              <button
                onClick={() => onDeleteBoard(board.id)}
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  fontSize: "20px",
                  cursor: "pointer",
                  color: "#ef4444",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#fee2e2";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
                title="Удалить доску"
              >
                ×
              </button>
            </div>
            <p
              style={{
                fontSize: "14px",
                color: "#6b7280",
                marginBottom: "16px",
                lineHeight: "1.5",
              }}
            >
              {board.description}
            </p>
            <div
              style={{
                fontSize: "12px",
                color: "#9ca3af",
                paddingTop: "12px",
                borderTop: "1px solid #e5e7eb",
              }}
            >
              Создано: {board.createdAt}
            </div>
          </div>
        ))}
      </div>

      {boards.length === 0 && (
        <div
          style={{
            textAlign: "center",
            padding: "60px 20px",
            color: "#9ca3af",
          }}
        >
          <p style={{ fontSize: "18px", marginBottom: "8px" }}>Нет досок</p>
          <p style={{ fontSize: "14px" }}>
            Нажмите "Добавить доску", чтобы создать первую доску
          </p>
        </div>
      )}
    </div>
  );
}

export default BoardsList;

