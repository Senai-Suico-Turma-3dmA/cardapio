import React from "react"
import styles from "./footer.module.css"
import { BsFacebook } from "react-icons/bs"
import { AiOutlineInstagram } from "react-icons/ai"

function Footer(){
    return(
        <footer className={styles.footer}>
            <span className={styles.copy}>
                &copy; Turma 3DM | SENAI Suíço Brsileiro "Paulo Ernesto Tolle"
                <a target="blank" href="https://www.facebook.com/senai.suico/?locale=pt_BR" className={styles.botao}>
                    <BsFacebook size={20} color="dce0e6"/>
                </a>
                <a target="blank" href="https://www.instagram.com/senai.suico/" className={styles.botao}>
                    <AiOutlineInstagram size={24} color="dce0e6"/>
                </a>
            </span>
        </footer>
    );
}

export default Footer;