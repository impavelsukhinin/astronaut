import React, { memo, useEffect, useState, useRef } from 'react'
import classnames from 'classnames/bind'
import useEventListener from 'utils/useEventListner'

import styles from './RangeSlider.pcss'

import { RangeSliderProps } from './RangeSlider.d'

const cx = classnames.bind(styles)

const RangeSlider = ({ startValue = 100, onChange }: RangeSliderProps) => {
	const [mouseDown, setMouseDown] = useState<boolean>(false)

	const slider = useRef<HTMLDivElement>(null)
	const button = useRef<HTMLButtonElement>(null)
	const done = useRef<HTMLDivElement>(null)

	useEffect(() => {
		changeButtonPosition(startValue)
		button.current.addEventListener('mousedown', mouseDownHandler)

		return () => {
			button.current.removeEventListener('mousemove', mouseDownHandler)
		}
	}, [])

	const mouseUpHandler = () => setMouseDown(false)

	const mouseDownHandler = (e: MouseEvent) => {
		setMouseDown(true)
		updateDragger(e)
	}

	const changeButtonPosition = (percent: number | string) => {
		const { current: currentButton } = button
		const { current: currentDone } = done

		currentButton.style.left = `${percent}%`
		currentDone.style.width = `${+percent + 2}%`
	}

	const updateDragger = (e: MouseEvent) => {
		const { pageX: x } = e
		const { left: leftBorder, width } = slider.current.getBoundingClientRect()
		const rightBorder = leftBorder + width
		const fullPercent = rightBorder - leftBorder

		if (mouseDown && x && x >= leftBorder && x <= rightBorder) {
			const percent = ((x - leftBorder) / fullPercent * 100).toFixed(2)

			changeButtonPosition(percent)
			onChange(percent)
		}
	}

	useEventListener('mousemove', updateDragger)
	useEventListener('mouseup', mouseUpHandler)

	return (
		<div ref={slider} className={styles.slider}>
			<div ref={done} className={styles.done}/>
			<button ref={button} className={cx('button', { active: mouseDown })}/>
		</div>
	)
}

export default memo(RangeSlider)
