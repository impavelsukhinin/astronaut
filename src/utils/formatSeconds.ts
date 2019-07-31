const numberFormat = (number: number): string => (number >= 10 ? String(number) : `0${number}`)

export default function formatSeconds(seconds: number): string {
	if (!isFinite(seconds) || seconds === 0) {
		return '00:00'
	}

	const ONE_HOUR = 3600

	const remainder = seconds % ONE_HOUR
	const hoursD = Math.floor(seconds / ONE_HOUR)
	const minutesD = Math.floor(remainder / 60)
	const secondsD = Math.floor(remainder % 60)

	return `${hoursD > 0 ? `${numberFormat(hoursD)}:` : ''}${numberFormat(minutesD)}:${numberFormat(secondsD)}`
}
