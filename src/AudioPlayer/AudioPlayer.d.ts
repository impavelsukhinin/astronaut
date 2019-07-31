export interface PlayerProps {
	/** Audio file path */
	sound?: string
	/** Classname for root element */
	className?: string
	/** Song title */
	children?: JSX.Element[] | JSX.Element
	/** onNext button event handler */
	onNextClick?: () => void
	/** onPrev button event handler */
	onPrevClick?: () => void
	/** onPlay/Pause button event handler */
	onPlayPauseClick?: () => void
	/** On current sound ended event handler */
	onSoundEnded?: () => void
	/** On current sound time update */
	onTimeUpdate?: (currentTime?: number) => void
}
