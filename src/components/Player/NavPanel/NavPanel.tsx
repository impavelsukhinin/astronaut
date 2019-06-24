import React from 'react'

import Button from 'components/UI/Button'

import styles from './NavPanel.pcss'

import { INavPanelProps } from './NavPanel.d'

const NavPanel = ({ play, onPlayButtonClick }: INavPanelProps) => (
	<div className={styles.root}>
		<Button className={styles.button}>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
				<path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
				<path d="M0 0h24v24H0z" fill="none" />
			</svg>
		</Button>
		<Button className={styles.button} onClick={onPlayButtonClick}>
			<svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
				{play ? (
					<>
						<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
						<path d="M0 0h24v24H0z" fill="none" />
					</>
				) : (
					<>
						<path d="M8 5v14l11-7z" />
						<path d="M0 0h24v24H0z" fill="none" />
					</>
				)}
			</svg>
		</Button>
		<Button className={styles.button}>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
				<path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
				<path d="M0 0h24v24H0z" fill="none" />
			</svg>
		</Button>
	</div>
)

export default NavPanel
