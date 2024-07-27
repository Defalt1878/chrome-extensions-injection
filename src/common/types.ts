export enum InjectionEventType {
	InjectionFinished = 'InjectionFinished',
	HelloWorld = 'HelloWorld'
}

export interface HelloWorldEventData {
	suffix: string
}