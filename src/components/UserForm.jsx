import { useState } from "react";

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "48px 64px",
        backgroundColor: "white",
        borderRadius: "16px",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
        minHeight: "calc(100vh - 100px)",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          padding: "32px 40px",
          borderRadius: "12px",
          marginBottom: "40px",
          color: "white",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "700",
            marginBottom: "8px",
            color: "white",
            letterSpacing: "-0.5px",
          }}
        >
          Форма пользователя
        </h2>
        <p
          style={{
            fontSize: "16px",
            opacity: 0.9,
            fontWeight: "400",
            margin: 0,
          }}
        >
          Заполните свои данные
        </p>
      </div>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "28px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
          }}
        >
          <div>
            <label
              htmlFor="name"
              style={{
                display: "block",
                marginBottom: "10px",
                fontSize: "15px",
                fontWeight: "600",
                color: "#374151",
              }}
            >
              Имя
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Введите ваше имя"
              style={{
                width: "100%",
                padding: "14px 16px",
                fontSize: "16px",
                border: "2px solid #e5e7eb",
                borderRadius: "8px",
                outline: "none",
                transition: "all 0.3s ease",
                backgroundColor: "#fafafa",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#667eea";
                e.target.style.backgroundColor = "white";
                e.target.style.boxShadow = "0 0 0 3px rgba(102, 126, 234, 0.1)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e5e7eb";
                e.target.style.backgroundColor = "#fafafa";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              style={{
                display: "block",
                marginBottom: "10px",
                fontSize: "15px",
                fontWeight: "600",
                color: "#374151",
              }}
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              style={{
                width: "100%",
                padding: "14px 16px",
                fontSize: "16px",
                border: "2px solid #e5e7eb",
                borderRadius: "8px",
                outline: "none",
                transition: "all 0.3s ease",
                backgroundColor: "#fafafa",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#667eea";
                e.target.style.backgroundColor = "white";
                e.target.style.boxShadow = "0 0 0 3px rgba(102, 126, 234, 0.1)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e5e7eb";
                e.target.style.backgroundColor = "#fafafa";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
          }}
        >
          <div>
            <label
              htmlFor="birthDate"
              style={{
                display: "block",
                marginBottom: "10px",
                fontSize: "15px",
                fontWeight: "600",
                color: "#374151",
              }}
            >
              Дата рождения
            </label>
            <input
              id="birthDate"
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              style={{
                width: "100%",
                padding: "14px 16px",
                fontSize: "16px",
                border: "2px solid #e5e7eb",
                borderRadius: "8px",
                outline: "none",
                transition: "all 0.3s ease",
                backgroundColor: "#fafafa",
                cursor: "pointer",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#667eea";
                e.target.style.backgroundColor = "white";
                e.target.style.boxShadow = "0 0 0 3px rgba(102, 126, 234, 0.1)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e5e7eb";
                e.target.style.backgroundColor = "#fafafa";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          <div>
            <label
              style={{
                display: "block",
                marginBottom: "10px",
                fontSize: "15px",
                fontWeight: "600",
                color: "#374151",
              }}
            >
              Пол
            </label>
            <div
              style={{
                display: "flex",
                gap: "24px",
                marginTop: "8px",
              }}
            >
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  cursor: "pointer",
                  fontSize: "16px",
                  padding: "12px 20px",
                  borderRadius: "8px",
                  border: `2px solid ${
                    gender === "Male" ? "#667eea" : "#e5e7eb"
                  }`,
                  backgroundColor:
                    gender === "Male" ? "#f0f4ff" : "transparent",
                  transition: "all 0.2s ease",
                  flex: 1,
                  justifyContent: "center",
                }}
                onMouseEnter={(e) => {
                  if (gender !== "Male") {
                    e.currentTarget.style.borderColor = "#c7d2fe";
                    e.currentTarget.style.backgroundColor = "#f9fafb";
                  }
                }}
                onMouseLeave={(e) => {
                  if (gender !== "Male") {
                    e.currentTarget.style.borderColor = "#e5e7eb";
                    e.currentTarget.style.backgroundColor = "transparent";
                  }
                }}
              >
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={(e) => setGender(e.target.value)}
                  style={{
                    width: "20px",
                    height: "20px",
                    cursor: "pointer",
                    accentColor: "#667eea",
                  }}
                />
                <span style={{ fontWeight: gender === "Male" ? "600" : "400" }}>
                  Male
                </span>
              </label>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  cursor: "pointer",
                  fontSize: "16px",
                  padding: "12px 20px",
                  borderRadius: "8px",
                  border: `2px solid ${
                    gender === "Female" ? "#667eea" : "#e5e7eb"
                  }`,
                  backgroundColor:
                    gender === "Female" ? "#f0f4ff" : "transparent",
                  transition: "all 0.2s ease",
                  flex: 1,
                  justifyContent: "center",
                }}
                onMouseEnter={(e) => {
                  if (gender !== "Female") {
                    e.currentTarget.style.borderColor = "#c7d2fe";
                    e.currentTarget.style.backgroundColor = "#f9fafb";
                  }
                }}
                onMouseLeave={(e) => {
                  if (gender !== "Female") {
                    e.currentTarget.style.borderColor = "#e5e7eb";
                    e.currentTarget.style.backgroundColor = "transparent";
                  }
                }}
              >
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={(e) => setGender(e.target.value)}
                  style={{
                    width: "20px",
                    height: "20px",
                    cursor: "pointer",
                    accentColor: "#667eea",
                  }}
                />
                <span
                  style={{ fontWeight: gender === "Female" ? "600" : "400" }}
                >
                  Female
                </span>
              </label>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
          }}
        >
          <div>
            <label
              htmlFor="country"
              style={{
                display: "block",
                marginBottom: "10px",
                fontSize: "15px",
                fontWeight: "600",
                color: "#374151",
              }}
            >
              Страна
            </label>
            <select
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              style={{
                width: "100%",
                padding: "14px 16px",
                fontSize: "16px",
                border: "2px solid #e5e7eb",
                borderRadius: "8px",
                outline: "none",
                backgroundColor: "#fafafa",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#667eea";
                e.target.style.backgroundColor = "white";
                e.target.style.boxShadow = "0 0 0 3px rgba(102, 126, 234, 0.1)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e5e7eb";
                e.target.style.backgroundColor = "#fafafa";
                e.target.style.boxShadow = "none";
              }}
            >
              <option value="">Выберите страну</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="USA">USA</option>
              <option value="Germany">Germany</option>
              <option value="Japan">Japan</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="city"
              style={{
                display: "block",
                marginBottom: "10px",
                fontSize: "15px",
                fontWeight: "600",
                color: "#374151",
              }}
            >
              Город
            </label>
            <input
              id="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Введите название города"
              style={{
                width: "100%",
                padding: "14px 16px",
                fontSize: "16px",
                border: "2px solid #e5e7eb",
                borderRadius: "8px",
                outline: "none",
                transition: "all 0.3s ease",
                backgroundColor: "#fafafa",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#667eea";
                e.target.style.backgroundColor = "white";
                e.target.style.boxShadow = "0 0 0 3px rgba(102, 126, 234, 0.1)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e5e7eb";
                e.target.style.backgroundColor = "#fafafa";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>
        </div>
      </form>

      <div
        style={{
          marginTop: "48px",
          padding: "32px 40px",
          background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",
          borderRadius: "12px",
          border: "2px solid #e5e7eb",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
        }}
      >
        <h3
          style={{
            fontSize: "22px",
            fontWeight: "700",
            marginBottom: "24px",
            color: "#1f2937",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span style={{ fontSize: "24px" }}>📋</span>
          Введенные данные
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          <div
            style={{
              padding: "16px 20px",
              backgroundColor: "white",
              borderRadius: "8px",
              border: "1px solid #e5e7eb",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                fontWeight: "600",
                color: "#6b7280",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                marginBottom: "6px",
              }}
            >
              Имя
            </div>
            <div
              style={{
                fontSize: "18px",
                fontWeight: "500",
                color: "#1f2937",
              }}
            >
              {name || "—"}
            </div>
          </div>
          <div
            style={{
              padding: "16px 20px",
              backgroundColor: "white",
              borderRadius: "8px",
              border: "1px solid #e5e7eb",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                fontWeight: "600",
                color: "#6b7280",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                marginBottom: "6px",
              }}
            >
              Email
            </div>
            <div
              style={{
                fontSize: "18px",
                fontWeight: "500",
                color: "#1f2937",
              }}
            >
              {email || "—"}
            </div>
          </div>
          <div
            style={{
              padding: "16px 20px",
              backgroundColor: "white",
              borderRadius: "8px",
              border: "1px solid #e5e7eb",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                fontWeight: "600",
                color: "#6b7280",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                marginBottom: "6px",
              }}
            >
              Дата рождения
            </div>
            <div
              style={{
                fontSize: "18px",
                fontWeight: "500",
                color: "#1f2937",
              }}
            >
              {birthDate || "—"}
            </div>
          </div>
          <div
            style={{
              padding: "16px 20px",
              backgroundColor: "white",
              borderRadius: "8px",
              border: "1px solid #e5e7eb",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                fontWeight: "600",
                color: "#6b7280",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                marginBottom: "6px",
              }}
            >
              Пол
            </div>
            <div
              style={{
                fontSize: "18px",
                fontWeight: "500",
                color: "#1f2937",
              }}
            >
              {gender || "—"}
            </div>
          </div>
          <div
            style={{
              padding: "16px 20px",
              backgroundColor: "white",
              borderRadius: "8px",
              border: "1px solid #e5e7eb",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                fontWeight: "600",
                color: "#6b7280",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                marginBottom: "6px",
              }}
            >
              Страна
            </div>
            <div
              style={{
                fontSize: "18px",
                fontWeight: "500",
                color: "#1f2937",
              }}
            >
              {country || "—"}
            </div>
          </div>
          <div
            style={{
              padding: "16px 20px",
              backgroundColor: "white",
              borderRadius: "8px",
              border: "1px solid #e5e7eb",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                fontWeight: "600",
                color: "#6b7280",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                marginBottom: "6px",
              }}
            >
              Город
            </div>
            <div
              style={{
                fontSize: "18px",
                fontWeight: "500",
                color: "#1f2937",
              }}
            >
              {city || "—"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserForm;
