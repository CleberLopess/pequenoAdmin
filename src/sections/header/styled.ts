import styled from "styled-components";

export const Wrapper = styled.header`
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

export const DeleteEdit = styled.button`
  display: flex;
  align-items: center;
  background-color: #f46666;

  &:hover {
    background-color: #b41616;
    color: #ffff;
  }
`;

export const SaveEdit = styled.button`
  display: flex;
  align-items: center;
  background-color: #42e942;

  &:hover {
    background-color: #099709;
    color: #ffff;
  }
`;

export const OptionEdit = styled.button`
  display: flex;
  align-items: center;
  background-color: #a5acfd;

  &:hover {
    background-color: #858bd1;
  }
`;
