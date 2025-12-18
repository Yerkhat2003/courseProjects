import TaskList from "./TaskList";

function MainDashboard({ tasks, boards }) {
  return (
    <main className="p-8 bg-gray-50 flex-1 min-h-[calc(100vh-100px)]">
      {boards && boards.length > 0 ? (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Мои доски</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {boards.map((board) => (
              <div
                key={board.id}
                className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex flex-col hover:border-blue-500 hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <h3 className="text-white text-xl font-semibold mb-2">
                  {board.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 flex-grow">
                  {board.description}
                </p>
                {board.createdAt && (
                  <span className="text-gray-400 text-xs">
                    Создано: {board.createdAt}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {tasks && <TaskList tasks={tasks} />}
    </main>
  );
}

export default MainDashboard;
