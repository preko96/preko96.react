import React from 'react'
import Card from '../Card'

const style = {
	root: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		marginBottom: 20
	},
	tab: active => ({
		cursor: 'pointer',
		textAlign: 'center',
    	flex: 1,
    	padding: 12,
    	boxShadow: active ? '#37c8b0 0 4px 0px 0px' : 'none',
    	opacity: active ? 1 : 0.7
	})
}

const Tabs = ({ activeTab, changeTab }) =>
	<div style={style.root} key='select'>
		<div id='barcode' onClick={()=>changeTab('barcode')} style={style.tab(activeTab === 'barcode')}>Barcode</div>
		<div id='ticket' onClick={()=>changeTab('ticket')} style={style.tab(activeTab === 'ticket')}>Ticket</div>
	</div>

export default Tabs