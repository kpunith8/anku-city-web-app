import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PlaceIcon from "@material-ui/icons/Place";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    bottom: 0,
    right: 0,
    position: "fixed",
    borderTop: "1px solid rgba(0,0,0, 0.5)",
    height: 60,
  },
  navTitle: {
    fontSize: 15,
    fontWeight: 500,
    color: "#e65c07",
  },
  navIcon: {
    fontSize: 26,
  },
}));

const BottomNav = () => {
  const [value, setValue] = useState(0);
  const classes = useStyles();
  const { t } = useTranslation();
  const history = useHistory();

  useEffect(() => {
    let pathValue = history.location.pathname === "/" ? 0 : 1;
    setValue(pathValue);
  }, [history]);

  const onNavItemChange = (event, newValue) => setValue(newValue);

  return (
    <BottomNavigation
      value={value}
      onChange={onNavItemChange}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label={<div className={classes.navTitle}>{t("main.site-title")}</div>}
        icon={
          <HomeIcon
            className={classes.navIcon}
            style={{ color: value === 0 && "#077ae6" }}
          />
        }
        onClick={() => history.push("/")}
      />
      <BottomNavigationAction
        label={<div className={classes.navTitle}>{t("nav-links.about")}</div>}
        icon={
          <PlaceIcon
            className={classes.navIcon}
            style={{ color: value === 1 && "#077ae6" }}
          />
        }
        onClick={() => history.push("/about")}
      />
    </BottomNavigation>
  );
};

export default BottomNav;
