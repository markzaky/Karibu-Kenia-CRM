import Header from "/components/Header/Header.js";
import Footer from "/components/Footer/Footer.js";
import DashboadLinks from "/components/Header/DashboadLinks.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "/styles/jss/nextjs-material-kit/pages/profilePage.js";

import RightSection from "../pages-sections/Dashboard-sections/RightSection.js"
const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
    const classes = useStyles();
    const { ...rest } = props;

    return(
        <div>
        <Header
        color="black"
        brand="Karibu Kenia"
        rightLinks={<DashboadLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
        />
        <RightSection/>

        </div>
    )
}