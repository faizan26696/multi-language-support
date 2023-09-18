import React from "react";
import i18next from "i18next";

const LanguageSwitcher = () => {
  const handleChange = (e) => {
    // alert("Selected language: " + e.target.value);

    i18next.changeLanguage(e.target.value);
  };

  return (
    <select
      onChange={handleChange}
      className="bg-gray-200 p-[0.2rem] text-gray-500 rounded-[6px] cursor-pointer outline-none"
    >
      <option>🌐 Select Language</option>

      <option value={"en"}>English</option>

      <option value={"hi"}>Hindi</option>

      <option value={"ru"}>Russian</option>

      <option value={"chi"}>Chinese</option>
    </select>
  );
};

export default LanguageSwitcher;
