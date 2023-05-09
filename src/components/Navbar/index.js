import React from "react";
import styles from "./navbar.module.css"
import { GiDonut } from "react-icons/gi"
import { BsCupStraw } from "react-icons/bs"
import { FaHamburger } from "react-icons/fa"

function NavBar() {
    return(
        <div className={styles.navbar}>
            <a href="#doces" className={styles.menu}>
                <GiDonut size={24} color="#dce0e6"/> <span>Doces</span>
            </a>
            <a href="#bebidas" className={styles.menu}> 
                <BsCupStraw size={24} color="#dce0e6"/> <span>Bebidas</span>
            </a>
            <a href="#salgados" className={styles.menu}>
                <FaHamburger size={24} color="#dce0e6"/> <span>Salgados</span>
            </a>
        </div>
    );
}

export default NavBar;