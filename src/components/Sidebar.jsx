function Sidebar() {
  const menuItems = [
    { icon: '📋', label: 'Все задачи' },
    { icon: '⭐', label: 'Важное' },
    { icon: '✅', label: 'Завершённые' },
    { icon: '⚙️', label: 'Настройки' }
  ];

  return (
    <aside style={{
      width: '260px',
      backgroundColor: '#ffffff',
      padding: '24px 0',
      borderRight: '1px solid #e5e7eb',
      minHeight: '100vh',
      boxSizing: 'border-box',
      boxShadow: '2px 0 8px rgba(0, 0, 0, 0.04)'
    }}>
      <h2 style={{
        fontSize: '12px',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        color: '#6b7280',
        padding: '0 24px',
        marginBottom: '16px'
      }}>
        Меню
      </h2>
      <ul style={{ 
        listStyle: 'none', 
        padding: 0,
        margin: 0
      }}>
        {menuItems.map((item, index) => (
          <li 
            key={index}
            style={{
              padding: '12px 24px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              borderLeft: '3px solid transparent',
              marginBottom: '4px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f3f4f6';
              e.currentTarget.style.borderLeftColor = '#667eea';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderLeftColor = 'transparent';
            }}
          >
            <span style={{ 
              marginRight: '12px',
              fontSize: '18px'
            }}>
              {item.icon}
            </span>
            <span style={{
              fontSize: '15px',
              fontWeight: '500',
              color: '#1f2937'
            }}>
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;

