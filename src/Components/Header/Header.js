import Typography from "@mui/material/Typography";
import styles from "./Header.module.css";
import { Button } from "@mui/material";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

/**
 *
 * @returns Header Component
 */

const Header = () => {
  const [selectedBtn, setSelectedBtn] = useState({
    category: false,
    allProducts: false,
  });
  const theme = useTheme();

  return (
    <div className={styles.headerStyles}>
      <section className={styles.firstContainer}>
        <p className={styles.breadCrumbs}>
          Dashboard /{" "}
          <span className={styles.breadCrumbsText}>Master Catalogue</span>
        </p>
        <Typography
          variant='h4'
          sx={{
            mt: 5,
            fontFamily: "Roboto, sans-serif",
            fontWeight: 700,
            color: "inherit",
            textDecoration: "none",
          }}>
          Master Catalogue
        </Typography>
        <Typography
          variant='body2'
          sx={{
            fontFamily: "Roboto, sans-serif",
            fontWeight: 400,
            color: theme.colors.greyText,
            textDecoration: "none",
          }}>
          1.325 Products
        </Typography>
        <div className={styles.pageCategory}>
          <Button
            variant='text'
            className={
              selectedBtn.category
                ? styles.selectedBtnStyle
                : styles.unselectedBtnStyle
            }
            onClick={() =>
              setSelectedBtn({ category: true, allProducts: false })
            }
            sx={{
              paddingLeft: 0,
              paddingBottom: 0,
              textTransform: "none",
              fontSize: "16px",
              borderBottom: selectedBtn.category
                ? "3px solid green"
                : "3px solid white",
              color: selectedBtn.category ? "green" : "#000",
              borderRadius: "0px",
            }}>
            Categories
          </Button>
          <Button
            variant='text'
            onClick={() =>
              setSelectedBtn({ category: false, allProducts: true })
            }
            sx={{
              paddingBottom: 0,
              textTransform: "none",
              fontSize: "16px",
              borderBottom: selectedBtn.allProducts
                ? "3px solid green"
                : "3px solid white",
              color: selectedBtn.allProducts ? "green" : "#000",
              borderRadius: "0px",
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
              fontFamily: "Roboto, sans-serif",
              backgroundColor: theme.colors.themeColor,
              color: theme.colors.themetextColor,
              fontWeight: 600,
              fontSize: {
                sm: "10px",
                md: "14px",
              },
              "&:hover": {
                backgroundColor: theme.colors.themeColor,
                opacity: [0.9, 0.8, 0.7],
              },
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
              backgroundColor: theme.colors.themetextColor,
              color: theme.colors.whiteBg,
              fontWeight: 600,
              fontFamily: "Roboto, sans-serif",
              fontSize: {
                sm: "10px",
                md: "14px",
              },
              "&:hover": {
                backgroundColor: theme.colors.themetextColor,
                opacity: [0.9, 0.8, 0.7],
              },
            }}>
            Add products
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Header;
