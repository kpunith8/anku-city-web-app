import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  contact: {
    display: "grid",
    alignItems: "center",
    justifyItems: "center",
    padding: 10,
  },
}));

const Footer = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div style={{ margin: 0 }}>
      <div
        className={classes.contact}
        style={{ color: "black", marginTop: -10 }}
      >
        <div style={{ display: "flex", marginTop: 0, marginBottom: 70 }}>
          <Typography color="textSecondary">
            {t("footer.copyright")} &copy; {new Date().getFullYear()}{" "}
            {t("footer.author-name")}, {t("footer.village-name")}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
