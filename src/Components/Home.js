import NavBar from "./NavBar";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-purple-200 h-[100vh]">
      <NavBar />

      <h1 className=" mt-[5rem]">
        {t("Home")} {t("Page")}
      </h1>
      <div>
        <h2>{t("WelcomeHome")}</h2>
      </div>
    </div>
  );
};
export default Home;
