import React from 'react'

interface IButtonProps {
	className?: string
	onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

export type IButtonComponentType = React.FC<IButtonProps>
