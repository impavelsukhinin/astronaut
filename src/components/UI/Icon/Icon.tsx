import React from 'react'
import paths from './paths'

interface IconProps {
	name: keyof typeof paths
	className?: string
}

const Icon = ({ name = 'prev', className }: IconProps) => (
	<svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
		{paths[name]}
	</svg>
)

export default Icon
