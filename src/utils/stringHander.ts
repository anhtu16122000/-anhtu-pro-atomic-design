// Nguyễn Anh Tú -> nguyen anh tu
export function convertToPlain(string: string): string {
	return string
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.toLowerCase()
}