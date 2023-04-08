import React, { FC, useEffect, useState } from "react";
import styles from "./ThemeSwitcher.module.scss";

import { ReactComponent as MoonIcon } from "assert/icon-moon.svg";
import { ReactComponent as SunIcon } from "assert/sun-moon.svg";

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);
  const themeText = isDark ? "Light" : "Dark";
  const ThemeIcon = isDark ? SunIcon : MoonIcon;

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light')
  }, [isDark]);

  return (
    <div className={styles.switcher} onClick={() => setDark(!isDark)}>
      <span>{themeText}</span>
      <ThemeIcon className={styles.icon} />
    </div>
  );
};

export default ThemeSwitcher;
