import React, { useState } from "react";
import { createContext } from "react";
import { api } from "../services/api";

export const MainContext = createContext();

function MainProvider({children}) {
  const [dados, setDados] = useState([]);

  async function pegaDados() {
    try{
      let { data } = await api.get("/produtos");
      setDados(data);
    } catch(e) {
      console.log(e);
    }
  }

  return(
    <MainContext.Provider value={{pegaDados, dados}}>
      {children}
    </MainContext.Provider>
  )
}

export default MainProvider;