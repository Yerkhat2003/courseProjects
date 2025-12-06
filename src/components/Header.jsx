function Header() {
  return (
    <header
      style={{
        padding: "24px 32px",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <h1
        style={{
          fontSize: "28px",
          fontWeight: "700",
          marginBottom: "4px",
          letterSpacing: "-0.5px",
        }}
      >
        TaskNest
      </h1>
      <p
        style={{
          fontSize: "14px",
          opacity: 0.9,
          fontWeight: "400",
        }}
      >
        Ваш центр управления задачами
      </p>
    </header>
  );
}

export default Header;
