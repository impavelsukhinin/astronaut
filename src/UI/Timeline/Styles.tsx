import styled from 'styled-components'

export const Root = styled('div')`
	position: relative;

	width: 100%;
	height: 0.5em;
	background-color: var(--default);
	cursor: pointer;
	transition: transform 0.2s;

	:hover {
		transform: scaleY(1.1);
	}
`

const Progress = styled('div')`
	position: absolute;
	top: 0;
	left: 0;

	width: 0;
	height: 100%;
	background-color: var(--blue);
`

export const Time = styled(Progress)`
	z-index: 2;
`

export const Buffer = styled(Progress)`
	z-index: 1;

	width: 0;
	opacity: 0.3;
	transition: width 0.2s;
`
