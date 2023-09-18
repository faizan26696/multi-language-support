import React from "react";
import { useTranslation } from "react-i18next";
import NavBar from "./NavBar";

const About = () => {
  const { t } = useTranslation();

  // console.log("Translation for 'About':", t("About"));
  // console.log("Translation for 'Page':", t("Page"));
  // console.log("Translation for 'WelcomeAbout':", t("WelcomeAbout"));

  return (
    <div className="bg-purple-200 h-[100vh]">
      <NavBar />
      <h1 className=" mt-[5rem]">
        {t("About")} {t("Page")}
      </h1>
      <div>
        <h2>{t("WelcomeAbout")}</h2>
      </div>
    </div>
  );
};

export default About;
