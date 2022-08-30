import Typography from "@mui/material/Typography";
import styles from "./Header.module.css";
import { Button } from "@mui/material";
import { useState } from "react";


const Header = () => {
    const [selectedBtn, setSelectedBtn ] = useState({category:false, allProducts: false})
  return (
    <div className={styles.headerStyles}>
      <section className={styles.firstContainer}>
        <p>Dashboard / Master Catalogue</p>
        <Typography
          variant='h4'
          sx={{
            mt: 5,
            fontFamily: "monospace",
            fontWeight: 800,
            color: "inherit",
            textDecoration: "none",
          }}>
          Master Catalogue
        </Typography>
        <span>1,325 Products</span>
        <div className={styles.pageCategory}>
          <Button
            variant='text'
            className={ selectedBtn.category ? styles.selectedBtnStyle: null }
            onClick={() => setSelectedBtn({category: true, allProducts: false})}
            sx={{
              paddingLeft: 0,
              paddingBottom: 0,
              textTransform: "none",
              fontSize: "16px",
              borderBottom: '3px solid white'
            }}>
            Categories
          </Button>
          <Button
            variant='text'
            onClick={() => setSelectedBtn({category: false, allProducts: true})}
            className={ selectedBtn.allProducts ? styles.selectedBtnStyle: null }
            sx={{
              paddingBottom: 0,
              textTransform: "none",
              fontSize: "16px",
              borderBottom: '3px solid white'
            }}>
            All products
          </Button>
        </div>
      </section>
      <section className={styles.secondContainer}>
        <div className={styles.buttonBox}>
          <Button
            variant='contained'
            sx={{
              height: "2.7rem",
              mr: 2,
              textTransform: "none",
              width: "25%",
              padding: "1rem",
            }}>
            Manage products
          </Button>
          <Button
            variant='contained'
            sx={{
              height: "2.7rem",
              textTransform: "none",
              width: "25%",
              padding: "1rem",
            }}>
            Add products
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Header;
