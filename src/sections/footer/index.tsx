import React from "react";

//styles
import * as S from "./styles";

export const Footer = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Version> V1.0.3 </S.Version>
        <S.ByAuthor>Feito por Cleber ❤️</S.ByAuthor>
      </S.Content>
    </S.Wrapper>
  );
};
