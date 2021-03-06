import styled from 'styled-components';
import { transparentize } from 'polished';

import Container from '@components/utils/Container';

import { devices } from '@utils/mediaQueries';

export const StyledNavbar = styled.nav`
	position: relative;
	padding: 2rem 1.25rem;
	background: ${(props) => props.theme.colors.blue[400]};
	background-image: linear-gradient(
		to top,
		${(props) => transparentize(0.73, props.theme.colors.greyscale[700])},
		transparent
	);
	color: ${(props) => props.theme.colors.greyscale[100]};
	margin-bottom: 2.5rem;
`;

export const StyledLink = styled.a`
	display: block;

	&:hover {
		cursor: pointer;
	}
`;

export const BackArrow = styled.img`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: 2rem;
	width: 2rem;
	transition: opacity 0.2s;

	&:hover {
		opacity: 0.6;
	}
`;

export const StyledContainer = styled(Container)`
	display: flex;
	justify-content: center;
`;

export const Logo = styled.a`
	display: flex;
	margin: 0 0 0.5rem 0;

	@media ${devices.xs} {
		margin: 0 1.25rem 0 0;
	}
`;

export const PageTitle = styled.h1`
	font-family: 'Ubuntu', sans-serif;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media ${devices.xs} {
		flex-direction: row;
	}

	h1 {
		font-size: 2rem;
	}
`;
