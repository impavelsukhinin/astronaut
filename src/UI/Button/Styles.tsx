import styled, { keyframes, css } from 'styled-components'

const rippleAnimation = keyframes`
	from {
		overflow: hidden;
		opacity: 0.6;
		transform: scale(0);
	}

	to {
		overflow: hidden;
		opacity: 0;
		transform: scale(8);
	}
`

export const Button = styled('div')<{ withRipple: boolean }>`
	--ripple-position-top: 1px;
	--ripple-position-left: 1px;
	--button-width: 3em;
	--button-height: 3em;
	position: relative;

	display: flex;

	overflow: hidden;
	justify-content: center;
	padding: 2rem;
	background: var(--blue);
	border-radius: 50%;
	box-shadow: 0 0.2em 1em 0 rgba(0, 0, 0, 0.5);
	cursor: pointer;
	transition: transform 0.3s, box-shadow 0.3s;

	:hover {
		box-shadow: 0 0.5em 1.5em 0 rgba(0, 0, 0, 0.5);
		transform: scale(1.05);
	}

	::before {
		position: absolute;
		z-index: 1;
		top: calc(var(--ripple-position-top) - var(--button-height) / 2);
		left: calc(var(--ripple-position-left) - var(--button-width) / 2);

		width: 3em;
		height: 3em;
		animation: ${({ withRipple }) =>
			withRipple
				? css`
						${rippleAnimation} 0.8s ease
				  `
				: 'none'};
		background: white;
		border-radius: 50%;
		content: '';
		opacity: 0;
		transition: transform 0.4s;
	}
`

export const ButtonChildren = styled('div')`
	position: relative;
	z-index: 2;

	display: flex;
	align-content: center;
`
