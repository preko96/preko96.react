const maxDelta = 200
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

export default doubleTap