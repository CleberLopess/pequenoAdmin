import React, { useState } from "react";

//styles
import * as S from "./styled";

//component
import { Modal } from "src/components/Modal";

//context
import { useFormContext } from "src/context/useFormContext";

export const Header = () => {
  const { formData } = useFormContext();
  const [showModal, setShowModal] = useState(false);
  const [showSaveOrCancelButtons, setShowSaveOrCancelButtons] = useState(false);

  const handleClickModal = () => {
    setShowModal(!showModal);
    setShowSaveOrCancelButtons(true);
  };

  const handleClickCancelEdit = () => {
    location.reload();
  };

  const handleClickSaveEdit = () => {
    setShowSaveOrCancelButtons(false);
    localStorage.setItem("dataEditable", JSON.stringify(formData));
  };

  return (
    <>
      {showModal && <Modal handleClickClose={handleClickModal} />}
      <S.Wrapper>
        <S.ContentEdit>
          {showSaveOrCancelButtons ? (
            <>
              <S.DeleteEdit onClick={handleClickCancelEdit}>
                Cancelar Alterações
              </S.DeleteEdit>
              <S.SaveEdit onClick={handleClickSaveEdit}>
                Salvar Alterações
              </S.SaveEdit>
            </>
          ) : (
            <S.OptionEdit onClick={handleClickModal}>
              Editar Informações
            </S.OptionEdit>
          )}
        </S.ContentEdit>
      </S.Wrapper>
    </>
  );
};
