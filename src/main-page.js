import React, { useState, lazy } from "react";
import { Container } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useLocalStorage } from "react-use";
import NavBar from "./components/nav-bar/nav-bar";
import { Switch, Route, useLocation } from "react-router-dom";
import Footer from "./components/utils/footer";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const About = lazy(() => import("./components/about/about"));
const Home = lazy(() => import("./components/home/home"));

const MainPage = () => {
  const [defaultUIMode] = useLocalStorage("anku-city-ui-mode", "dark");
  const [selectedUIMode, setSelectedUIMode] = useState(defaultUIMode);
  const location = useLocation();

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
                <Route path="/about" exact>
                  <About />
                </Route>
                <Route path="/" exact>
                  <Home />
                </Route>
              </Switch>

              <hr className="line-break" />

              <Footer />
            </section>
          </CSSTransition>
        </TransitionGroup>
      </Container>
    </ThemeProvider>
  );
};

export default MainPage;
