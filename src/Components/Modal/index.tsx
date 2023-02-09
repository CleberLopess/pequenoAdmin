import React, { useCallback, useEffect, useState } from "react";

//styles
import {
  Content,
  ContentInput,
  Input,
  Title,
  TitleInput,
  Wrapper,
  TitleAndInputs,
  ButtonClose,
  ButtonSubmit,
  Textarea,
} from "./styles";

//interface
import { ILocalStorage } from "@/interface/localStorage";
import { IModal } from "@/interface/modal";

export const Modal = ({ handleClickClose }: IModal) => {
  const [dataLocalStorage, setDataLocalStorage] = useState<ILocalStorage>();
  const [banner, setBanner] = useState("");
  const [logo, setLogo] = useState("");
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [instagram, setInstagram] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  useEffect(() => {
    if (localStorage) {
      const dataLocal = localStorage.getItem("dataEditable");
      const parse = JSON.parse(dataLocal!);

      setDataLocalStorage(parse);

      setBanner(parse?.banner);
      setLogo(parse?.logo);
      setNome(parse?.nome);
      setDescricao(parse?.descricao);
      setInstagram(parse?.instagram);
      setWhatsapp(parse?.whatsapp);
    }
  }, []);

  const handleRequestValueInput = useCallback(async () => {
    //e.preventDefault();
    handleClickClose();

    const setObjectLocalStorage = {
      banner,
      logo,
      nome,
      descricao,
      instagram,
      whatsapp,
    };

    localStorage.setItem("dataEditable", JSON.stringify(setObjectLocalStorage));

    document.location.reload();
  }, [banner, descricao, handleClickClose, instagram, logo, nome, whatsapp]);

  return (
    <Wrapper>
      <Content>
        <ButtonClose onClick={handleClickClose}>X</ButtonClose>
        <Title>Edite as informações da página</Title>
        <ContentInput>
          <TitleAndInputs>
            <TitleInput>Banner</TitleInput>
            <Input
              onChange={(ev) => setBanner(ev.target.value)}
              value={banner}
              type="text"
              placeholder="Banner"
            ></Input>
          </TitleAndInputs>
          <TitleAndInputs>
            <TitleInput>Logo</TitleInput>
            <Input
              onChange={(ev) => setLogo(ev.target.value)}
              value={logo}
              type="text"
              placeholder="Logo"
            ></Input>
          </TitleAndInputs>
          <TitleAndInputs>
            <TitleInput>Nome</TitleInput>
            <Input
              onChange={(ev) => setNome(ev.target.value)}
              value={nome}
              type="text"
              placeholder="Nome"
            ></Input>
          </TitleAndInputs>
          <TitleAndInputs>
            <TitleInput>Descrição</TitleInput>
            <Textarea
              onChange={(ev) => setDescricao(ev.target.value)}
              value={descricao}
              placeholder="Descrição"
            ></Textarea>
          </TitleAndInputs>
          <TitleAndInputs>
            <TitleInput>Usuário do Instagram</TitleInput>
            <Input
              onChange={(ev) => setInstagram(ev.target.value)}
              value={instagram}
              type="text"
              placeholder="Usuário do Instagram"
            ></Input>
          </TitleAndInputs>
          <TitleAndInputs>
            <TitleInput>Número do WhastApp</TitleInput>
            <Input
              onChange={(ev) => setWhatsapp(ev.target.value)}
              value={whatsapp}
              type="text"
              placeholder="Número do WhastApp"
            ></Input>
          </TitleAndInputs>
        </ContentInput>
        <ButtonSubmit onClick={handleRequestValueInput}>Salvar</ButtonSubmit>
      </Content>
    </Wrapper>
  );
};
