import styled from 'styled-components'

export const Slider = styled('div')`
	position: relative;

	width: 11em;
	height: 1.5em;

	::before {
		position: absolute;
		z-index: 1;
		top: 50%;

		width: 100%;
		height: 0.3em;
		background-color: var(--default);
		border-radius: 0.5em;
		content: '';
		transform: translateY(-70%);
	}
`
export const Done = styled('div')`
	position: absolute;
	z-index: 2;
	top: 50%;

	width: 12%;
	height: 0.3em;
	background-color: var(--red);
	border-radius: 0.5em;
	opacity: 0.5;
	transform: translateY(-70%);
`

export const Drag = styled('button')<{ active: boolean }>`
	position: absolute;
	z-index: 3;
	top: 0;
	left: 10%;

	width: 2em;
	height: 2em;
	border: none;
	background-color: var(--red);
	border-radius: 50%;
	box-shadow: ${({ active }) => (active ? '0 0 4em 1em rgba(0, 0, 0, 0.4)' : '0 0 5em 1em rgba(0, 0, 0, 0.4)')};
	cursor: pointer;
	outline: none;
	transform: translateX(-50%) ${({ active }) => (active ? 'scale(1.3)' : '')};
	transition: transform 0.3s, box-shadow 0.3s;

	&:hover {
		box-shadow: 0 0 4em 1em rgba(0, 0, 0, 0.4);
		transform: translateX(-50%) scale(1.3);
	}
`
