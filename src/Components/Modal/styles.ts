import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.form`
  background-color: #fefefe;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 15px;
  gap: 30px;

  z-index: 11;
`;

export const ButtonClose = styled.button`
  margin: 0 0 0 auto;
`;

export const Title = styled.h2`
  margin: 0;
`;

export const ContentInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TitleAndInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const TitleInput = styled.h3`
  margin: 0;
`;

export const Input = styled.input`
  width: 100%;
  min-height: 20px;
  box-sizing: border-box;
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 20px;
  box-sizing: border-box;
`;

export const ButtonSubmit = styled.button`
  background-color: #a5acfd;
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  margin-right: 10px;
  justify-content: center;
  margin: auto;
  width: 100px;

  &:hover {
    background-color: #858bd1;
  }
`;
