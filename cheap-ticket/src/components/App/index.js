import React from 'react'
import Tabs from '../Tabs'
import Card from '../Card'
import Topbar from '../Topbar'
import TopDetails from '../TopDetails'
import QRCode from '../QRCode'

import { BottomDetailsBarcode, BottomDetailsTicket, Header } from '../BottomDetails'

const localFrom = localStorage.getItem('from')
const localTo = localStorage.getItem('to')

const initFrom = localFrom ? 
	JSON.parse(localFrom) :
	'Bolton' 

const initTo = localStorage.getItem('to') ?
	JSON.parse(localTo) :
	'Manchester Victoria'

class App extends React.Component {

	state = {
		from: initFrom,
		to: initTo,
		activeTab: 'ticket',
		direction: true,
	}

	changeTab = tab => this.setState({activeTab: tab})
	flipGoingTowards = () => this.setState(state=>({ direction: !state.direction }))

	render() {
		const { activeTab, from, to, direction } = this.state
		const goingTowards = direction ? 
			to :
			from

		return(
			<div style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
				<div>
					<Topbar/>
					<TopDetails from={from} to={to} direction={direction}/>
					<Tabs activeTab={activeTab} changeTab={this.changeTab}/>
				</div>

				<div style={{
					position: 'relative',
					flexGrow: 1,
					overflow: 'hidden',
				}}>
					<div style={{
						overflowY: 'scroll',
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
					}}>
						<div style={{display: 'flex', justifyContent: 'center'}}>
							{
								activeTab === 'ticket' ? 
								<Card from={from} to={to} direction={direction} flipGoingTowards={this.flipGoingTowards}/>
								:
								<QRCode/>
							}
						</div>
						<Header/>
						<div style={{display: 'flex', justifyContent: 'center'}}>
							{
								activeTab === 'ticket' ? 
									<BottomDetailsTicket/> :
									<BottomDetailsBarcode/>
							}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default App