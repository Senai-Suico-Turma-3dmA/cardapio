import React, { useContext } from "react";
import styles from "./section.module.css";
import { MainContext } from "../../context/mainContext";

function Section({tipo}) {
  const { dados } = useContext(MainContext);

  const novoDados = dados.map(item => {
    if (item.categoria === tipo) {
      return item;
    }
  });

  console.log(novoDados);

  return (
    <>
      <div id="bebidas" className={styles.titulo}>
        <h2>{tipo}</h2>
      </div>
      <div className={styles.produtos}>
        <div className={styles.item}>
          <div className={styles.texto}>
            <span className={styles.nome}>Pão de queijo</span>
            <span className={styles.desc}>Tamanho médio</span>
          </div>
          <span className={styles.preco}>R$ 3,00</span>
        </div>
      </div>
    </>
  );
}

export default Section;
