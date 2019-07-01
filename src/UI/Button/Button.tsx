import React, { memo, useState, useRef } from 'react'

import { Button as StyledButton, ButtonChildren } from './Styles'

import { IButtonComponentType } from './Button.d'

const Button: IButtonComponentType = ({ children, className, onClick }) => {
	const buttonRef = useRef<HTMLDivElement>(null)
	const [withRipple, setWithRipple] = useState<boolean>(false)

	const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
		const { current: button } = buttonRef
		const rect = button.getBoundingClientRect()
		const x = e.clientX - rect.left
		const y = e.clientY - rect.top

		button.style.setProperty('--ripple-position-top', `${y}px`)
		button.style.setProperty('--ripple-position-left', `${x}px`)

		if (!withRipple) {
			setWithRipple(true)

			setTimeout(() => {
				setWithRipple(false)
			}, 500)
		}

		if (onClick) {
			onClick(e)
		}
	}

	return (
		<StyledButton className={className} ref={buttonRef} onClick={onClickHandler} withRipple={withRipple}>
			<ButtonChildren>{children}</ButtonChildren>
		</StyledButton>
	)
}

export default memo<IButtonComponentType>(Button)
