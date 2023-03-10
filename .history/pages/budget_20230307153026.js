import Header from "/components/Header/Header.js";
import Footer from "/components/Footer/Footer.js";
import DashboadLinks from "/components/Header/DashboadLinks.js";
import { makeStyles } from "@material-ui/core/styles";
// fetching data from google sheets
import { getHotels } from '../libs/sheets';
import styles from "/styles/jss/nextjs-material-kit/pages/profilePage.js";

import ClientDetails from "../pages-sections/Budget-Sections/ClientDetails"
const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
    const classes = useStyles();
    const { ...rest } = props;
    console.log(props.hotel_data);  
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
        <ClientDetails/>

        </div> 
    )
}
// Fetching data from sheets
export async function getStaticProps(context) {
  const hotel = await getHotels();
  console.log(hotel); 
  return {
    props: {
      message: `Next.js is awesome`,
      hotel_data: hotel.slice(1, hotel.length), // remove sheet header
    },
    revalidate: 1, // In seconds
  };
}