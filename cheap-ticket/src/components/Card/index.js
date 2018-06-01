import React from 'react'
import Checker from '../Checker'
import Arrow from './arrow2.svg'
import Logo from './logo.png'

const style = {
	root: {
		width: '95vw',
		maxWidth: '400px',
		minHeight: '200px',
		backgroundColor: '#ff8201',
		borderRadius: '10px',
	},
	body: {
		margin: '20px 0',
	},
	header: {
		display: 'flex',
		alignItems: 'center',
		height: 25,
		justifyContent: 'center',
		color: '#333333',
		fontSize: '12px',
    	fontWeight: '600',
	},
	element: index => ({
		color: '#333333',
		padding: '5px',
		fontSize: '12px',
    	fontWeight: '600',
		backgroundColor: index % 2 ? '#ece9c7' : '#fffed2'
	})
}

const months = ["Ja", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const days = ["Sun", "Mon", "Tue", "Wednesday", "Thu", "Fri", "Sat"];

const getHeaderText = () => {
	const date = new Date()
	const day = days[date.getDay()]
	const day1 = date.getDate()
	const month = months[date.getMonth()]
	const year = date.getFullYear()
	return `Activated: ${day} ${day1} ${month} ${year} 07:31`
}

const getShorterDate = () => {
	const date = new Date()
	const day1 = date.getDate()
	const month = months[date.getMonth()]
	const year = date.getFullYear()
	return `${day1} ${month} ${year}`
}

const Card = ({ goingTowards, flipGoingTowards }) =>
	<div style={style.root}>
		<div style={style.header}>{getHeaderText()}</div>
		<section>
			<div style={{...style.element(0), ...{padding: '2px 5px'}}}><Checker/></div>
			<div style={style.element(1)}>Anytime Day Return ({goingTowards === 'buckshaw' ? 'Outward' : 'Return'})</div>
			<div style={style.element(2)}>Adult Standard Class</div>
			<div style={style.element(3)}>
				<div style={{marginBottom: '10px'}}>{goingTowards === 'bolton' ? 'Buckshaw Parkaway' : 'Bolton'}</div>
				<section style={{display: 'flex'}}>
					<img src={Arrow}/>
					<div style={{marginLeft: '10px'}}>{goingTowards === 'bolton' ? 'Bolton' : 'Buckshaw Parkaway'}</div>
				</section>
			</div>
			<div style={style.element(4)}>Valid via any permitted route</div>
			<div style={style.element(5)}>Travel on:<br/>{getShorterDate()}</div>
			<div style={style.element(6)}>Price: £8.30</div>
		</section>
		<div style={{
			height: 25,
			display: 'flex',
			alignItems: 'center'
		}}>
			<img onClick={flipGoingTowards} src={Logo} style={{
				display: 'flex',
				height: '13px',
				marginLeft: 18,
			}}/>
		</div>
	</div>

export default Card