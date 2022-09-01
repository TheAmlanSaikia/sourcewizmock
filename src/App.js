import "./Styles/Color.css";
import { Navbar } from "./Components/Index";
import LandingPage from "./Pages/Landing Page/LandingPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  colors: {
    themeColor: "#cae3df",
    cardsColor: "#f5f5f5",
    themetextColor: "#0c7765",
    whiteBg: "#fcfcfc",
    greyText: "#b1b3b2",
  },
});

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Navbar />
        <LandingPage />
      </ThemeProvider>
    </div>
  );
}

export default App;
