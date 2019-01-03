import * as React from 'react'

import Button from 'components/Button'

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
				<Button className={styles.button} onClick={this.playPauseClick}>
					<svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						{play
							? <><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/><path d="M0 0h24v24H0z" fill="none"/></>
							:<><path d="M8 5v14l11-7z"/><path d="M0 0h24v24H0z" fill="none"/></>
						}
					</svg>
				</Button>
			</div>
		)
	}
}

export default Player
