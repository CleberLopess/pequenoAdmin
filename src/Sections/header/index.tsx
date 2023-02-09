import { Modal } from "@/src/Components/Modal";
import React, { useState } from "react";
import { OptionEdit, Wrapper, ContentEdit } from "./styled";

export const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClickModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {showModal && <Modal handleClickClose={handleClickModal} />}
      <Wrapper>
        <ContentEdit>
          <OptionEdit onClick={handleClickModal}>Editar Informações</OptionEdit>
        </ContentEdit>
      </Wrapper>
    </>
  );
};
