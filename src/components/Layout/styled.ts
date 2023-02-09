import styled from 'styled-components';
import { MediaQueries } from '@/utils/MediaQueries';

export const Wrapper = styled.main`
	section {
		width: calc(100% - 15px);
		max-width: 1200px;
		height: 100%;
		margin: 0 auto;

		${MediaQueries.mobileMilde} {
			width: calc(100% - 100px);
		}

		${MediaQueries.tablet} {
			width: 700px;
		}

		${MediaQueries.tabletMilde} {
			width: 864px;
		}

		${MediaQueries.desktop} {
			width: 100%;
		}
	}
`;
