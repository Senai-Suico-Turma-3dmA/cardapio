import React from "react";
import styles from "./navbar.module.css";

function NavBar({ tipos }) {
  return (
    <div id="navbar" className={styles.navbar}>
      {tipos.map(tipo => {
        return(
          <a href={"#" + tipo} className={styles.menu}>
            <span>{tipo}</span>
          </a>
        )
      })}
    </div>
  );
}

export default NavBar;
