import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import {
  Nav,
  Hero,
  About,
  Portfolio,
  MobileNav,
  Contact,
  Footer,
  ThemeToggle,
} from "./components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { lightTheme, darkTheme } from "./styles/Theme";
import { Theme } from "./shared/types";
import { MOBILE_WIDTH, THEME_KEY } from "./shared/consts";

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === Theme.DARK || stored === Theme.LIGHT) return stored;
    return Theme.LIGHT;
  });

  const handleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    localStorage.setItem(THEME_KEY, newTheme);
    setTheme(newTheme);
  };

  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia(`(max-width:${MOBILE_WIDTH}px)`).matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width:${MOBILE_WIDTH}px)`);
    const sync = (event: MediaQueryListEvent) => setIsMobile(event.matches);
    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", sync);
    return () => mediaQuery.removeEventListener("change", sync);
  }, []);

  return (
    <ThemeProvider theme={theme === Theme.LIGHT ? lightTheme : darkTheme}>
      <>
        {isMobile ? (
          <MobileNav>
            <ThemeToggle theme={theme} onToggle={handleTheme} />
          </MobileNav>
        ) : (
          <Nav>
            <ThemeToggle theme={theme} onToggle={handleTheme} />
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
