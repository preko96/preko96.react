import React from 'react'
import './index.css'
import doubleTap, { doubleTapDynamic } from '../util/doubleTap'
import { SwatchesPicker } from 'react-color'

const SingleUnit = ({ right, color, ...rest }) => 
	<div 
	{...rest}
	className='single-unit' style={{
		width: '33%',
		height: 25,
		border: '1px solid black',
		borderRight: right ? '1px solid black' : 0,
		backgroundColor: color,
	}}>
	</div>

const getTime = () => {
	const date = new Date()

	let hours = date.getHours()
	hours = hours < 10 ? `0${hours}` : hours

	let minutes = date.getMinutes()
	minutes = minutes < 10 ? `0${minutes}` : minutes

	let seconds = date.getSeconds()
	seconds = seconds < 10 ? `0${seconds}` : seconds

	return `${hours} : ${minutes} : ${seconds}`
}

const localColors = localStorage.getItem('colors') 

const initColors = localColors
	? JSON.parse(localColors)
	: 
	[
		'#dc1eae',
		'#cf3c3c',
		'#5456c7',
	]

class Checker extends React.Component {

	state = {
		colors: initColors,
		time: getTime(),
		colorpickerVisible: false,
		pickCounter: 0,
	}

	timeout = () => setTimeout(()=>this.setState({time: getTime()}, this.timeout), 1000);

	componentDidMount() {
		this.timeout()
	}

	flipColorPicker = () => this.setState((state)=>({ colorpickerVisible: !state.colorpickerVisible}))

	onClickColor = pickedcolor => {
		const { colors, pickCounter } = this.state
		const newcolors = colors.map((color, index) => pickCounter % 3 === index ? pickedcolor.hex : colors[index])
		this.setState({colors: newcolors, pickCounter: pickCounter+1})
		localStorage.setItem('colors', JSON.stringify(newcolors))
	}

	render() {

		const { colors, time } = this.state
		return(
			<div>
				{
					this.state.colorpickerVisible ? 
					<SwatchesPicker onChangeComplete={this.onClickColor}/> 
					: null
				}
				<div style={{
					display: 'flex',
					position: 'relative'
				}}>
					<SingleUnit color={colors[0]}/>
					<SingleUnit color={colors[1]}/>
					<SingleUnit 
						color={colors[2]} 
						onClick={()=>doubleTapDynamic(this.flipColorPicker)}
						right
					/>
					<div
						id='clock'
						style={{
							position: 'absolute',
							alignSelf: 'center',
							fontSize: 16}}
					>
						{time}
					</div>
				</div>
			</div>
		)
	}
}

export default Checker