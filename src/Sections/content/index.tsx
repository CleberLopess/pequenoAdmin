import React, { useEffect, useState } from "react";

//styles
import {
  Content,
  Description,
  TitleAndLinks,
  ImageSocials,
  Links,
  Title,
  ButtonLinks,
} from "./styled";

//interface
import { ILocalStorage } from "@/interface/localStorage";

export const ContentRestaurant = () => {
  const [dataLocalStorage, setDataLocalStorage] = useState<ILocalStorage>();

  useEffect(() => {
    if (localStorage) {
      const dataLocal = localStorage.getItem("dataEditable");
      const parse = JSON.parse(dataLocal!);

      setDataLocalStorage(parse);
    }
  }, []);

  return (
    <Content>
      <TitleAndLinks>
        <Title>{dataLocalStorage?.nome}</Title>
        <Links>
          <ButtonLinks
            href={` https://www.instagram.com/${dataLocalStorage?.instagram}`}
            target="_blank"
          >
            <ImageSocials
              src={"/images/instagram.png"}
              alt="instagram"
              width={30}
              height={30}
            />
          </ButtonLinks>
          <ButtonLinks
            href={` https://wa.me/${dataLocalStorage?.whatsapp}`}
            target="_blank"
          >
            <ImageSocials
              src={"/images/whatsapp.png"}
              alt="whatsapp"
              width={30}
              height={30}
            />
          </ButtonLinks>
        </Links>
      </TitleAndLinks>
      <Description
        dangerouslySetInnerHTML={{ __html: `${dataLocalStorage?.descricao}` }}
      />
    </Content>
  );
};
