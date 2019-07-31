import styled from 'styled-components'

export const Root = styled('div')`
	--blue: #1976d2;
	--red: #dc004e;
	--default: #e0e0e0;
	--orange: #faac88;
	display: flex;
	width: 100%;
	height: 100%;
	flex-direction: column;
`

export const Main = styled('div')`
	display: flex;
	height: 100%;
	align-items: center;
	justify-content: space-between;
	padding: 1em 3em;
	box-shadow: 0 0 17px -4px rgba(0, 0, 0, 0.4);
`
