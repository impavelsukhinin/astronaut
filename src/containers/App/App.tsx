import * as React from 'react'

import Player from 'components/Player'

import styles from './App.pcss'
import 'styles/global.pcss'

import avenger from './assets/avenger.jpg'

const App = () => (
	<div className={styles.root}>
		<img className={styles.albumPhoto} src={avenger} alt="image"/>
		<div className={styles.player}>
			<Player/>
		</div>
	</div>
)

export default App
