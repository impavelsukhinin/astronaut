import React from 'react'

import { Root, Button, Icon } from './NavPanel.styled'

import { INavPanelProps } from './NavPanel.d'

const noop = () => false

const NavPanel: React.FC<INavPanelProps> = ({ play, onPlayButtonClick, onNextClick = noop, onPrevClick = noop }) => (
	<Root>
		<Button onClick={onPrevClick}>
			<Icon name="prev" />
		</Button>
		<Button onClick={onPlayButtonClick}>
			<Icon name={play ? 'play' : 'pause'} />
		</Button>
		<Button onClick={onNextClick}>
			<Icon name="next" />
		</Button>
	</Root>
)

export default NavPanel
