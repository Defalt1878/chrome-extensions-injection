import { InjectionEventType } from './types.ts'

const INJECTION_EVENT = 'Injection-38e6dd51-7cb2-4851-be04-13b572e5715a'

interface InjectionEventDetail<Data> {
	type: InjectionEventType,
	data?: Data
}

export const sendInjectionEvent = <T>(type: InjectionEventType, data?: T) => {
	const event = new CustomEvent<InjectionEventDetail<T>>(INJECTION_EVENT, {
		detail: { type, data },
	})
	document.dispatchEvent(event)
}

export const addInjectionEventHandler = <T>(type: InjectionEventType, _handler: (data?: T) => void, options?: AddEventListenerOptions) => {
	const handler = (event: Event) => {
		const detail = (event as unknown as {detail: InjectionEventDetail<T>}).detail
		if (!detail || detail.type !== type) {
			return
		}
		_handler(detail.data)
	}

	document.addEventListener(INJECTION_EVENT, handler, options)

	return {
		removeHandler: () => document.removeEventListener(INJECTION_EVENT, handler),
	}
}