import styled from 'styled-components';
import Image from 'next/image';
import { MediaQueries } from 'utils/MediaQueries';

export const Content = styled.section`
	gap: 25px;
	display: flex;
	flex-direction: column;
`;
export const TitleAndLinks = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const Title = styled.h2`
	margin-bottom: 0;
	font-size: 30px;

	${MediaQueries.tablet} {
		font-size: 35px;
	}
`;

export const Links = styled.div`
	display: flex;
	gap: 10px;
`;

export const ButtonLinks = styled.a`
	text-decoration: none;
	gap: 10px;
`;

export const ImageSocials = styled(Image)`
	display: flex;
`;

export const Description = styled.div`
	margin-bottom: 40px;
`;
