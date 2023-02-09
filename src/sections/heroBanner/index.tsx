import { useEffect, useState } from "react";

//context
import { useFormContext } from "src/context/useFormContext";

//styles
import * as S from "./styled";

//interface
import { ILocalStorage } from "@/interface/localStorage";

export const HeroBanner = () => {
  const { formData } = useFormContext();
  const { banner, logo } = formData;

  const [dataLocalStorage, setDataLocalStorage] = useState<ILocalStorage>();

  useEffect(() => {
    if (localStorage) {
      const dataLocal = localStorage.getItem("dataEditable");
      const parse = JSON.parse(dataLocal!);

      setDataLocalStorage(parse);
    }
  }, []);

  return (
    <S.Wrapper
      style={{ backgroundImage: `url(${dataLocalStorage?.banner ?? banner})` }}
    >
      <S.Content>
        <S.LogoMarca src={dataLocalStorage?.logo ?? logo}></S.LogoMarca>
      </S.Content>
    </S.Wrapper>
  );
};
