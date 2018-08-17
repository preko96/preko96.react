import React from 'react'
import Tabs from '../Tabs'

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


const outStart = localStorage.getItem('outstart')
const outEnd = localStorage.getItem('outend')

const rtnStart = localStorage.getItem('rtnstart')
const rtnEnd = localStorage.getItem('rtnend')

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

	render() {
		const { outStart, outEnd, rtnStart, rtnEnd } = this.state
		const { from, to, direction } = this.props
		return(
			<div>
				<div style={style.root}>
					<div style={style.topDetails}>
						<div 
							onClick={this.flipDirection} 
							style={{...style.label, fontSize: '16px'}}>
							{direction ? 'OUT' : 'RTN'}
						</div>

						<div>
							<div style={style.direction}>
								<div style={style.time}>{direction ? outStart : rtnStart}</div>
								<div>{direction ? from : to}</div>
							</div>

							<section style={style.direction}>
								<div style={style.time}>{direction ? outEnd : rtnEnd}</div>
								<div>{direction ? to : from }</div>
							</section>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default TopDetails