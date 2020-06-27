import { useEffect } from "react";
import { GOOGLE_ANALYTICS_ID } from "./site-env";
import ReactGA from "react-ga";

const GOOGLE_ANALYTICS_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID;

const useGA = (pathName) => {
  useEffect(() => {
    ReactGA.initialize(GOOGLE_ANALYTICS_ID);
    ReactGA.pageview(pathName);
  }, [pathName]);
};

export default useGA;
