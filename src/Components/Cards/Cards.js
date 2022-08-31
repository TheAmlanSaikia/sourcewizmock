import {
  IconButton,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import styles from "./Card.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useTheme } from "@mui/material/styles";

/**
 * 
 * @param {Category detils} props 
 * @returns Cards of different category
 */

const CategoryCards = (props) => {
  
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: 325,
        height: 180,
        backgroundColor: theme.colors.cardsColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "1.5%",
        "&:hover": {
          backgroundColor: theme.colors.cardsColor,
          opacity: [0.9, 0.8, 0.7],
        },
      }}>
      <div className={styles.cardContainer}>
        <section className={styles.firstBox}>
          <div className={styles.titleBox}>
            <div>
              <Typography
                variant='h6'
                sx={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 600,
                  color: "inherit",
                  textDecoration: "none",
                  ml: 1,
                }}>
                {props.title}
              </Typography>
              <Typography
                variant='h9'
                sx={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 500,
                  color: theme.colors.greyText,
                  textDecoration: "none",
                  ml: 1,
                }}>
                {props.qty} products
              </Typography>
            </div>
            <IconButton
              sx={{
                mr: 1,
                paddingTop: "5px",
              }}>
              <ArrowForwardIosIcon />
            </IconButton>
          </div>
        </section>
        <section>
          <ImageList
            sx={{
              width: 280,
              height: 92,
              margin: "15px 10px 10px 10px",
              display: "flex",
              alignItems: "center",
            }}
            cols={3}
            rows={1}>
            {props.img.map((item) => (
              <ImageListItem sx={{ borderRadius: "15px" }} key={Math.random()}>
                <img src={item} srcSet={item} alt={"New"} loading='lazy' />
              </ImageListItem>
            ))}
          </ImageList>
        </section>
      </div>
    </Box>
  );
};

export default CategoryCards;
