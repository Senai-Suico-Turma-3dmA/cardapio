import React from "react";
import styles from "./section.module.css";

function Section({tipo, data}) {

  const novoData = [];

  data.forEach(element => {
    if (element.categoria === tipo) {
      novoData.push(element);
    }
  });

  function capitalizar(texto) {
    return texto[0].toUpperCase() + texto.substring(1);
  }


  return (
    <>
      <div id={tipo} className={styles.titulo}>
        <h2>{capitalizar(tipo)}</h2>
      </div>
      <div className={styles.produtos}>
        {novoData.map(item => {
          return(
            <div key={item.id} className={styles.item}>
              <div className={styles.texto}>
                <span className={styles.nome}>{capitalizar(item.nome)}</span>
                <span className={styles.desc}>{capitalizar(item.descricao)}.</span>
              </div>
              <span className={styles.preco}>R$ {item.preco.toFixed(2).replace('.', ',')}</span>
            </div>
          )
        })}
      </div>
    </>
  );
}

export default Section;
