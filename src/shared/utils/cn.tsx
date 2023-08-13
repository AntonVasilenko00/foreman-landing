import classNames, { ArgumentArray } from 'classnames'
import { twMerge } from 'tw-merge'

export default function cn(...inputs: ArgumentArray) {
	return twMerge(classNames(inputs))
}
