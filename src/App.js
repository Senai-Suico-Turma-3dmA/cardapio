import React, { useEffect, useState, useContext } from "react";
import styles from "./App.module.css";
import MainProvider, { MainContext } from "./context/mainContext";

import Header from "./components/Header";
import NavBar from "./components/Navbar";
import BotaoMenu from "./components/BotaoMenu";
import Footer from "./components/Footer";
import Section from "./components/Section";


function App() {
  const [ativado, setAtivado] = useState(false);

  const ctx = useContext(MainContext);

  console.log(ctx);

  // useEffect(() => {
  //   pegaDados();
  // }, []);

  return (
    <MainProvider>
      <div className={styles.container}>
        <Header />
        <NavBar ativado={ativado} setAtivado={setAtivado} />
        <BotaoMenu ativado={ativado} setAtivado={setAtivado} />
        <main className={styles.main}>
          <Section tipo="sobremesas" />
        </main>
        <Footer />
      </div>
    </MainProvider>
  );
}

export default App;
