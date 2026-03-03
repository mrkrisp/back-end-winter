import { randomBytes } from 'crypto'

export function generateToken(length: number = 32) {
	return randomBytes(length).toString('hex')
}
