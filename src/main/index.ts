import { addInjectionEventHandler } from '../common/injectionEvents.ts'
import { HelloWorldEventData, InjectionEventType } from '../common/types.ts'
import { injectScript } from './injectScript.ts'

let script: HTMLScriptElement | undefined = undefined
try {
	script = injectScript('injected.js')
	console.debug('Script successfully injected')
} catch (e) {
	console.warn('Failed to inject script', e)
}

if (script) {
	addInjectionEventHandler(InjectionEventType.InjectionFinished, () => {
		console.debug('Injection successfully finished')
		script.remove()
	}, { once: true })
}

addInjectionEventHandler<HelloWorldEventData>(InjectionEventType.HelloWorld, (data) => {
	alert('Hello world ' + data?.suffix)
})