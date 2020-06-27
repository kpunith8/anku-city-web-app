import { useEffect } from "react";
import ReactGA from "react-ga";

const GOOGLE_ANALYTICS_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID;
const IS_PRODUCTION = process.env.NODE_ENV === "production";

const useGA = (pathName) => {
  useEffect(() => {
    if (IS_PRODUCTION) {
      ReactGA.initialize(GOOGLE_ANALYTICS_ID);
      ReactGA.pageview(pathName);
    }
  }, [pathName]);
};

export default useGA;
