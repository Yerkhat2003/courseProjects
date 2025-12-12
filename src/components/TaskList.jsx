import styles from "./TaskList.module.css";

function TaskItem({ task }) {
  const getStatusClass = (status) => {
    if (status === "Новая") return styles.statusNew;
    if (status === "В процессе") return styles.statusInProgress;
    if (status === "Выполнено") return styles.statusCompleted;
    return styles.statusNew;
  };

  const getPriorityClass = (priority) => {
    if (priority === "Высокий") return styles.priorityHigh;
    if (priority === "Средний") return styles.priorityMedium;
    if (priority === "Низкий") return styles.priorityLow;
    return styles.priorityMedium;
  };

  return (
    <div className={styles.taskCard}>
      <div className={styles.taskHeader}>
        <h3 className={styles.taskTitle}>{task.title}</h3>
        <span className={`${styles.taskStatus} ${getStatusClass(task.status)}`}>
          {task.status}
        </span>
      </div>
      <p className={styles.taskDescription}>{task.description}</p>
      <div className={styles.taskFooter}>
        <span
          className={`${styles.taskPriority} ${getPriorityClass(
            task.priority
          )}`}
        >
          {task.priority}
        </span>
        <span className={styles.taskDueDate}>Срок: {task.dueDate}</span>
      </div>
    </div>
  );
}

function TaskList({ tasks }) {
  if (!tasks || tasks.length === 0) {
    return (
      <div className={styles.taskList}>
        <h2 className={styles.taskListTitle}>Список задач</h2>
        <p className={styles.emptyState}>Нет задач</p>
      </div>
    );
  }

  return (
    <div className={styles.taskList}>
      <h2 className={styles.taskListTitle}>Список задач</h2>
      <p className={styles.taskListDescription}>
        Всего задач: {tasks.length}. Используются данные, переданные через
        props.
      </p>
      <div className={styles.tasksContainer}>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
