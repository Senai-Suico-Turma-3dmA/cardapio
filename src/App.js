import React, { useEffect, useState } from "react";
import styles from "./App.module.css";

import Header from "./components/Header";
import NavBar from "./components/Navbar";
import BotaoMenu from "./components/BotaoMenu";
import Footer from "./components/Footer";
import Section from "./components/Section";

import { api } from "./services/api";

function App() {
  const [ativado, setAtivado] = useState(false);
  
  const [dados, setDados] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    async function pegaDados() {
      try {
        let { data } = await api.get('/produtos');
        setDados(data);
        setLoad(true);
      } catch (e) {
        console.log(e);
      }
    }
    pegaDados();
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <NavBar menu={ativado} setMenu={setAtivado} tipos={["bebidas", "lanches", "pastéis", "pizzas", "salgados", "sobremesas", "tapiocas salgadas", "tapiocas doces"]} />
      <BotaoMenu ativado={ativado} setAtivado={setAtivado} />
      <main className={styles.main}>
        {load && (<>
          <Section tipo="bebidas" data={dados} />
          <Section tipo="lanches" data={dados} />
          <Section tipo="pastéis" data={dados} />
          <Section tipo="pizzas" data={dados} />
          <Section tipo="salgados" data={dados} />
          <Section tipo="sobremesas" data={dados} />
          <Section tipo="tapiocas salgadas" data={dados} />
          <Section tipo="tapiocas doces" data={dados} />
        </>)}
      </main>
      <Footer />
    </div>
  );
}

export default App;
