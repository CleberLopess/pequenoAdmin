import React from 'react';
import * as S from './styled';

interface IProps {
	children: React.ReactNode;
}

export const Layout = ({ children }: IProps) => {
	return <S.Wrapper>{children}</S.Wrapper>;
};
