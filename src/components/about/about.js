import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";
import useGA from "../utils/use-ga";

const useStyles = makeStyles((theme) => ({
  aboutTitle: {
    display: "flex",
    justifyContent: "center",
    fontSize: (media480) => (media480 ? 22 : 32),
    marginBottom: 10,
    backgroundImage:
      "linear-gradient(90deg, #e48a28 20%, #b59649 80%, #8a405a)",
    "-webkit-background-clip": "text",
    "-moz-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    "-moz-text-fill-color": "transparent",
  },
}));

const About = () => {
  useGA(window.location.pathname);
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <div>
      <div className={classes.aboutTitle}> {t("about-page.about")}</div>
      <div className={classes.aboutTitle}> {t("misc.coming-soon")}</div>
    </div>
  );
};

export default About;
