export interface PlayerProps {
	sound?: string
	onNextClick?: () => void
	onPrevClick?: () => void
	onPlayPauseClick?: () => void
}

export interface PlayerState {
	play: boolean
}