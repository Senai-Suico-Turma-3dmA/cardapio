import React from "react";
import styles from "./header.module.css";
import { BsShop } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { BsCupStraw } from "react-icons/bs";
import { GiDonut } from "react-icons/gi";

function Header() {
    return(
        <div className={styles.container}>
            <BsShop color="#dce0e6" size={30} />
            <h1 className={styles.titulo}>Cantina SENAI</h1>
        </div>
    );
}

export default Header;