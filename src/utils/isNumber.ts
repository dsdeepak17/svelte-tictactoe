export function isNumber(value: number | string) {
	return typeof value === 'number' && isFinite(value);
}
