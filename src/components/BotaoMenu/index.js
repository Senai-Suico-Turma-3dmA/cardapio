import React from "react";
import styles from "./botaoMenu.module.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseFill } from "react-icons/ri";

function BotaoMenu({ ativado, setAtivado }) {
  const { innerWidth : width} = window;

  if (width <= 1024) {
    return (
      <button
        onClick={() => {
          setAtivado(!ativado);
          let navbar = document.getElementById("navbar");
          if (navbar.style.width === "300px") {
            navbar.style.width = "0px";
          } else {
            navbar.style.width = "300px";
          }
        }}
        className={styles.container}
      >
        {ativado ? (
          <RiCloseFill color="#dce0e6" size={35} />
        ) : (
          <GiHamburgerMenu color="#dce0e6" size={30} />
        )}
      </button>
    );
  }
}

export default BotaoMenu;
