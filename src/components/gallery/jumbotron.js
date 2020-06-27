import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useTranslation } from "react-i18next";
import fullView from "../../assets/images/full-view.jpg";
import natureView from "../../assets/images/view.jpg";
import templeNight from "../../assets/images/temple-night.jpg";
import basanaKonda from "../../assets/images/basavana-konda.jpg";
import lakeView from "../../assets/images/lake.jpg";
import youth from "../../assets/images/youth-1.jpg";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: (media480) => (media480 ? 500 : 1200),
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: "1",
  },
  jumbotronFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    paddingLeft: theme.spacing(4),

    backgroundColor: theme.palette.background.default,
  },
  jumboText: {
    fontSize: (media480) => (media480 ? 18 : 25),
  },
  img: {
    height: (media480) => (media480 ? 400 : 650),
    display: "flex",
    flex: 1,
    maxWidth: (media480) => (media480 ? 500 : 1200),
    overflow: "hidden",
    width: "100%",
    objectFit: "cover",
  },
}));

const Jumbotron = () => {
  const media480 = useMediaQuery("(max-width:480px)");
  const { t } = useTranslation();
  const tutorialSteps = [
    {
      label: t("images-caption.full-view"),
      imgPath: fullView,
    },
    {
      label: t("images-caption.nature-view"),
      imgPath: natureView,
    },
    {
      label: t("images-caption.basava-temple-night"),
      imgPath: templeNight,
    },
    {
      label: t("images-caption.basava-konda"),
      imgPath: basanaKonda,
    },
    {
      label: t("images-caption.lake"),
      imgPath: lakeView,
    },

    {
      label: t("images-caption.friends"),
      imgPath: youth,
    },
  ];

  const classes = useStyles(media480);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                className={classes.img}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Paper square elevation={0} className={classes.jumbotronFooter}>
        <Typography className={classes.jumboText}>
          {tutorialSteps[activeStep].label}
        </Typography>
      </Paper>
    </div>
  );
};

export default Jumbotron;