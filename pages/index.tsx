import React, { useEffect } from "react";
import { Layout } from "src/components/Layout";
import { Header } from "@/src/sections/header";
import { HeroBanner } from "@/src/sections/heroBanner";
import { ContentRestaurant } from "@/src/sections/content";
import { useFormContext } from "src/context/useFormContext";

const App = () => {
  const { formData } = useFormContext();
  const { banner, logo, nameRestaurant, number, description } = formData;

  useEffect(() => {
    const dataEditable = {
      banner,
      logo,
      nameRestaurant,
      number,
      description,
    };

    if (!!localStorage.getItem("dataEditable")) {
      return;
    }

    return localStorage.setItem("dataEditable", JSON.stringify(dataEditable));
  }, [banner, logo, number, nameRestaurant, description]);

  return (
    <Layout>
      <Header />
      <HeroBanner />
      <ContentRestaurant />
    </Layout>
  );
};

export default App;
