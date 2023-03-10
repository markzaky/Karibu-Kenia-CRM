import React from "react";
// react plugin for creating date-time-picker
import Datetime from "react-datetime";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import InputLabel from "@material-ui/core/InputLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Check from "@material-ui/icons/Check";
import FormControl from "@material-ui/core/FormControl";
import Tooltip from "@material-ui/core/Tooltip";
import Popover from "@material-ui/core/Popover";
// @material-ui/icons
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Close from "@material-ui/icons/Close";
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
import { getHotels } from '../../libs/sheets'
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import CustomDropdown from "/components/CustomDropdown/CustomDropdown.js";
import NavPills from "/components/NavPills/NavPills.js";
import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/javascriptStyles.js";
import styles1 from "/styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";

const useStylesBasic = makeStyles(styles1);
const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

export default function ClientDetails() {
  const classes = useStyles();
  const BasicClasses = useStylesBasic();
  const [checked, setChecked] = React.useState([24, 22]);
  const [anchorElLeft, setAnchorElLeft] = React.useState(null);
  const [anchorElTop, setAnchorElTop] = React.useState(null);
  const [anchorElBottom, setAnchorElBottom] = React.useState(null);
  const [anchorElRight, setAnchorElRight] = React.useState(null);
  const [classicModal, setClassicModal] = React.useState(false);
  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>Budget Generator</h2>
        </div>  
            <GridContainer>
              <GridItem xs={12} sm={12} md={6} lg={4}>
                <div className={classes.title}>
                    <h3>Hotels</h3>
                </div>
                {/* <Button
                  color="primary"
                  block
                  onClick={() => setClassicModal(true)}
                >
                  <LibraryBooks className={classes.icon} />
                  Classic
                </Button> */}
                <CustomDropdown
                    navDropdown
                    buttonText="Nairobi"
                    dropdownHeader="Hotels to Book in Nairobi"
                    buttonProps={{
                    className: classes.navLink,
                    color: "primary"
                    }}
                    dropdownList={[
                    <p onClick={() => setClassicModal(true)}>West Beach</p>,
                    "Another action",
                    "Something else here",
                    { divider: true },
                    "Separated link",
                    { divider: true },
                    "One more separated link"
                    ]}
                />
                <CustomDropdown
                    navDropdown
                    buttonText="Naivasha"
                    dropdownHeader="Hotels to Book in Naivasha"
                    buttonProps={{
                    className: classes.navLink,
                    color: "success"
                    }}
                    dropdownList={[
                    "Naivasha West beach Camp",
                    "Another action",
                    "Something else here",
                    { divider: true },
                    "Separated link",
                    { divider: true },
                    "One more separated link"
                    ]}
                />
                <CustomDropdown
                    navDropdown
                    buttonText="Maasai Mara"
                    dropdownHeader="Hotels to Book in Maasai Mara"
                    buttonProps={{
                    className: classes.navLink,
                    color: "success"
                    }}
                    dropdownList={[
                    "Naivasha West beach Camp",
                    "Another action",
                    "Something else here",
                    { divider: true },
                    "Separated link",
                    { divider: true },
                    "One more separated link"
                    ]}
                />
                </GridItem>
                <GridItem xs={12} sm={12} md={6} lg={4}>
                <div className={classes.title}>
                    <h3>Driver</h3>
                </div>
                <CustomDropdown
                    navDropdown
                    buttonText="Spanish"
                    dropdownHeader="Select Spanish driver"
                    buttonProps={{
                    className: classes.navLink,
                    color: "primary"
                    }}
                    dropdownList={[
                    "Sammy",
                    "Another action",
                    "Something else here",
                    { divider: true },
                    "Separated link",
                    { divider: true },
                    "One more separated link"
                    ]}
                />
                <CustomDropdown
                    navDropdown
                    buttonText="English"
                    dropdownHeader="Select Spanish driver"
                    buttonProps={{
                    className: classes.navLink,
                    color: "primary"
                    }}
                    dropdownList={[
                    "Sammy",
                    "Another action",
                    "Something else here",
                    { divider: true },
                    "Separated link",
                    { divider: true },
                    "One more separated link"
                    ]}
                />
                </GridItem>
                <GridItem xs={12} sm={12} md={6} lg={4}>
                <div className={classes.title}>
                    <h3>Parks</h3>
                </div>
                <FormControlLabel
                  control={
                    <Checkbox
                      tabIndex={-1}
                      onClick={() => handleToggle(21)}
                      checkedIcon={<Check className={BasicClasses.checkedIcon} />}
                      icon={<Check className={BasicClasses.uncheckedIcon} />}
                      classes={{
                        checked: BasicClasses.checked,
                        root: BasicClasses.checkRoot
                      }}
                    />
                  }
                  classes={{ label: BasicClasses.label, root: BasicClasses.labelRoot }}
                  label="Nairobi National Park"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      tabIndex={-1}
                      onClick={() => handleToggle(21)}
                      checkedIcon={<Check className={BasicClasses.checkedIcon} />}
                      icon={<Check className={BasicClasses.uncheckedIcon} />}
                      classes={{
                        checked: BasicClasses.checked,
                        root: BasicClasses.checkRoot
                      }}
                    />
                  }
                  classes={{ label: BasicClasses.label, root: BasicClasses.labelRoot }}
                  label="Amboseli National Park "
                />
                <GridItem xs={12} sm={12} md={6} lg={4}>
                
                </GridItem>
                <Dialog
                  classes={{
                    root: classes.center,
                    paper: classes.modal
                  }}
                  open={classicModal}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={() => setClassicModal(false)}
                  aria-labelledby="classic-modal-slide-title"
                  aria-describedby="classic-modal-slide-description"
                >
                  <DialogTitle
                    id="classic-modal-slide-title"
                    disableTypography
                    className={classes.modalHeader}
                  >
                    <IconButton
                      className={classes.modalCloseButton}
                      key="close"
                      aria-label="Close"
                      color="inherit"
                      onClick={() => setClassicModal(false)}
                    >
                      <Close className={classes.modalClose} />
                    </IconButton>
                    <h4 className={classes.modalTitle}>Best Wesst Hotel</h4>
                  </DialogTitle>
                  <DialogContent
                    id="classic-modal-slide-description"
                    className={classes.modalBody}
                  >
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
                      <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Single",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          
                          <GridItem xs={12} sm={12} md={4}>
                          <p>Price per night</p>
                            {/* <img
                              alt="..."
                              src="/img/examples/studio-1.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="/img/examples/studio-2.jpg"
                              className={navImageClasses}
                            /> */}
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                          <p>Total price for X nights</p>
                            {/* <img
                              alt="..."
                              src="/img/examples/studio-5.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="/img/examples/studio-4.jpg"
                              className={navImageClasses}
                            /> */}
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Double",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            {/* <img
                              alt="..."
                              src="/img/examples/olu-eletu.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="/img/examples/clem-onojeghuo.jpg"
                              className={navImageClasses}
                            /> */}
                            {/* <img
                              alt="..."
                              src="/img/examples/cynthia-del-rio.jpg"
                              className={navImageClasses}
                            /> */}
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            {/* <img
                              alt="..."
                              src="/img/examples/mariya-georgieva.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="/img/examples/clem-onojegaw.jpg"
                              className={navImageClasses}
                            /> */}
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Triple",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            {/* <img
                              alt="..."
                              src="/img/examples/mariya-georgieva.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="/img/examples/studio-3.jpg"
                              className={navImageClasses}
                            /> */}
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            {/* <img
                              alt="..."
                              src="/img/examples/clem-onojeghuo.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="/img/examples/olu-eletu.jpg"
                              className={navImageClasses}
                            /> 
                            <img
                              alt="..."
                              src="/img/examples/studio-1.jpg"
                              className={navImageClasses}
                            />*/}
                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
              </GridContainer>  
                    {/* <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean. A small
                      river named Duden flows by their place and supplies it
                      with the necessary regelialia. It is a paradisematic
                      country, in which roasted parts of sentences fly into your
                      mouth. Even the all-powerful Pointing has no control about
                      the blind texts it is an almost unorthographic life One
                      day however a small line of blind text by the name of
                      Lorem Ipsum decided to leave for the far World of Grammar.
                    </p> */}
                  </DialogContent>
                  <DialogActions className={classes.modalFooter}>
                    <Button color="transparent" simple>
                      Nice Button
                    </Button>
                    <Button
                      onClick={() => setClassicModal(false)}
                      color="danger"
                      simple
                    >
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>
              </GridItem>
              </GridContainer>
              {/* <GridItem xs={12} sm={12} md={12}>
              <div className={classes.title}>
                <h3>Parks</h3>
              </div>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <InputLabel className={classes.label}>
                    Datetime Picker
                  </InputLabel>
                  <br />
                  <FormControl fullWidth>
                    <Datetime
                      inputProps={{ placeholder: "Datetime Picker Here" }}
                    />
                  </FormControl>
                </GridItem>
              </GridContainer>
             </GridItem> */}
        {/* </GridItem> */}
        <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <div className={classes.title}>
            <h3>Popovers</h3>
          </div>
          <Button onClick={(event) => setAnchorElLeft(event.currentTarget)}>
            On left
          </Button>
          <Popover
            classes={{
              paper: classes.popover
            }}
            open={Boolean(anchorElLeft)}
            anchorEl={anchorElLeft}
            onClose={() => setAnchorElLeft(null)}
            anchorOrigin={{
              vertical: "center",
              horizontal: "left"
            }}
            transformOrigin={{
              vertical: "center",
              horizontal: "right"
            }}
          >
            <h3 className={classes.popoverHeader}>Popover on left</h3>
            <div className={classes.popoverBody}>
              Here will be some very useful information about his popover.
              Here will be some very useful information about his popover.
            </div>
          </Popover>
          <Button onClick={(event) => setAnchorElTop(event.currentTarget)}>
            On top
          </Button>
          <Popover
            classes={{
              paper: classes.popover
            }}
            open={Boolean(anchorElTop)}
            anchorEl={anchorElTop}
            onClose={() => setAnchorElTop(null)}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center"
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "center"
            }}
          >
            <h3 className={classes.popoverHeader}>Popover on top</h3>
            <div className={classes.popoverBody}>
              Here will be some very useful information about his popover.
            </div>
          </Popover>
          <Button onClick={(event) => setAnchorElBottom(event.currentTarget)}>
            On bottom
          </Button>
          <Popover
            classes={{
              paper: classes.popover
            }}
            open={Boolean(anchorElBottom)}
            anchorEl={anchorElBottom}
            onClose={() => setAnchorElBottom(null)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center"
            }}
          >
            <h3 className={classes.popoverHeader}>Popover on bottom</h3>
            <div className={classes.popoverBody}>
              Here will be some very useful information about his popover.
            </div>
          </Popover>
          <Button onClick={(event) => setAnchorElRight(event.currentTarget)}>
            On right
          </Button>
          <Popover
            classes={{
              paper: classes.popover
            }}
            open={Boolean(anchorElRight)}
            anchorEl={anchorElRight}
            onClose={() => setAnchorElRight(null)}
            anchorOrigin={{
              vertical: "center",
              horizontal: "right"
            }}
            transformOrigin={{
              vertical: "center",
              horizontal: "left"
            }}
          >
            <h3 className={classes.popoverHeader}>Popover on right</h3>
            <div className={classes.popoverBody}>
              Here will be some very useful information about his popover.
            </div>
          </Popover>
          <br />
          <br />
          <div className={classes.title}>
            <h3>Tooltips</h3>
          </div>
          <Tooltip
            id="tooltip-left"
            title="Tooltip on left"
            placement="left"
            classes={{ tooltip: classes.tooltip }}
          >
            <Button>On left</Button>
          </Tooltip>
          <Tooltip
            id="tooltip-top"
            title="Tooltip on top"
            placement="top"
            classes={{ tooltip: classes.tooltip }}
          >
            <Button>On top</Button>
          </Tooltip>
          <Tooltip
            id="tooltip-bottom"
            title="Tooltip on bottom"
            placement="bottom"
            classes={{ tooltip: classes.tooltip }}
          >
            <Button>On bottom</Button>
          </Tooltip>
          <Tooltip
            id="tooltip-right"
            title="Tooltip on right"
            placement="right"
            classes={{ tooltip: classes.tooltip }}
          >
            <Button>On right</Button>
          </Tooltip>
        </GridItem>
        </GridContainer>
      {/* */}
       
    </div>
  </div>
  );
}
