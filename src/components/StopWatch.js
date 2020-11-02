import React from 'react'
import '../Watch.css'
class StopWatch extends React.Component {

    state = {start: 0 }

    intervalHelper = () => {
        this.interval = setInterval(this.startTimer, 1000)
    }

    startTimer = () => {
        this.setState({ start: this.state.start + 1})
    }

    clearTimer = () => {
        clearInterval(this.interval);
        this.setState({ start: 0})
    }



    render() {
        return <div className='watch-container'>
            <div className='watch-div'>
                {this.state.start}
                <button onClick={this.intervalHelper}>Start your timer</button>
                <button onClick={this.clearTimer}>Stop / Reset</button>
            </div>
            
        </div>
    }
}

export default StopWatch