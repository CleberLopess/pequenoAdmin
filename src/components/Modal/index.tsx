import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

//styles
import * as S from "./styles";

//interface
import { IModal } from "interface/modal";
import { useFormContext } from "src/context/useFormContext";

type FormTypes = {
  banner: string;
  logo: string;
  nameRestaurant: string;
  number: string;
  description: string;
};

export const Modal = ({ handleClickClose }: IModal) => {
  const dataLocal = localStorage.getItem("dataEditable");
  const parse = JSON.parse(dataLocal!);

  const { setFormData, formData } = useFormContext();
  const { banner, logo, description, nameRestaurant, number } = formData;

  const [valueBanner, setValueBanner] = useState(parse?.banner ?? banner);
  const [valueLogo, setValueLogo] = useState(parse?.logo ?? logo);
  const [valueDescription, setValueDescription] = useState(
    parse?.description ?? description
  );
  const [valueNameRestaurant, setValueNameRestaurant] = useState(
    parse?.nameRestaurant ?? nameRestaurant
  );
  const [valueNumber, setValueNumber] = useState(parse?.number ?? number);

  const methods = useForm<FormTypes>({
    mode: "onChange",
  });

  const { handleSubmit, register } = methods;

  const onSubmit = handleSubmit(async (data) => {
    handleClickClose();

    setFormData({
      banner: data.banner ?? parse.banner,
      logo: data.logo ?? parse.banner,
      nameRestaurant: data.nameRestaurant ?? parse.banner,
      number: data.number ?? parse.banner,
      description: data.description ?? parse.banner,
    });
  });

  return (
    <S.Wrapper>
      <S.Content>
        <S.ButtonClose onClick={handleClickClose}>X</S.ButtonClose>
        <FormProvider {...methods}>
          <S.Form onSubmit={onSubmit} id="home-form">
            <S.Title>Name</S.Title>
            <S.ContentInput>
              <S.TitleInput>Banner</S.TitleInput>
              <S.Input
                {...register("banner")}
                type="text"
                placeholder="URL"
                value={valueBanner}
                onChange={(ev) => setValueBanner(ev.target.value)}
              />
            </S.ContentInput>
            <S.ContentInput>
              <S.TitleInput>Logo</S.TitleInput>
              <S.Input
                {...register("logo")}
                type="text"
                placeholder="URL"
                value={valueLogo}
                onChange={(ev) => setValueLogo(ev.target.value)}
              />
            </S.ContentInput>
            <S.ContentInput>
              <S.TitleInput>Nome do Restaurante</S.TitleInput>
              <S.Input
                {...register("nameRestaurant")}
                type="text"
                value={valueNameRestaurant}
                onChange={(ev) => setValueNameRestaurant(ev.target.value)}
              />
            </S.ContentInput>
            <S.ContentInput>
              <S.TitleInput>Numero do Whatsapp</S.TitleInput>
              <S.Input
                {...register("number")}
                type="text"
                placeholder="DDD000000000"
                value={valueNumber}
                onChange={(ev) => setValueNumber(ev.target.value)}
              />
            </S.ContentInput>
            <S.ContentInput>
              <S.TitleInput>Descrição</S.TitleInput>
              <S.Textarea
                {...register("description")}
                value={valueDescription}
                onChange={(ev) => setValueDescription(ev.target.value)}
              />
            </S.ContentInput>
            <S.ButtonSubmit type="submit">Salvar</S.ButtonSubmit>
          </S.Form>
        </FormProvider>
      </S.Content>
    </S.Wrapper>
  );
};
