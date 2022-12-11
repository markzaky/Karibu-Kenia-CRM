import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Datetime from "react-datetime";
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import NavPills from "/components/NavPills/NavPills.js";


import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function RightSection() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h3>Budget Calculator</h3>
          </div>
          <div className={classes.title}>
            <h3>
              <small></small>
            </h3>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={9}>
              <NavPills
                color="primary"
                tabs={[
                  {
                    tabButton: "Client Details",
                    tabIcon: List,
                    tabContent: (
                      <span>
                        <p>
                          Collaboratively administrate empowered markets via
                          plug-and-play networks. Dynamically procrastinate B2C
                          users after installed base benefits.
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Hotels",
                    tabIcon: Dashboard,
                    tabContent: (
                      <div>
                      <div className={classes.title}>
                        <h3>Enkorok Mara</h3>
                      </div>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                          <InputLabel className={classes.label}>
                            Check In Date
                          </InputLabel>
                          <br />
                          <FormControl fullWidth>
                            <Datetime
                              inputProps={{ placeholder: "Check In Date" }}
                            />
                          </FormControl>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6}>
                          <InputLabel className={classes.label}>
                            Check Out Date
                          </InputLabel>
                          <br />
                          <FormControl fullWidth>
                            <Datetime
                              inputProps={{ placeholder: "Check Out Date" }}
                            />
                          </FormControl>
                        </GridItem>
                      </GridContainer>

                      </div>
                    )
                  },
                  {
                    tabButton: "Parks",
                    tabIcon: Schedule,
                    tabContent: (
                      <span>
                        <p>
                          Efficiently unleash cross-media information without
                          cross-media value. Quickly maximize timely
                          deliverables for real-time schemas.
                        </p>
                        <br />
                        <p>
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions. Dramatically visualize
                          customer directed convergence without revolutionary
                          ROI. Collaboratively administrate empowered markets
                          via plug-and-play networks. Dynamically procrastinate
                          B2C users after installed base benefits.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Car and Driver fees",
                    tabIcon: List,
                    tabContent: (
                      <span>
                        <p>
                          Collaboratively administrate empowered markets via
                          plug-and-play networks. Dynamically procrastinate B2C
                          users after installed base benefits.
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                      </span>
                    )
                  }
                ]}
              />
            </GridItem>
            {/* <GridItem xs={12} sm={12} md={12} lg={6}>
              <NavPills
                color="rose"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 4, md: 4 },
                  contentGrid: { xs: 12, sm: 8, md: 8 }
                }}
                tabs={[
                  {
                    tabButton: "Dashboard",
                    tabIcon: Dashboard,
                    tabContent: (
                      <span>
                        <p>
                          Collaboratively administrate empowered markets via
                          plug-and-play networks. Dynamically procrastinate B2C
                          users after installed base benefits.
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Schedule",
                    tabIcon: Schedule,
                    tabContent: (
                      <span>
                        <p>
                          Efficiently unleash cross-media information without
                          cross-media value. Quickly maximize timely
                          deliverables for real-time schemas.
                        </p>
                        <br />
                        <p>
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions. Dramatically visualize
                          customer directed convergence without revolutionary
                          ROI. Collaboratively administrate empowered markets
                          via plug-and-play networks. Dynamically procrastinate
                          B2C users after installed base benefits.
                        </p>
                      </span>
                    )
                  }
                ]}
              />
            </GridItem> */}
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
