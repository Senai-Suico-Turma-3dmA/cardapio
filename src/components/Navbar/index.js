import React from "react";
import styles from "./navbar.module.css";

function NavBar({ tipos,menu,setMenu }) {
  function fechaMenu(){
    const { innerWidth : width } = window;
    console.log(width);
    if (width <= 1024) {
      document.getElementById("navbar").style.width = "0px"
      setMenu(false)
    }
  }


  return (
    <div id="navbar" className={styles.navbar}>
      {tipos.map(tipo => {
        return(
          <a onClick={fechaMenu} href={"#" + tipo} className={styles.menu}>
            <span>{tipo}</span>
          </a>
        )
      })}
    </div>
  );
}

export default NavBar;
