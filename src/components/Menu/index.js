import React from "react";
import styles from "./menu.module.css";

function Menu() {
  return(
    <aside className={styles.container}>
      <ul>
        <li>
          <button>Salgados</button>
        </li>
        <li>
          <button>Bebidas</button>
        </li>
        <li>
          <button>Doces</button>
        </li>
      </ul>
    </aside>
  )
}

export default Menu;