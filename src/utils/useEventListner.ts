import { useRef, useEffect } from 'react'

type IHandler = (e: Event) => void

const useEventListener = (eventName: string, handler: IHandler, element = document) => {
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