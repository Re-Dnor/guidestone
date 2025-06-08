import styles from "./index.module.css";
import { useEffect, useState } from "react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={styles.header}>
      <nav>
        <ul className={`${styles.navList} ${scrolled ? styles.scrolled : ""}`}>
          <li>
            <a href="#benefits" className={styles.link}>
              Benefits
            </a>
          </li>
          <li>
            <a href="#specs" className={styles.link}>
              Specifications
            </a>
          </li>
          <li>
            <a href="#howto" className={styles.link}>
              How to
            </a>
          </li>
          <li>
            <a href="#contacts" className={styles.link}>
              Contacts
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
