import React, { Component } from 'react';
import Scheduler from './Scheduler/';
import Toolbar from './Toolbar';

import Base from '../Base/Base';
import MessageArea from './MessageArea/MessageArea';

const data = [
    { start_date:'2023-12-22 6:00', end_date:'2023-12-22 8:00', text:'Event 1', id: 1},
    { start_date:'2023-12-30 10:00', end_date:'2023-12-30 18:00', text:'Event 2', id: 2 }
];



class Dashboard extends Component {
    state = {
        currentTimeFormatState: true,
        messages: []
    };
    
    addMessage(message) {
        const maxLogLength = 5;
        const newMessage = { message };
        const messages = [
            newMessage,
            ...this.state.messages
        ];
    
        if (messages.length > maxLogLength) {
            messages.length = maxLogLength;
        }
        this.setState({ messages });
    }
    
    logDataUpdate = (action, ev, id) => {
        const text = ev && ev.text ? ` (${ev.text})` : '';
        const message = `event ${action}: ${id} ${text}`;
        this.addMessage(message);
    }
    
    handleTimeFormatStateChange = (state) => {
        this.setState({
            currentTimeFormatState: state
        });
    }
    
  render() {
    const { currentTimeFormatState, messages } = this.state;
    return(
        <Base>
        <div>
            <div className="tool-bar">
                    <Toolbar
                        timeFormatState={currentTimeFormatState}
                        onTimeFormatStateChange={this.handleTimeFormatStateChange}
                    />
                </div>
                <div className='scheduler-container'>
                    <Scheduler
                        events={data}
                        timeFormatState={currentTimeFormatState}
                        onDataUpdated={this.logDataUpdate}
                    />
                </div>
                <MessageArea
                    messages={messages}
                />


        </div>
        </Base>
    )
  }
   
  
}

export default Dashboard