import React from "react"
import styles from "./footer.module.css"
import { BsFacebook } from "react-icons/bs"
import { AiOutlineInstagram } from "react-icons/ai"

function Footer(){
    return(
        <footer className={styles.footer}>
            <span className={styles.copy}>
                &copy; Turma 3DM | Todos direitos reservados
                <a href="" className={styles.botao}>
                    <BsFacebook size={20} color="dce0e6"/>
                </a>
                <a className={styles.botao}>
                    <AiOutlineInstagram size={24} color="dce0e6"/>
                </a>
            </span>
        </footer>
    );
}

export default Footer;