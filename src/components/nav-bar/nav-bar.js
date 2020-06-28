import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useTranslation } from "react-i18next";
import TranslateIcon from "@material-ui/icons/Translate";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import UIMode from "../utils/ui-mode";
import Drawer from "../utils/drawer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "sticky",
    zIndex: 10,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: (media480) => (media480 ? 20 : 34),
    marginLeft: (media480) => (media480 ? -10 : 0),
  },
  langSwitch: {
    display: "flex",
    alignItems: "center",
    width: 100,
  },
  langButton: {
    color: "inherit",
    marginLeft: 5,
  },
  routeLink: {
    color: "inherit",
    textDecoration: "none",
  },
  linkText: {
    fontSize: 18,
    fontWeight: 600,
    display: (media480) => media480 && "none",
  },
}));

const langMap = {
  ಕನ್ನಡ: "kan",
  English: "en",
};

const NavBar = ({ prefersDarkMode, setMode }) => {
  const media480 = useMediaQuery("(max-width:480px)");
  const classes = useStyles(media480);
  const [anchorEl, setAnchorEl] = useState(null);
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("ಕನ್ನಡ");
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    const lang = e.target.textContent;
    if (lang !== "") {
      i18n.changeLanguage(langMap[lang]);
      setLang(lang);
    }
    setAnchorEl(null);
  };

  const handleToggleDrawer = (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setToggleDrawer(!toggleDrawer);
  };

  return (
    <div className={classes.root}>
      <AppBar color="inherit">
        <Toolbar>
          {media480 && (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleToggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          )}
          {toggleDrawer && (
            <Drawer
              toggleDrawer={toggleDrawer}
              handleToggleDrawer={handleToggleDrawer}
            />
          )}
          <div className={classes.title}>
            <Link to="/" className={classes.routeLink}>
              {t("main.site-title")}
            </Link>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <div className={classes.linkText}>
              <Link to="/about" className={classes.routeLink}>
                {t("nav-links.about")}
              </Link>
            </div>
            <UIMode
              prefersDarkMode={prefersDarkMode}
              setMode={setMode}
              style={{ marginRight: -10 }}
            />
            <div className={classes.langSwitch} onClick={handleMenu}>
              <IconButton
                aria-label="language selector"
                aria-haspopup="true"
                color="inherit"
                disableRipple
              >
                <TranslateIcon />
                <Typography className={classes.langButton}>{lang}</Typography>
                <ExpandMoreIcon />
              </IconButton>
            </div>

            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>ಕನ್ನಡ</MenuItem>
              <MenuItem onClick={handleClose}>English</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
