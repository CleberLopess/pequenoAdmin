import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

//styles
import * as S from "./styles";

//interface
import { IModal } from "interface/modal";
import { useFormContext } from "src/context/useFormContext";
import { IFormTypes } from "interface/context/form";

export const Modal = ({ handleClickClose }: IModal) => {
  const dataLocal = localStorage.getItem("dataEditable");
  const parse = JSON.parse(dataLocal!);
  const { setFormData, formData } = useFormContext();
  const { banner, logo, description, nameRestaurant, whatsapp } = formData;

  const methods = useForm<IFormTypes>({
    mode: "onChange",
    defaultValues: {
      banner: parse?.banner ?? banner,
      logo: parse?.logo ?? logo,
      nameRestaurant: parse?.nameRestaurant ?? nameRestaurant,
      instagram: parse?.whatsapp ?? whatsapp,
      whatsapp: parse?.whatsapp ?? whatsapp,
      description: parse?.description ?? description,
    },
  });
  const { handleSubmit, register } = methods;

  const onSubmit = handleSubmit(async (data) => {
    handleClickClose();

    setFormData({
      banner: data.banner ?? parse.banner,
      logo: data.logo ?? parse.logo,
      nameRestaurant: data.nameRestaurant ?? parse.nameRestaurant,
      whatsapp: data.whatsapp ?? parse.whatsapp,
      description: data.description ?? parse.description,
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
              <S.Input {...register("banner")} type="text" placeholder="URL" />
            </S.ContentInput>
            <S.ContentInput>
              <S.TitleInput>Logo</S.TitleInput>
              <S.Input {...register("logo")} type="text" placeholder="URL" />
            </S.ContentInput>
            <S.ContentInput>
              <S.TitleInput>Nome do Restaurante</S.TitleInput>
              <S.Input {...register("nameRestaurant")} type="text" />
            </S.ContentInput>
            <S.ContentInput>
              <S.TitleInput>Usuário do Instagram</S.TitleInput>
              <S.Input {...register("instagram")} type="text" />
            </S.ContentInput>
            <S.ContentInput>
              <S.TitleInput>Numero do Whatsapp</S.TitleInput>
              <S.Input
                {...register("whatsapp")}
                type="text"
                placeholder="DDD000000000"
              />
            </S.ContentInput>
            <S.ContentInput>
              <S.TitleInput>Descrição</S.TitleInput>
              <S.Textarea {...register("description")} />
            </S.ContentInput>
            <S.ButtonSubmit type="submit">Salvar</S.ButtonSubmit>
          </S.Form>
        </FormProvider>
      </S.Content>
    </S.Wrapper>
  );
};
