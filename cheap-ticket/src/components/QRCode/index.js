import React from 'react'
import QRCodeImg from './qrcode.jpg'
import Logo from '../Card/logo.png'

const style = {
	root: {
		flexDirection: 'column',
		width: '95vw',
		maxWidth: '400px',
		minHeight: '200px',
		backgroundColor: '#ff8201',
		borderRadius: '10px',
		display: 'flex',
	    alignItems: 'center',
	    justifyContent: 'center',
	}
}

const QRCode = props => 
	 <div style={style.root}>
	 	<div style={{height: 25}}/>
		<div style={{
			width: '100%',
			backgroundColor: 'white',
			display: 'flex',
			justifyContent: 'center',
			padding: '20px 0',
		}}>
			<img src={QRCodeImg} style={{height: '200px'}}/>
		</div>
		<div style={{
			width: '100%',
			height: 25,
			display: 'flex',
			alignItems: 'center'
		}}>
			<img src={Logo} style={{
				display: 'flex',
				height: '13px',
				marginLeft: 18,
			}}/>
		</div>
	</div>

export default QRCode