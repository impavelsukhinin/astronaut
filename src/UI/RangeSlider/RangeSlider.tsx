import React, { memo, useEffect, useState, useRef } from 'react'
import useEventListener from 'utils/useEventListner'

import { Drag, Slider, Done } from './Styles'

import { RangeSliderProps } from './RangeSlider.d'

const RangeSlider: React.FC<RangeSliderProps> = ({ startValue = 100, onChange }) => {
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

	const changeButtonPosition = (percent: number) => {
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
			const percent = +(((x - leftBorder) / fullPercent) * 100).toFixed(2)

			changeButtonPosition(percent)
			onChange(percent)
		}
	}

	useEventListener('mousemove', updateDragger)
	useEventListener('mouseup', mouseUpHandler)

	return (
		<Slider ref={slider}>
			<Done ref={done} />
			<Drag ref={button} active={mouseDown} />
		</Slider>
	)
}

export default memo(RangeSlider)
