import * as React from 'react'
import classnames from 'classnames/bind'

import styles from './Button.pcss'

import { ButtonProps, ButtonState } from './Button.d'

const cx = classnames.bind(styles)

class Button extends React.PureComponent<ButtonProps, ButtonState> {
	buttonRef = React.createRef<HTMLDivElement>()
	state = {
		withRipple: false,
	}

	onClickHd = (e: React.MouseEvent<HTMLDivElement>) => {
		const { onClick } = this.props
		const { current: button } = this.buttonRef
		const rect = button.getBoundingClientRect()
		const x = e.clientX - rect.left
		const y = e.clientY - rect.top

		button.style.setProperty('--ripple-position-top', `${y}px`)
		button.style.setProperty('--ripple-position-left', `${x}px`)

		if (this.state.withRipple === false) {
			this.setState({ withRipple: true })

			setTimeout(() => {
				this.setState({ withRipple: false })
			}, 500)
		}

		if (onClick) {
			onClick(e)
		}
	}

	render() {
		const { children, className } = this.props
		const { withRipple } = this.state

		return (
			<div
				ref={this.buttonRef}
				onClick={this.onClickHd}
				className={cx('button', className, { withRipple })}
			>
				<div className={styles.children}>
					{children}
				</div>
			</div>
		)
	}
}

export default Button
