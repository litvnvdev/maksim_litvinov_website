import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";


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
            { theme === 'light' ? <BsMoonStarsFill className="theme-icon" onClick={handleTheme} /> : <BsFillSunFill  className="theme-icon" onClick={handleTheme} />}
          </MobileNav>
        ) : (
          <Nav>
            { theme === 'light' ? <BsMoonStarsFill className="theme-icon" onClick={handleTheme} /> : <BsFillSunFill  className="theme-icon" onClick={handleTheme} />}
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
