# Chrome extensions injection

Allows injecting scripts into the page context from a Chrome extension.

If you try to do the following directly from your extension's code, it won't work in the dev console:

```js
window.sayHi = () => alert('Hello world!')
```

But if you place this code into `executeInjected`, it works fine

Using `sendInjectionEvent`/`addInjectionEventHandler`, you can pass data from the page context to your extension
context.