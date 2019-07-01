import React from 'react'

import { Button, Icon } from 'UI'

import styles from './NavPanel.pcss'

import { INavPanelProps } from './NavPanel.d'

const noop = () => false

const NavPanel: React.FC<INavPanelProps> = ({ play, onPlayButtonClick, onNextClick = noop, onPrevClick = noop }) => (
	<div className={styles.root}>
		<Button onClick={onPrevClick} className={styles.button}>
			<Icon name="prev" />
		</Button>
		<Button className={styles.button} onClick={onPlayButtonClick}>
			<Icon className={styles.icon} name={play ? 'play' : 'pause'} />
		</Button>
		<Button onClick={onNextClick} className={styles.button}>
			<Icon name="next" />
		</Button>
	</div>
)

export default NavPanel
