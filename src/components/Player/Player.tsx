import * as React from 'react'

import NavPanel from './NavPanel'
import Timeline from './Timeline'

import styles from './Player.pcss'

class Player extends React.PureComponent {
	state = {
		play: false,
	}

	playPauseClick = () => this.setState({
		play: !this.state.play
	})

	render() {
		const { play } = this.state

		return (
			<div className={styles.root}>
				<Timeline/>
				<div className={styles.main}>
					<NavPanel play={play} onPlayButtonClick={this.playPauseClick}/>
				</div>
			</div>
		)
	}
}

export default Player
