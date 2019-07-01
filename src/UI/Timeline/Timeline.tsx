/* stylelint-disable */
import React from 'react'

import { Root, Time, Buffer } from './Styles'

import { TimelineProps } from './Timeline.d'

const Timeline: React.FC<TimelineProps> = ({ timePercent, bufferPercent, onTimelineClick }) => {
	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		const { currentTarget, clientX } = e
		const { left, width } = currentTarget.getBoundingClientRect()
		const pos = clientX - left

		onTimelineClick(pos / width)
	}

	return (
		<Root onClick={handleClick}>
			<Time style={{ width: `${timePercent}%` }} />
			<Buffer style={{ width: `${bufferPercent}%` }} />
		</Root>
	)
}

export default Timeline
