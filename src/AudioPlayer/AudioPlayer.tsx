import React, { memo, useState } from 'react'
import classnames from 'classnames'

import { RangeSlider, Timeline } from 'UI'
import useEventListner from 'utils/useEventListner'
import useUpdate from 'utils/useUpdate'

import NavPanel from './NavPanel'

import styles from './AudioPlayer.pcss'

import { PlayerProps } from './AudioPlayer.d'

const AudioPlayer = ({
	sound,
	className,
	onNextClick,
	onPrevClick,
	onPlayPauseClick,
	onSoundEnded,
	onTimeUpdate,
}: PlayerProps) => {
	const [soundEl] = useState<HTMLAudioElement>(new Audio(sound))
	const [timePercent, setTimePercent] = useState<number>(0)
	const [bufferPercent, setBufferPercent] = useState<number>(0)
	const [play, setPlay] = useState<boolean>(false)

	useUpdate(() => {
		reset(true)
		soundEl.src = sound
		soundEl.play()
	}, [sound])

	const handleUpdateTime = (e: React.SyntheticEvent<HTMLAudioElement>) => {
		const { currentTime, duration, buffered } = e.currentTarget

		setTimePercent((currentTime / duration) * 100)

		if (buffered.length > 0) {
			setBufferPercent((buffered.end(0) / duration) * 100)
		}

		if (typeof onTimeUpdate === 'function') {
			onTimeUpdate(currentTime)
		}
	}

	const reset = (playState: boolean) => {
		setTimePercent(0)
		setBufferPercent(0)
		setPlay(playState)
	}

	const onEnded = () => {
		reset(false)

		if (typeof onSoundEnded === 'function') {
			onSoundEnded()
		}
	}

	const onChangeTimeHandler = (percent: number) => {
		soundEl.currentTime = soundEl.duration * percent
	}

	const playPauseClick = () => {
		soundEl[play ? 'pause' : 'play']()

		setPlay(!play)

		if (typeof onPlayPauseClick === 'function') {
			onPlayPauseClick()
		}
	}

	const onVolumeChange = (percent: number) => (soundEl.volume = percent / 100)

	useEventListner<HTMLAudioElement>('timeupdate', handleUpdateTime, soundEl)
	useEventListner<HTMLAudioElement>('ended', onEnded, soundEl)

	return (
		<div className={classnames(styles.root, className)}>
			<Timeline bufferPercent={bufferPercent} timePercent={timePercent} onTimelineClick={onChangeTimeHandler} />
			<div className={styles.main}>
				<NavPanel play={play} onPlayButtonClick={playPauseClick} onNextClick={onNextClick} onPrevClick={onPrevClick} />
				<RangeSlider startValue={100} onChange={onVolumeChange} />
			</div>
		</div>
	)
}

export default memo(AudioPlayer)
