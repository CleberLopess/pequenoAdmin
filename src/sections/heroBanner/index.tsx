import { useEffect, useState } from "react";

//context
import { useFormContext } from "src/context/useFormContext";

//styles
import * as S from "./styled";

//interface
import { IFormTypes } from "interface/context/form";

export const HeroBanner = () => {
  const { formData } = useFormContext();
  const { banner, logo } = formData;

  const [dataLocalStorage, setDataLocalStorage] = useState<IFormTypes>();

  useEffect(() => {
    if (localStorage) {
      const dataLocal = localStorage.getItem("dataEditable");
      const parse: IFormTypes = JSON.parse(dataLocal!);

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
