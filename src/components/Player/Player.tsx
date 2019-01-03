import * as React from 'react'

import styles from './Player.pcss'

import Button from 'components/Button'
import playIcon from './assets/play.svg'
import pauseIcon from './assets/pause.svg'

class Player extends React.Component {
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
				<Button onClick={this.playPauseClick}>
					<img src={play ? pauseIcon : playIcon } alt="icon"/>
				</Button>
				<Button>Таймлайн</Button>
				<Button>Громкость</Button>
			</div>
		)
	}
}

export default Player
