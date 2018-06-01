import React from 'react'
import Calendar from './calendar.svg'
import Arrow from './arrow.svg'

const Topbar = props =>
	<div style={{
		marginBottom: 20,
		display: 'flex',
   		justifyContent: 'center',
   		alignItems: 'center',
   		height: 55,
   		backgroundColor: '#062456'
	}}>
		<div style={{
			width: '95vw',
			maxWidth: '400px',
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center'
		}}>
			<section style={{display: 'flex', alignItems: 'center'}}>
				<img src={Arrow} style={{height: 24}}/>
				<div style={{color: 'white', fontWeight: '600', marginLeft: 40, fontSize: 18}}>TTD6257CS9W</div>
			</section>
			<img src={Calendar} style={{height: 24}}/>
		</div>
	</div>

export default Topbar