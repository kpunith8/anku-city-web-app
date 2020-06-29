import React, { useState, lazy } from "react";
import { Container } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useLocalStorage } from "react-use";
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import NavBar from "./components/nav-bar/nav-bar";
import Footer from "./components/utils/footer";
import BottomNav from "./components/utils/bottom-nav";

const About = lazy(() => import("./components/about/about"));
const Home = lazy(() => import("./components/home/home"));

const MainPage = () => {
  const [defaultUIMode] = useLocalStorage("anku-city-ui-mode", "dark");
  const [selectedUIMode, setSelectedUIMode] = useState(defaultUIMode);
  const location = useLocation();
  const media480 = useMediaQuery("(max-width:480px)");

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: selectedUIMode,
        },
      }),
    [selectedUIMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar
        prefersDarkMode={selectedUIMode === "dark" ? true : false}
        setMode={setSelectedUIMode}
      />
      <Container style={{ marginTop: 80 }}>
        <TransitionGroup className="transition-group">
          <CSSTransition key={location.key} timeout={350} classNames="item">
            <section className="route-section">
              <Switch location={location}>
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
              </Switch>

              <hr className="line-break" />

              <Footer />
            </section>
          </CSSTransition>
        </TransitionGroup>
      </Container>
      {media480 && <BottomNav />}
    </ThemeProvider>
  );
};

export default MainPage;
