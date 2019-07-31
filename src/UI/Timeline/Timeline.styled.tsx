import styled from 'styled-components'

export const Root = styled('div')`
	position: relative;

	width: 100%;
	height: 1em;
	background-color: var(--default);
	cursor: pointer;
	transition: transform 0.2s;
`

const Progress = styled('div')`
	position: absolute;
	top: 0;
	left: 0;

	width: 0;
	height: 100%;
	background-color: var(--red);
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

export const TimeCount = styled('div')`
	position: absolute;
	z-index: 3;
	top: 0;
	left: 0.3em;
	font-size: 13px;
`

export const RigthTimeCount = styled(TimeCount)`
	right: 0.3em;
	left: auto;
`
