import React, { useState, lazy } from "react";
import { Container } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useLocalStorage } from "react-use";
import NavBar from "./components/nav-bar/nav-bar";
import { Switch, Route } from "react-router-dom";

const About = lazy(() => import("./components/about/about"));
const Home = lazy(() => import("./components/home/home"));

const MainPage = () => {
  const [defaultUIMode] = useLocalStorage("anku-city-ui-mode", "dark");
  const [selectedUIMode, setSelectedUIMode] = useState(defaultUIMode);

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
      <Container style={{marginTop: 80}}>
        <Switch>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Container>
    </ThemeProvider>
  );
};

export default MainPage;
