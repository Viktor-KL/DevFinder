import React, { FC } from "react";
import styles from "./Header.module.scss";
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'

const Header = () => (
  <div className={styles.header}>
    <div className={styles.logo}>
      devfinder
    </div>
    <ThemeSwitcher />
  </div>
);

export default Header;
