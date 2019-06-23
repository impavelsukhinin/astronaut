import React, { memo, useState } from 'react'

import RangeSlider  from 'components/UI/RangeSlider'
import useEventListner from 'utils/useEventListner'

import NavPanel from './NavPanel'
import Timeline from './Timeline'

import styles from './Player.pcss'

import { PlayerProps } from './Player.d'

const Player = ({ sound }: PlayerProps) => {
	const [soundEl] = useState<HTMLAudioElement>(new Audio(sound))
	const [play, setPlay] = useState<boolean>(false)

	const timeUpdate = (e: React.SyntheticEvent<HTMLAudioElement>) => {
		console.log(e.currentTarget.currentTime)
	}

	useEventListner<HTMLAudioElement>('timeupdate', timeUpdate, soundEl)

	const playPauseClick = () => {
		soundEl[play ? 'pause' : 'play']()

		setPlay(!play)
	}

	const onVolumeChange = (percent: string | number) => {
		soundEl.volume = +percent / 100
	}

	return (
		<div className={styles.root}>
			<Timeline/>
			<div className={styles.main}>
				<NavPanel play={play} onPlayButtonClick={playPauseClick}/>
				<RangeSlider startValue={100} onChange={onVolumeChange}/>
			</div>
		</div>
	)
}

export default memo(Player)
