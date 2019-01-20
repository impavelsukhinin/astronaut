import * as React from 'react'

import NavPanel from './NavPanel'
import Timeline from './Timeline'
import RangeSlider  from 'components/UI/RangeSlider'

import styles from './Player.pcss'

import { PlayerProps, PlayerState } from './Player.d'

class Player extends React.PureComponent<PlayerProps, PlayerState> {
	sound = new Audio(this.props.sound)
	state = {
		play: false,
	}

	componentDidMount() {
		this.sound.addEventListener('timeupdate', this.timeUpdate)
	}

	componentWillUnmount() {
		this.sound.removeEventListener('timeupdate', this.timeUpdate)
	}

	timeUpdate = (e: any) => {
		console.log(e.currentTarget.currentTime)
	}

	playPauseClick = () => this.setState((state) => {
		if (!state.play) {
			this.sound.play()
		} else {
			this.sound.pause()
		}

		return {
			play: !state.play
		}
	})

	onVolumeChange = (percent: string | number) => {
		this.sound.volume = +percent / 100
	}

	render() {
		const { play } = this.state

		return (
			<div className={styles.root}>
				<Timeline/>
				<div className={styles.main}>
					<NavPanel play={play} onPlayButtonClick={this.playPauseClick}/>
					<RangeSlider startValue={100} onChange={this.onVolumeChange}/>
				</div>
			</div>
		)
	}
}

export default Player
