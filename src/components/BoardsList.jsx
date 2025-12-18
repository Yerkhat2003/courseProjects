function BoardsList({ boards, onDeleteBoard, onAddBoard }) {
  const handleAddBoard = () => {
    const title = prompt("Введите название доски:");
    if (!title) return;

    const description = prompt("Введите описание доски:") || "";
    const newId =
      boards.length > 0 ? Math.max(...boards.map((b) => b.id)) + 1 : 1;
    const newBoard = {
      id: newId,
      title,
      description,
      createdAt: new Date().toISOString().split("T")[0],
    };

    onAddBoard(newBoard);
  };

  return (
    <div className="p-8 bg-gray-50 flex-1 min-h-[calc(100vh-100px)]">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 m-0">Доски</h1>
        <button
          onClick={handleAddBoard}
          className="py-3 px-6 bg-indigo-500 text-white border-none rounded-lg text-base font-semibold cursor-pointer transition-all duration-200 hover:bg-indigo-600"
        >
          + Добавить доску
        </button>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
        {boards.map((board) => (
          <div
            key={board.id}
            className="bg-white rounded-xl p-6 shadow-sm transition-all duration-200 border border-gray-200 hover:shadow-md hover:-translate-y-0.5"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-semibold text-gray-800 m-0 flex-1">
                {board.title}
              </h3>
              <button
                onClick={() => onDeleteBoard(board.id)}
                className="bg-transparent border-none text-xl cursor-pointer text-red-500 py-1 px-2 rounded transition-all duration-200 hover:bg-red-50"
                title="Удалить доску"
              >
                ×
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              {board.description}
            </p>
            <div className="text-xs text-gray-400 pt-3 border-t border-gray-200">
              Создано: {board.createdAt}
            </div>
          </div>
        ))}
      </div>

      {boards.length === 0 && (
        <div className="text-center py-16 px-5 text-gray-400">
          <p className="text-lg mb-2">Нет досок</p>
          <p className="text-sm">
            Нажмите "Добавить доску", чтобы создать первую доску
          </p>
        </div>
      )}
    </div>
  );
}

export default BoardsList;
