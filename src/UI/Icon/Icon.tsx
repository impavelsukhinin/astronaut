import React, { memo } from 'react'
import paths from './paths'

export interface IconProps {
	name: keyof typeof paths
	className?: string
}

const Icon: React.FC<IconProps> = ({ name = 'prev', className }) => (
	<svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
		{paths[name]}
	</svg>
)

export default memo(Icon)
