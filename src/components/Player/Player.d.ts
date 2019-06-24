export interface PlayerProps {
	/* audio file path */
	sound?: string
	/* classname for root element */
	className?: string
	/* on Next button event handler */
	onNextClick?: () => void
	/* on Prev button event handler */
	onPrevClick?: () => void
	/* on Play/Pause button event handler */
	onPlayPauseClick?: () => void
}
