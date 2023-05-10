import React, { useState } from "react";
import styles from "./App.module.css";

import Header from "./components/Header";
import NavBar from "./components/Navbar";
import BotaoMenu from "./components/BotaoMenu";
import Footer from "./components/Footer";

function App() {
  const [ativado, setAtivado] = useState(false);

  return (
    <div className={styles.container}>
      <Header />
      <NavBar ativado={ativado} setAtivado={setAtivado} />
      <BotaoMenu ativado={ativado} setAtivado={setAtivado} />
      <main className={styles.main}>
        <div id="salgados" className={styles.titulo}>
          <h2>Salgados</h2>
        </div>
        <div className={styles.produtos}>
          <div className={styles.item}>
            <div className={styles.texto}>
              <span className={styles.nome}>Pão de queijo</span>
              <span className={styles.desc}>Tamanho médio</span>
            </div>
            <span className={styles.preco}>R$ 3,00</span>
          </div>
          <div className={styles.item}>
            <div className={styles.texto}>
              <span className={styles.nome}>Pão de queijo</span>
              <span className={styles.desc}>Tamanho médio</span>
            </div>
            <span className={styles.preco}>R$ 3,00</span>
          </div>
          <div className={styles.item}>
            <div className={styles.texto}>
              <span className={styles.nome}>Pão de queijo</span>
              <span className={styles.desc}>Tamanho médio</span>
            </div>
            <span className={styles.preco}>R$ 3,00</span>
          </div>
          <div className={styles.item}>
            <div className={styles.texto}>
              <span className={styles.nome}>Pão de queijo</span>
              <span className={styles.desc}>Tamanho médio</span>
            </div>
            <span className={styles.preco}>R$ 3,00</span>
          </div>
          <div className={styles.item}>
            <div className={styles.texto}>
              <span className={styles.nome}>Pão de queijo</span>
              <span className={styles.desc}>Tamanho médio</span>
            </div>
            <span className={styles.preco}>R$ 3,00</span>
          </div>
          <div className={styles.item}>
            <div className={styles.texto}>
              <span className={styles.nome}>Pão de queijo</span>
              <span className={styles.desc}>Tamanho médio</span>
            </div>
            <span className={styles.preco}>R$ 3,00</span>
          </div>
        </div>

        <div id="bebidas" className={styles.titulo}>
          <h2>Bebidas</h2>
        </div>
        <div className={styles.produtos}>
        <div className={styles.item}>
            <div className={styles.texto}>
              <span className={styles.nome}>Pão de queijo</span>
              <span className={styles.desc}>Tamanho médio</span>
            </div>
            <span className={styles.preco}>R$ 3,00</span>
          </div><div className={styles.item}>
            <div className={styles.texto}>
              <span className={styles.nome}>Pão de queijo</span>
              <span className={styles.desc}>Tamanho médio</span>
            </div>
            <span className={styles.preco}>R$ 3,00</span>
          </div>    <div className={styles.item}>
            <div className={styles.texto}>
              <span className={styles.nome}>Pão de queijo</span>
              <span className={styles.desc}>Tamanho médio</span>
            </div>
            <span className={styles.preco}>R$ 3,00</span>
          </div><div className={styles.item}>
            <div className={styles.texto}>
              <span className={styles.nome}>Pão de queijo</span>
              <span className={styles.desc}>Tamanho médio</span>
            </div>
            <span className={styles.preco}>R$ 3,00</span>
          </div><div className={styles.item}>
            <div className={styles.texto}>
              <span className={styles.nome}>Pão de queijo</span>
              <span className={styles.desc}>Tamanho médio</span>
            </div>
            <span className={styles.preco}>R$ 3,00</span>
          </div><div className={styles.item}>
            <div className={styles.texto}>
              <span className={styles.nome}>Pão de queijo</span>
              <span className={styles.desc}>Tamanho médio</span>
            </div>
            <span className={styles.preco}>R$ 3,00</span>
          </div><div className={styles.item}>
            <div className={styles.texto}>
              <span className={styles.nome}>Pão de queijo</span>
              <span className={styles.desc}>Tamanho médio</span>
            </div>
            <span className={styles.preco}>R$ 3,00</span>
          </div><div className={styles.item}>
            <div className={styles.texto}>
              <span className={styles.nome}>Pão de queijo</span>
              <span className={styles.desc}>Tamanho médio</span>
            </div>
            <span className={styles.preco}>R$ 3,00</span>
          </div><div className={styles.item}>
            <div className={styles.texto}>
              <span className={styles.nome}>Pão de queijo</span>
              <span className={styles.desc}>Tamanho médio</span>
            </div>
            <span className={styles.preco}>R$ 3,00</span>
          </div>
        </div>
        <div id="doces" className={styles.titulo}>
          <h2>Doces</h2>
        </div>
          <div className={styles.produtos}>
          <div className={styles.item}>
            <div className={styles.texto}>
              <span className={styles.nome}>Pão de queijo</span>
              <span className={styles.desc}>Tamanho médio</span>
            </div>
            <span className={styles.preco}>R$ 3,00</span>
          </div>
          <div className={styles.item}>
            <div className={styles.texto}>
              <span className={styles.nome}>Pão de queijo</span>
              <span className={styles.desc}>Tamanho médio</span>
            </div>
            <span className={styles.preco}>R$ 3,00</span>
          </div>
          <div className={styles.item}>
            <div className={styles.texto}>
              <span className={styles.nome}>Pão de queijo</span>
              <span className={styles.desc}>Tamanho médio</span>
            </div>
            <span className={styles.preco}>R$ 3,00</span>
          </div>
          <div className={styles.item}>
            <div className={styles.texto}>
              <span className={styles.nome}>Pão de queijo</span>
              <span className={styles.desc}>Tamanho médio</span>
            </div>
            <span className={styles.preco}>R$ 3,00</span>
          </div>
          <div className={styles.item}>
            <div className={styles.texto}>
              <span className={styles.nome}>Pão de queijo</span>
              <span className={styles.desc}>Tamanho médio</span>
            </div>
            <span className={styles.preco}>R$ 3,00</span>
          </div>
          <div className={styles.item}>
            <div className={styles.texto}>
              <span className={styles.nome}>Pão de queijo</span>
              <span className={styles.desc}>Tamanho médio</span>
            </div>
            <span className={styles.preco}>R$ 3,00</span>
          </div>
           </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
