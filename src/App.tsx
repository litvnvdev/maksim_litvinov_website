import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { FaMoon } from "react-icons/fa";

import {
  Nav,
  Hero,
  About,
  Portfolio,
  MobileNav,
  Contact,
  Footer,
} from "./components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { lightTheme, darkTheme } from "./styles/Theme";

function App() {
  const [theme, setTheme] = useState("light");

  const handleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const mobileWidth = window.matchMedia("(max-width:768px)");
  const size = mobileWidth.matches;

  const [isMobile, setIsMobile] = useState(size);

  const handleMobileMenu = () => {
    mobileWidth.addEventListener("change", function (event) {
      setIsMobile(event.matches);
    });
  };
  handleMobileMenu();

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        {isMobile ? (
          <MobileNav>
            <FaMoon className="theme-icon" onClick={handleTheme} />
          </MobileNav>
        ) : (
          <Nav>
            <FaMoon className="theme-icon" onClick={handleTheme} />
          </Nav>
        )}

        <GlobalStyles />
        <Hero />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
