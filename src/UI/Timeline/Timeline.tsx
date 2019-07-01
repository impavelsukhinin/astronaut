import React from 'react'

import styles from './Timeline.pcss'

import { TimelineProps } from './Timeline.d'

const Timeline: React.FC<TimelineProps> = ({ timePercent, bufferPercent, onTimelineClick }) => {
	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		const { currentTarget, clientX } = e
		const { left, width } = currentTarget.getBoundingClientRect()
		const pos = clientX - left

		onTimelineClick(pos / width)
	}

	return (
		<div onClick={handleClick} className={styles.root}>
			<div className={styles.time} style={{ width: `${timePercent}%` }} />
			<div className={styles.buffer} style={{ width: `${bufferPercent}%` }} />
		</div>
	)
}

export default Timeline
