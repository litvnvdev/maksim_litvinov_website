import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { FaMoon } from "react-icons/fa";

import { Nav } from "./components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Theme";

function App() {
  const [theme, setTheme] = useState("light");
  const handleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <>
        <Nav>
          <FaMoon className="theme-icon" onClick={handleTheme} />
        </Nav>
      </>
    </ThemeProvider>
  );
}

export default App;
