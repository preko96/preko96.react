import React from 'react'
import Tabs from '../Tabs'
import { doubleTapDynamic } from '../util/doubleTap'

const style = {
	root: {
		marginBottom: 20,
		display: 'flex',
		flexDirection: 'column',
    	alignItems: 'center',
	},
	topDetails: {
		fontSize: 18,
		display: 'flex',
		width: '100%',
		position: 'relative'
	},
	direction: {
		alignItems: 'center',
		display: 'flex',
	},
	time: {
		fontWeight: 600,
		margin: '5px 15px'
	},
	label: {
		padding: '6px 10px',
	    backgroundColor: 'black',
	    color: 'white',
	    borderTopRightRadius: '5px',
	    borderBottomRightRadius: '5px',
	    fontWeight: '100',
	    height: 'fit-content',
	},
}	


const outStart = localStorage.getItem('outStart')
const outEnd = localStorage.getItem('outEnd')

const rtnStart = localStorage.getItem('rtnStart')
const rtnEnd = localStorage.getItem('rtnEnd')

const initOutStart = outStart ? 
	JSON.parse(outStart) :
	'07:55' 

const initOutEnd = outEnd ?
	JSON.parse(outEnd) :
	'08:21'

const initRtnStart = rtnStart ? 
	JSON.parse(rtnStart) :
	'17:20' 

const initRtnEnd = rtnEnd ?
	JSON.parse(rtnEnd) :
	'17:41' 

class TopDetails extends React.Component {
	state = {
		outStart: initOutStart,
		outEnd: initOutEnd,
		rtnStart: initRtnStart,
		rtnEnd: initRtnEnd
	}

	onEditField = field => event => {
		const value = event.target.value;
		localStorage.setItem(`${field}`, JSON.stringify(value))
		this.setState({ [field]: event.target.value })
	}

	onEnableEditing = field => () => doubleTapDynamic(
		()=>this.setState({ [`${field}Edit`]: true }),
		field
	)
	onDisableEditing = field => () => this.setState({ [`${field}Edit`]: false })

	renderDetails = () => {
		const { direction } = this.props
		return (
			<div 
				style={{...style.label, fontSize: '16px'}}>
				{direction ? 'OUT' : 'RTN'}
			</div>
		)
	}

	renderDirection = flip => {
		const { from, to, direction, onEditPlace } = this.props
		const current = (flip ? direction : !direction) ? to : from
		const currentEdit =  (flip ? direction : !direction) ? 'to' : 'from'
		return(
			this.state[`${currentEdit}Edit`] ?
				<input 
					defaultValue={current}
					onChange={onEditPlace(currentEdit)}
					onBlur={this.onDisableEditing(currentEdit)}
				/> :
				<div 
					onClick={this.onEnableEditing(currentEdit)}
				>
					{current}
				</div>
		)
	}

	renderStart = () => {
		const { outStart, outEnd, rtnStart, rtnEnd } = this.state
		const { direction } = this.props
		return(
			<section style={style.direction}>
				{
					this.state[direction ? 'outStartEdit' : 'rtnStartEdit'] ?
						<input 
							onBlur={this.onDisableEditing(direction ? 'outStart' : 'rtnStart')}
							onChange={this.onEditField(direction ? 'outStart' : 'rtnStart')}
							defaultValue={direction ? outStart : rtnStart}/> :
						<div 
							onClick={this.onEnableEditing(direction ? 'outStart' : 'rtnStart')} 
							style={style.time}>{direction ? outStart : rtnStart}
						</div>
				}
				{ this.renderDirection() }
			</section>
		)
	}

	renderEnd = () => {
		const { outStart, outEnd, rtnStart, rtnEnd } = this.state
		const { from, to, direction } = this.props
		return(
			<section style={style.direction}>
				{
					this.state[direction ? 'outEndEdit' : 'rtnEndEdit'] ?
						<input 
							onBlur={this.onDisableEditing(direction ? 'outEnd' : 'rtnEnd')}
							onChange={this.onEditField(direction ? 'outEnd' : 'rtnEnd')}
							defaultValue={direction ? outEnd : rtnEnd}/> :
						<div 
							onClick={this.onEnableEditing(direction ? 'outEnd' : 'rtnEnd')} 
							style={style.time}>{direction ? outEnd : rtnEnd}
						</div>
				}
				{ this.renderDirection(true) }
			</section>
		)
	}

	render() {
		const { outStart, outEnd, rtnStart, rtnEnd } = this.state
		const { from, to, direction } = this.props
		return(
			<div>
				<div style={style.root}>
					<div style={style.topDetails}>
						{ this.renderDetails() }
						<div>
							{ this.renderStart() }
							{ this.renderEnd() }
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default TopDetails