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

const TopDetails = ({ goingTowards }) =>
	<div>
		<div style={style.root}>
			<div style={style.topDetails}>
				<div 
					onClick={this.flipDirection} 
					style={{...style.label, fontSize: '16px'}}>
					{goingTowards === 'buckshaw' ? 'OUT' : 'RTN'}
				</div>

				<div>
					<div style={style.direction}>
						<div style={style.time}>{goingTowards === 'buckshaw' ? '07:55' : '17:20'}</div>
						<div>{goingTowards === 'buckshaw' ? 'Bolton' : 'Buckshaw Parkaway'}</div>
					</div>

					<section style={style.direction}>
						<div style={style.time}>{goingTowards === 'buckshaw' ? '08:21' : '17:41'}</div>
						<div>{goingTowards === 'buckshaw' ? 'Buckshaw Parkaway' : 'Bolton'}</div>
					</section>
				</div>
			</div>
		</div>
	</div>

export default TopDetails