import formatSeconds from 'utils/formatSeconds'

const FULL_PATTERN = /(\d{2}):(\d{2}):(\d{2})$/

describe('formatSeconds', () => {
	test('not valid values or 0 should return 00:00', () => {
		const values = [0, undefined, NaN, Infinity]

		values.forEach((el) => expect(formatSeconds(el)).toBe('00:00'))
	})

	test('big values: 1 hour, 10 hours, 24 hours, 36 hours', () => {
		const ONE_HOUR = 60 * 60
		const values = [
			{ test: ONE_HOUR, result: '01:00:00' },
			{ test: 10 * ONE_HOUR, result: '10:00:00' },
			{ test: 24 * ONE_HOUR, result: '24:00:00' },
			{ test: 36 * ONE_HOUR, result: '36:00:00' },
		]

		values.forEach(({ test, result }) => expect(formatSeconds(test)).toBe(result))
	})

	test('double values', () => {
		expect(formatSeconds(3999.5677)).toMatch(FULL_PATTERN)
	})

	test('just work with simple values', () => {
		expect(formatSeconds(3)).toBe('00:03')
		expect(formatSeconds(75)).toBe('01:15')
		expect(formatSeconds(3977)).toMatch(FULL_PATTERN)
	})
})
