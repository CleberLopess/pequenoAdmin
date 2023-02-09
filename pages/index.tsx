import React, { useEffect } from "react";
import { Layout } from "src/Components/Layout";
import { Header } from "src/Sections/header";
import { HeroBanner } from "src/Sections/heroBanner";
import { ContentRestaurant } from "src/Sections/content";

const App = () => {
  useEffect(() => {
    const dataEditable = {
      banner: "images/capa.jpg",
      logo: "images/logomarca.jpg",
      nome: "Que Barbada Restaurant's",
      descricao:
        "aaaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      instagram: "quebarbadaoficial",
      whatsapp: "00000000",
    };

    if (!!localStorage.getItem("dataEditable")) {
      return;
    }

    return localStorage.setItem("dataEditable", JSON.stringify(dataEditable));
  }, []);

  return (
    <Layout>
      <Header />
      <HeroBanner />
      <ContentRestaurant />
    </Layout>
  );
};

export default App;
