import React from "react";
import styles from "./App.module.css";
import { TiThMenu } from "react-icons/ti";

import Menu from "./components/Menu";

function App() {
  const dados = [
    {
      id: 1,
      nome: 'Pão de queijo',
      preco: 3
    },
    {
      id: 2,
      nome: 'Pão de queijo',
      preco: 3
    },
    {
      id: 3,
      nome: 'Pão de queijo',
      preco: 3
    },
    {
      id: 4,
      nome: 'Pão de queijo',
      preco: 3
    },
    {
      id: 4,
      nome: 'Pão de queijo',
      preco: 3
    },
    {
      id: 4,
      nome: 'Pão de queijo',
      preco: 3
    },
    {
      id: 4,
      nome: 'Pão de queijo',
      preco: 3
    },
    {
      id: 4,
      nome: 'Pão de queijo',
      preco: 3
    },
    {
      id: 4,
      nome: 'Pão de queijo',
      preco: 3
    },
    {
      id: 4,
      nome: 'Pão de queijo',
      preco: 3
    },
    {
      id: 4,
      nome: 'Pão de queijo',
      preco: 3
    },
    {
      id: 4,
      nome: 'Pão de queijo',
      preco: 3
    },
    {
      id: 4,
      nome: 'Pão de queijo',
      preco: 3
    },
    {
      id: 4,
      nome: 'Pão de queijo',
      preco: 3
    },
    {
      id: 4,
      nome: 'Pão de queijo',
      preco: 3
    },
    {
      id: 4,
      nome: 'Pão de queijo',
      preco: 3
    },
    {
      id: 4,
      nome: 'Pão de queijo',
      preco: 3
    },
    {
      id: 4,
      nome: 'Pão de queijo',
      preco: 3
    },
    {
      id: 4,
      nome: 'Pão de queijo',
      preco: 3
    },
    {
      id: 4,
      nome: 'Pão de queijo',
      preco: 3
    },
    {
      id: 4,
      nome: 'Pão de queijo',
      preco: 3
    },
    {
      id: 4,
      nome: 'Pão de queijo',
      preco: 3
    },
    {
      id: 4,
      nome: 'Pão de queijo',
      preco: 3
    },
    {
      id: 4,
      nome: 'Pão de queijo',
      preco: 3
    },
    {
      id: 4,
      nome: 'Pão de queijo',
      preco: 3
    },
    {
      id: 4,
      nome: 'Pão de queijo',
      preco: 3
    },
    {
      id: 4,
      nome: 'Pão de queijo',
      preco: 3
    },
    {
      id: 4,
      nome: 'Pão de queijo',
      preco: 3
    },
    {
      id: 4,
      nome: 'Pão de queijo',
      preco: 3
    },
    {
      id: 4,
      nome: 'Pão de queijo',
      preco: 3
    },
    {
      id: 4,
      nome: 'Pão de queijo',
      preco: 3
    },
  ]

  return(
    <div className={styles.container}>
      <button className={styles.botaoMenu}>
        <TiThMenu color="#FFFFFF" size={30} />
      </button>
      <Menu />
      <h1 className={styles.titulo}>Salgados</h1>
      <div className={styles.lista}>
        {dados.map(item => {
          return(
            <div className={item.id % 2 == 0 ? styles.item2 : styles.item}>
              <span>{item.nome} ---- R$ {item.preco.toFixed(2).replace('.', ',')}</span>
            </div>
          )
        })}        
      </div>
    </div>
  )
}

export default App;
