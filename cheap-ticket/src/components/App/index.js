import React from 'react'
import Tabs from '../Tabs'
import Card from '../Card'
import Topbar from '../Topbar'
import TopDetails from '../TopDetails'
import QRCode from '../QRCode'

import { BottomDetailsBarcode, BottomDetailsTicket, Header } from '../BottomDetails'

class App extends React.Component {

	state = {
		activeTab: 'ticket',
		goingTowards: 'buckshaw'
	}

	changeTab = tab => this.setState({activeTab: tab})
	flipGoingTowards = () => this.setState(state=>({goingTowards: state.goingTowards === 'buckshaw' ? 'bolton' : 'buckshaw'}))

	render() {
		const { activeTab, goingTowards } = this.state
		return(
			<div style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
				<div>
					<Topbar/>
					<TopDetails goingTowards={goingTowards}/>
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
								<Card goingTowards={goingTowards} flipGoingTowards={this.flipGoingTowards}/>
								:
								<QRCode/>
							}
						</div>
						<Header/>
						<div style={{display: 'flex', justifyContent: 'center'}}>
							{
								activeTab === 'ticket' ? 
								<BottomDetailsTicket/>
								:
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