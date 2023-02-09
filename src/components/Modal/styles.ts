import styled, { keyframes } from 'styled-components';

export const animationForm = keyframes`
  0%   { top: -10px; opacity: 0%;}
  50%  { top: -5px; opacity: 50%;}
  100% { top: 0px; opacity: 100%;}
  `;

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

export const Content = styled.div`
	background-color: #fefefe;
	display: flex;
	flex-direction: column;
	border-radius: 10px;
	padding: 15px;
	gap: 30px;
	z-index: 11;
	max-width: 400px;
	width: 90%;
	animation: 0.8s linear ${animationForm};
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 5px;
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

	margin-right: 10px;
	justify-content: center;
	margin: auto;
	width: 100px;

	&:hover {
		background-color: #858bd1;
	}
`;
