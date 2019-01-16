import * as React from 'react'
import classnames from 'classnames/bind'

import styles from './RangeSlider.pcss'

import { RangeSliderProps } from './RangeSlider.d'

const cx = classnames.bind(styles)

class RangeSlider extends React.PureComponent<RangeSliderProps> {
	state = {
		mouseDown: false,
		currentPercent: this.props.startValue ? this.props.startValue : 0
	}
	slider = React.createRef<HTMLDivElement>()
	button = React.createRef<HTMLButtonElement>()
	done = React.createRef<HTMLDivElement>()

	componentDidMount() {
		const { currentPercent } = this.state

		this.changeButtonPosition(currentPercent)
		this.button.current.addEventListener('mousedown', (e) =>  {
			this.setState({ mouseDown: true })
			this.updateDragger(e)
		})
		document.addEventListener('mousemove', this.updateDragger)
		document.addEventListener('mouseup', () => { this.setState({ mouseDown: false }) })
	}

	changeButtonPosition = (percent: number | string) => {
		const { current: currentButton } = this.button
		const { current: currentDone } = this.done

		currentButton.style.left = `${percent}%`
		currentDone.style.width = `${+percent + 2}%`
	}

	updateDragger = (e: any) => {
		const { mouseDown } = this.state
		const { current: slider } = this.slider
		const { pageX: x } = e
		const { left: leftBorder, width } = slider.getBoundingClientRect()
		const rightBorder = leftBorder + width
		const fullPercent = rightBorder - leftBorder

		if (mouseDown && x && x >= leftBorder && x <= rightBorder) {
			const percent = ((x - leftBorder) / fullPercent * 100).toFixed(2)

			this.changeButtonPosition(percent)
			this.props.onChange(percent)
		}
	}

	render() {
		const { mouseDown } = this.state

		return (
			<div ref={this.slider} className={styles.slider}>
				<div ref={this.done} className={styles.done}/>
				<button ref={this.button} className={cx('button', { active: mouseDown })}/>
			</div>
		)
	}
}

export default RangeSlider
