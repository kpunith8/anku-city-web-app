import React from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (

      <div className="main-page">
        {t("welcome-message")}
      </div>

  );
};

export default Home;
