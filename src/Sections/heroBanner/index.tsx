import React, { useEffect, useState } from "react";

//styles
import { Wrapper, LogoMarca, Content } from "./styled";

//interface
import { ILocalStorage } from "@/interface/localStorage";

export const HeroBanner = () => {
  const [dataLocalStorage, setDataLocalStorage] = useState<ILocalStorage>();

  useEffect(() => {
    if (localStorage) {
      const dataLocal = localStorage.getItem("dataEditable");
      const parse = JSON.parse(dataLocal!);

      setDataLocalStorage(parse);
    }
  }, []);

  return (
    <Wrapper style={{ backgroundImage: `url(${dataLocalStorage?.banner})` }}>
      <Content>
        <LogoMarca src={dataLocalStorage?.logo}></LogoMarca>
      </Content>
    </Wrapper>
  );
};
