import React from "react";
import styles from "./navbar.module.css";

import { GiDonut } from "react-icons/gi";
import { BsCupStraw } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";

function NavBar({ativado}) {
  return (
    <div id="navbar" className={styles.navbar}>
      <a href="#doces" className={styles.menu}>
        <GiDonut size={20} color={ativado ? "#dce0e6" : "#1f1f20"} /> <span>Doces</span>
      </a>
      <a href="#bebidas" className={styles.menu}>
        <BsCupStraw size={20} color={ativado ? "#dce0e6" : "#1f1f20"} /> <span>Bebidas</span>
      </a>
      <a href="#salgados" className={styles.menu}>
        <FaHamburger size={20} color={ativado ? "#dce0e6" : "#1f1f20"} /> <span>Salgados</span>
      </a>
    </div>
  );
}

export default NavBar;
