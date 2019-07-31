export interface TimelineProps {
	timePercent: number
	bufferPercent: number
	duration: number
	currentTime: number
	onTimelineClick: (percent: number) => void
}
