import { useRef, useEffect, ReactHTML, ReactNode } from 'react'

type IHandler = (e: Event | React.SyntheticEvent) => void

const useEventListener = <T extends HTMLElement>(
	eventName: string,
	handler: IHandler,
	element: T | Document = document,
) => {
	const savedHandler = useRef<IHandler>()

	useEffect(() => {
		savedHandler.current = handler
	}, [handler])

	useEffect(() => {
		const isSupported = element && element.addEventListener

		if (!isSupported) return

		const eventListener = (event: Event) => savedHandler.current(event)

		element.addEventListener(eventName, eventListener)

		return () => {
			element.removeEventListener(eventName, eventListener)
		}
	}, [eventName, element])
}

export default useEventListener
