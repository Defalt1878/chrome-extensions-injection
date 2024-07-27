export const injectScript = (path: string) => {
	const script = document.createElement('script')
	script.type = 'text/javascript'
	script.src = chrome.runtime.getURL(path);

	(document.head || document.documentElement).appendChild(script)

	return script
}