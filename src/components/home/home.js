import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "../gallery/carousel";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  homeTitle: {
    display: "flex",
    justifyContent: "center",
    fontSize: (media480) => (media480 ? 26 : 36),
    marginBottom: 10,
    backgroundImage:
      "linear-gradient(90deg, #e48a28 20%, #b59649 80%, #8a405a)",
    "-webkit-background-clip": "text",
    "-moz-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    "-moz-text-fill-color": "transparent",
  },
  memberTitle: {
    fontSize: (media480) => (media480 ? 24 : 32),
    marginBottom: 10,
    backgroundImage:
      "linear-gradient(90deg, #e48a28 20%, #b59649 80%, #8a405a)",
    "-webkit-background-clip": "text",
    "-moz-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    "-moz-text-fill-color": "transparent",
  },
  memberName: {
    fontSize: (media480) => (media480 ? 20 : 28),
  },
  soon: {
    fontSize: (media480) => (media480 ? 15 : 20),
    marginTop: 20,
  },
}));

const Home = () => {
  const { t } = useTranslation();
  const media480 = useMediaQuery("(max-width:480px)");

  const classes = useStyles(media480);

  return (
    <div className="home-page">
      <div className={classes.homeTitle}>{t("home-page.welcome-message")}</div>
      <Carousel />
      <hr className="line-break" />
      <div className={classes.soon}>{t("misc.coming-soon")}</div>
    </div>
  );
};

export default Home;
