import { Body, Header } from "../../Components/Index";
import styles from "./Landingpage.module.css";

/**
 * 
 * @returns Landing Page
 */
const LandingPage = () => {
  return (
    <div className={styles.landingContainer}>
      <Header />
      <Body />
    </div>
  );
};

export default LandingPage;
