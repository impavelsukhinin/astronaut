/* stylelint-disable */
import React from 'react'
import formatSeconds from 'utils/formatSeconds'

import { Root, Time, Buffer, TimeCount, RigthTimeCount } from './Timeline.styled'

import { TimelineProps } from './Timeline.d'

const Timeline: React.FC<TimelineProps> = ({ timePercent, bufferPercent, onTimelineClick, currentTime, duration }) => {
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
			<TimeCount>{formatSeconds(currentTime)}</TimeCount>
			<RigthTimeCount>{formatSeconds(duration)}</RigthTimeCount>
		</Root>
	)
}

export default Timeline
