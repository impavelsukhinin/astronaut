import * as React from 'react'

import NavPanel from './NavPanel'
import Timeline from './Timeline'
import RangeSlider  from 'components/UI/RangeSlider'

import styles from './Player.pcss'

class Player extends React.PureComponent {
	state = {
		play: false,
	}

	playPauseClick = () => this.setState({
		play: !this.state.play
	})

	onVolumeChange = (percent: string | number) => {
		console.log(`Громкость: ${percent}`)
	}

	render() {
		const { play } = this.state

		return (
			<div className={styles.root}>
				<Timeline/>
				<div className={styles.main}>
					<NavPanel play={play} onPlayButtonClick={this.playPauseClick}/>
					<RangeSlider onChange={this.onVolumeChange}/>
				</div>
			</div>
		)
	}
}

export default Player
