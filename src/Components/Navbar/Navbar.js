import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import styles from "./Navbar.module.css";
import HeaderImage from "../../Assets/SourceWiz Logo.png";
import UpdateIcon from "@mui/icons-material/Update";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";

// const pages = ["Products", "Pricing", "Blog"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

   const ResponsiveAppBar = () => {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

  return (
    <AppBar
      sx={{
        backgroundColor: "#fff",
        boxShadow: "0 1px 15px -12px #000",
        height: "10vh",
      }}
      position='absolute'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <img
            className={styles.logoStyle}
            src={HeaderImage}
            sx={{ display: { xs: "none", md: "flex" } }}
            srcSet={
              "https://uploads-ssl.webflow.com/611b88d50d8937e251b3e1fe/616039dbb3cd76d32647f9e2_Logo.png"
            }
            alt={"SourceWiz"}
            loading='lazy'
          />

          <Box sx={{ display: "flex", justifyContent:"space-between", marginLeft:"auto", marginRight: "6%" }}>
            <Tooltip title='Recent Activity'>
              <div className={styles.ActivityStyle}>
                <Button
                  variant='text'
                  sx={{
                    height: "2.5rem",
                    color: "#000",
                    textTransform: "none",
                    fontSize: "16Px",
                  }}>
                  Recent Activity
                </Button>
                <UpdateIcon />
              </div>
            </Tooltip>
            <Tooltip title='Open settings'>
              <div className={styles.ActivityStyle}>
                <Button
                  variant='text'
                  sx={{
                    height: "2.5rem",
                    color: "#000",
                    textTransform: "none",
                    fontSize: "16Px",
                  }}>
                  Help
                </Button>
                <HelpCenterIcon />
              </div>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
