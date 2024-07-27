import { InjectionEventType } from '../common/types.ts'
import { sendInjectionEvent } from '../common/injectionEvents.ts'
import { executeInjected } from './executeInjected.ts'

executeInjected()
sendInjectionEvent(InjectionEventType.InjectionFinished)
