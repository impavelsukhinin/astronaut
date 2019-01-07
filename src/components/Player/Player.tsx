import * as React from 'react'

import NavPanel from './NavPanel'

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
				<NavPanel play={play} onPlayButtonClick={this.playPauseClick} />
			</div>
		)
	}
}

export default Player
