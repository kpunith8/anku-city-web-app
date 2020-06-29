import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import PlaceIcon from "@material-ui/icons/Place";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { uuid } from "uuidv4";

const useStyles = makeStyles((theme) => ({
  routeLink: {
    color: "inherit",
    textDecoration: "none",
    flexGrow: 1,
    fontSize: 24,
    marginLeft: 0,
  },
  drawerIcon: {
    fontSize: 34,
  },
  list: {
    width: 280,
  },
}));

const Drawer = ({ handleToggleDrawer, toggleDrawer }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <TransitionGroup>
      <CSSTransition unmountOnExit key={uuid()} timeout={400}>
        <SwipeableDrawer
          anchor="left"
          open={toggleDrawer}
          onClose={handleToggleDrawer}
          onOpen={handleToggleDrawer}
          transitionDuration={{ enter: 400, exit: 400 }}
        >
          <List className={classes.list}>
            <ListItem
              button
              key={t("main.site-title")}
              onClick={handleToggleDrawer}
            >
              <ListItemIcon>
                <HomeIcon className={classes.drawerIcon} />
              </ListItemIcon>
              <Link to="/" className={classes.routeLink}>
                {t("main.site-title")}
              </Link>
            </ListItem>

            <hr className="line-break" />

            <ListItem
              button
              key={t("nav-links.about")}
              onClick={handleToggleDrawer}
            >
              <ListItemIcon>
                <PlaceIcon className={classes.drawerIcon} />
              </ListItemIcon>
              <Link to="/about" className={classes.routeLink}>
                {t("nav-links.about")}
              </Link>
            </ListItem>
          </List>
        </SwipeableDrawer>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Drawer;
