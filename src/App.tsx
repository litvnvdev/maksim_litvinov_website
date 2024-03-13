import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { FaMoon } from "react-icons/fa";

import { Nav, Hero, About, Portfolio } from "./components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { lightTheme, darkTheme } from "./styles/Theme";

function App() {
  const [theme, setTheme] = useState("light");
  const handleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <Nav>
          <FaMoon className="theme-icon" onClick={handleTheme} />
        </Nav>
        <GlobalStyles />
        <Hero />
        <About />
        <Portfolio />
      </>
    </ThemeProvider>
  );
}

export default App;
