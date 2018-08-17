const maxDelta = 200
const callbacks = []

let prevPress = null

const doubleTap = callback => {
	if (!prevPress)
		prevPress = new Date().getTime()
	else {
		const currentPress = new Date().getTime()
		const delta = currentPress - prevPress
		prevPress = currentPress
		if (delta < maxDelta) {
			prevPress = null
			callback()
		}
	}
}

export const doubleTapDynamic = (callback, name) => {
	const callbackIsExist = callbacks.find(c=>{
		if(name)
			return c.name === name
		else
			return c.instance === callback
	})
	console.warn(callbackIsExist)
	if(callbackIsExist) {
		const currentPress = new Date().getTime()
		const delta = currentPress - callbackIsExist.time
		callbackIsExist.time = currentPress
		if (delta < maxDelta) {
			prevPress = null
			callback()
		}
	} else {
		callbacks.push({
			instance: callback,
			time: new Date().getTime(),
			name: name
		})
	}
}

export default doubleTap