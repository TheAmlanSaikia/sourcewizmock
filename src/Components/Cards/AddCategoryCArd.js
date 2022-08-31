import { Box } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";

const AddCategoryCards = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: 325,
        height: 180,
        backgroundColor: theme.colors.themeColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "2px",
        "&:hover": {
          backgroundColor: theme.colors.themeColor,
          opacity: [0.9, 0.8, 0.7],
        },
      }}>
      <Button
        variant='text'
        sx={{
          textTransform: "none",
          color: theme.colors.themetextColor,
          fontWeight: 600,
          fontFamily: "Roboto, sans-serif",
          fontSize: "16px",
          "&:hover": {
            backgroundColor: theme.colors.themetColor,
            opacity: [0.9, 0.8, 0.7],
          },
        }}>
        {" "}
        + Add a new category
      </Button>
    </Box>
  );
};

export default AddCategoryCards;
