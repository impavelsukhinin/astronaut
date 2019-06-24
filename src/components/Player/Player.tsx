import React, { memo, useState } from 'react'
import classnames from 'classnames'

import RangeSlider from 'components/UI/RangeSlider'
import useEventListner from 'utils/useEventListner'

import NavPanel from './NavPanel'
import Timeline from './Timeline'

import styles from './Player.pcss'

import { PlayerProps } from './Player.d'

const Player = ({ sound, className, onNextClick, onPrevClick, onPlayPauseClick }: PlayerProps) => {
	const [soundEl] = useState<HTMLAudioElement>(new Audio(sound))
	const [play, setPlay] = useState<boolean>(false)

	const timeUpdate = (e: React.SyntheticEvent<HTMLAudioElement>) => {
		console.log(e.currentTarget.currentTime)
		console.log(e.currentTarget.duration)
	}

	useEventListner<HTMLAudioElement>('timeupdate', timeUpdate, soundEl)

	const playPauseClick = () => {
		soundEl[play ? 'pause' : 'play']()

		setPlay(!play)

		if (typeof onPlayPauseClick === 'function') {
			onPlayPauseClick()
		}
	}

	const onVolumeChange = (percent: number) => (soundEl.volume = percent / 100)

	return (
		<div className={classnames(styles.root, className)}>
			<Timeline />
			<div className={styles.main}>
				<NavPanel play={play} onPlayButtonClick={playPauseClick} />
				<RangeSlider startValue={100} onChange={onVolumeChange} />
			</div>
		</div>
	)
}

export default memo(Player)
