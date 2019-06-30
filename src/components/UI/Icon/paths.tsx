import React from 'react'

const paths = {
	prev: (
		<>
			<path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
			<path d="M0 0h24v24H0z" fill="none" />
		</>
	),
	play: (
		<>
			<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
			<path d="M0 0h24v24H0z" fill="none" />
		</>
	),
	pause: (
		<>
			<path d="M8 5v14l11-7z" />
			<path d="M0 0h24v24H0z" fill="none" />
		</>
	),
	next: (
		<>
			<path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
			<path d="M0 0h24v24H0z" fill="none" />
		</>
	)
}

export default paths
