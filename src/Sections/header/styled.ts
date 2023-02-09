import styled from "styled-components";
import Image from "next/image";

export const Wrapper = styled.div`
  background-color: #fefefe;
  z-index: 1;
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  height: fit-content;
`;

export const ContentEdit = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: right;
`;
export const OptionEdit = styled.button`
  background-color: #a5acfd;
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  margin-right: 10px;

  &:hover {
    background-color: #858bd1;
  }
`;
