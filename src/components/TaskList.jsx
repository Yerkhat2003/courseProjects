function TaskItem({ task }) {
  const getStatusClasses = (status) => {
    if (status === "Новая") return "bg-blue-100 text-blue-800";
    if (status === "В процессе") return "bg-yellow-100 text-yellow-800";
    if (status === "Выполнено") return "bg-green-100 text-green-800";
    return "bg-blue-100 text-blue-800";
  };

  const getPriorityClasses = (priority) => {
    if (priority === "Высокий") return "bg-red-100 text-red-800";
    if (priority === "Средний") return "bg-yellow-100 text-yellow-800";
    if (priority === "Низкий") return "bg-indigo-100 text-indigo-800";
    return "bg-yellow-100 text-yellow-800";
  };

  return (
    <div className="p-5 rounded-xl bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-800 m-0 flex-1">
          {task.title}
        </h3>
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold uppercase whitespace-nowrap ml-3 ${getStatusClasses(
            task.status
          )}`}
        >
          {task.status}
        </span>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed mb-3">
        {task.description}
      </p>
      <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-200">
        <span
          className={`text-xs font-medium px-2.5 py-1 rounded-xl ${getPriorityClasses(
            task.priority
          )}`}
        >
          {task.priority}
        </span>
        <span className="text-xs text-gray-400 font-medium">
          Срок: {task.dueDate}
        </span>
      </div>
    </div>
  );
}

function TaskList({ tasks }) {
  if (!tasks || tasks.length === 0) {
    return (
      <div className="mt-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Список задач</h2>
        <p className="py-10 text-center text-gray-400 text-base">Нет задач</p>
      </div>
    );
  }

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Список задач</h2>
      <p className="text-[15px] text-gray-600 leading-relaxed mb-6">
        Всего задач: {tasks.length}. Используются данные, переданные через
        props.
      </p>
      <div className="flex flex-col gap-4">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
