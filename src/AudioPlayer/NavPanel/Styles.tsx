import styled from 'styled-components'

import { default as StyledButton } from 'UI/Button'
import { default as StyledIcon } from 'UI/Icon'

export const Root = styled('div')`
	display: flex;
	align-items: center;
`

export const Button = styled(StyledButton)`
	padding: 1em;

	& + & {
		margin-left: 10px;
	}
`

export const Icon = styled(StyledIcon)`
	width: 2em;
	height: 2em;
	user-select: none;
`
