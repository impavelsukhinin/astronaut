import * as React from 'react'

import Player from 'components/Player'

import styles from './App.pcss'
import 'styles/global.pcss'

const App = () => (
	<div className={styles.root}>
		<Player/>
	</div>
)

export default App
