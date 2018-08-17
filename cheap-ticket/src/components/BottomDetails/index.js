import React from 'react'

const style = {
	root: {
		width: '95vw',
		maxWidth: '400px',
		lineHeight: '26px',
		fontSize: '16px',
		display: 'flex'
	},
	detailText: {
		opacity: 0.6,
	},

}

const months = ["Ja", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const days = ["Sun", "Mon", "Tue", "Wednesday", "Thu", "Fri", "Sat"];

const randomTimeBetween = (a, b) => Math.random() * (b - a) + a

const getDate = (bool) => {
	const date = new Date()
	const day = days[date.getDay()]
	const day1 = date.getDate()
	const month = months[date.getMonth()]
	const year = date.getFullYear()
	return `${day} ${day1} ${month} ${year} ${bool ? '07:31' : '06:24'}`
}

const BottomDetailsBarcode = props => 
	<div style={style.root}>
		<section>
			<div style={{...style.detailText, opacity: 1}}>Itinerary details</div>
			<div style={style.detailText}>Ticket type</div>
			<div style={style.detailText}>Ticket Ref</div>
			<br/>
			<div style={style.detailText}>Class</div>
			<div style={style.detailText}>Passengers</div>
			<div style={style.detailText}>Total price</div>
			<div style={style.detailText}>Transaction ID</div>
			<div style={style.detailText}>Purchased</div>
			<div style={style.detailText}>Date of travel</div>
		</section>

		<section style={{
			alignSelf: 'flex-end',
			marginLeft: '16px',
		}}>
			<div>Anytime Day Return</div>
			<div>TTD6257CS9W</div>
			<section style={{lineHeight: 'initial', margin: '5px 0'}}>
				<div style={{opacity: 0.85}}>Travel is allowed via</div>
				<div style={{opacity: 0.85}}>any permitted route</div>
			</section>
			<div>Standard</div>
			<div>1</div>
			<div>£8.30</div>
			<div>659190521209</div>
			<div>{getDate()}</div>
			<div>{getDate(true)}</div>
		</section>
	</div>

const BottomDetailsTicket = props => 
	<div style={style.root}>
		<section>
			<div style={{...style.detailText, opacity: 1}}>Details</div>
			<div style={style.detailText}>Ticket Number</div>
			<div style={style.detailText}>Passenger ID</div>
			<div style={style.detailText}>Passenger Name</div>
			<div style={style.detailText}>Purcahesed on</div>
			<div style={style.detailText}>Activated</div>
		</section>

		<section style={{
			alignSelf: 'flex-end',
			marginLeft: '14px',
		}}>
			<div>TTD6257CS9W</div>
			<div>ANY0000</div>
			<div>KAMU NEVEZ</div>
			<div>{getDate()}</div>
			<div>{getDate(true)}</div>
		</section>
	</div>

const Header = props => <h4 style={{fontSize: 17, color: '#37c8b0', textAlign: 'center'}}>Ticket active</h4>

export {
	Header,
	BottomDetailsTicket,
	BottomDetailsBarcode
}
