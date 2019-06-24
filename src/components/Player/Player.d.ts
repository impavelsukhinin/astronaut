export interface PlayerProps {
	/* audio file path/url */
	sound?: string
	/* classname for root element */
	className?: string
	/* on Next button event handler */
	onNextClick?: () => void
	/* on Prev button event handler */
	onPrevClick?: () => void
	/* on Play/Pause button event handler */
	onPlayPauseClick?: () => void
	/* on current sound ended event handler */
	onSoundEnded?: () => void
	/* on current sound time update */
	onTimeUpdate?: (currentTime?: number) => void
}
