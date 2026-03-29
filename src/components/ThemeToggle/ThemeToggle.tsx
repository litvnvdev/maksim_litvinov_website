import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import { Theme } from "../../shared/types";

import { IconButton } from "./styles";

type ThemeToggleProps = {
  theme: Theme;
  onToggle: () => void;
};

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isLight = theme === Theme.LIGHT;

  return (
    <IconButton
      type="button"
      onClick={onToggle}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
    >
      {isLight ? (
        <BsMoonStarsFill className="theme-icon" aria-hidden />
      ) : (
        <BsFillSunFill className="theme-icon" aria-hidden />
      )}
    </IconButton>
  );
}
