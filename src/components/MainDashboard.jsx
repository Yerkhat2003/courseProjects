import TaskList from "./TaskList";

function MainDashboard({ tasks }) {
  return (
    <main
      style={{
        padding: "32px",
        backgroundColor: "#f5f7fa",
        flex: 1,
        minHeight: "calc(100vh - 100px)",
      }}
    >
      <TaskList tasks={tasks} />
    </main>
  );
}

export default MainDashboard;
