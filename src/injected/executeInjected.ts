import { sendInjectionEvent } from '../common/injectionEvents.ts'
import { HelloWorldEventData, InjectionEventType } from '../common/types.ts'

export const executeInjected = () => {
	(window as any).sayHi = () => alert('Hello world!')
	console.log('Added window.sayHi. Try it into console')
	sendInjectionEvent<HelloWorldEventData>(InjectionEventType.HelloWorld, { suffix: 'from injected event!' })
}