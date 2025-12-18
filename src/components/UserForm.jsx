import { useState } from "react";

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  return (
    <div className="w-full max-w-[1000px] mx-auto py-12 px-16 bg-white rounded-2xl shadow-xl min-h-[calc(100vh-100px)]">
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-8 rounded-xl mb-10 text-white">
        <h2 className="text-3xl font-bold mb-2 text-white tracking-tight">
          Форма пользователя
        </h2>
        <p className="text-base opacity-90 font-normal m-0">
          Заполните свои данные
        </p>
      </div>

      <form className="flex flex-col gap-7">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block mb-2.5 text-[15px] font-semibold text-gray-700"
            >
              Имя
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Введите ваше имя"
              className="w-full py-3.5 px-4 text-base border-2 border-gray-200 rounded-lg outline-none transition-all duration-300 bg-gray-50 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2.5 text-[15px] font-semibold text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              className="w-full py-3.5 px-4 text-base border-2 border-gray-200 rounded-lg outline-none transition-all duration-300 bg-gray-50 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="birthDate"
              className="block mb-2.5 text-[15px] font-semibold text-gray-700"
            >
              Дата рождения
            </label>
            <input
              id="birthDate"
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="w-full py-3.5 px-4 text-base border-2 border-gray-200 rounded-lg outline-none transition-all duration-300 bg-gray-50 cursor-pointer focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
            />
          </div>

          <div>
            <label className="block mb-2.5 text-[15px] font-semibold text-gray-700">
              Пол
            </label>
            <div className="flex gap-6 mt-2">
              <label
                className={`flex items-center gap-2.5 cursor-pointer text-base py-3 px-5 rounded-lg border-2 transition-all duration-200 flex-1 justify-center ${
                  gender === "Male"
                    ? "border-indigo-500 bg-indigo-50"
                    : "border-gray-200 hover:border-indigo-300 hover:bg-gray-50"
                }`}
              >
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-5 h-5 cursor-pointer accent-indigo-500"
                />
                <span
                  className={
                    gender === "Male" ? "font-semibold" : "font-normal"
                  }
                >
                  Male
                </span>
              </label>
              <label
                className={`flex items-center gap-2.5 cursor-pointer text-base py-3 px-5 rounded-lg border-2 transition-all duration-200 flex-1 justify-center ${
                  gender === "Female"
                    ? "border-indigo-500 bg-indigo-50"
                    : "border-gray-200 hover:border-indigo-300 hover:bg-gray-50"
                }`}
              >
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-5 h-5 cursor-pointer accent-indigo-500"
                />
                <span
                  className={
                    gender === "Female" ? "font-semibold" : "font-normal"
                  }
                >
                  Female
                </span>
              </label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="country"
              className="block mb-2.5 text-[15px] font-semibold text-gray-700"
            >
              Страна
            </label>
            <select
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full py-3.5 px-4 text-base border-2 border-gray-200 rounded-lg outline-none bg-gray-50 cursor-pointer transition-all duration-300 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
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
              className="block mb-2.5 text-[15px] font-semibold text-gray-700"
            >
              Город
            </label>
            <input
              id="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Введите название города"
              className="w-full py-3.5 px-4 text-base border-2 border-gray-200 rounded-lg outline-none transition-all duration-300 bg-gray-50 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
            />
          </div>
        </div>
      </form>

      <div className="mt-12 p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-gray-200 shadow-sm">
        <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-3">
          <span className="text-2xl">📋</span>
          Введенные данные
        </h3>
        <div className="grid grid-cols-2 gap-5">
          <div className="p-4 bg-white rounded-lg border border-gray-200">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
              Имя
            </div>
            <div className="text-lg font-medium text-gray-800">
              {name || "—"}
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border border-gray-200">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
              Email
            </div>
            <div className="text-lg font-medium text-gray-800">
              {email || "—"}
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border border-gray-200">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
              Дата рождения
            </div>
            <div className="text-lg font-medium text-gray-800">
              {birthDate || "—"}
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border border-gray-200">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
              Пол
            </div>
            <div className="text-lg font-medium text-gray-800">
              {gender || "—"}
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border border-gray-200">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
              Страна
            </div>
            <div className="text-lg font-medium text-gray-800">
              {country || "—"}
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border border-gray-200">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
              Город
            </div>
            <div className="text-lg font-medium text-gray-800">
              {city || "—"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserForm;
