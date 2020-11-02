import React from 'react'

class StopWatch extends React.Component {

    state = {start: 0 }

    intervalHelper = () => {
        setInterval(this.startTimer, 1000)
    }

    startTimer = () => {
        this.setState({ start: this.state.start + 1})
    }

    pauseTimer = () => {
        console.log('hello')
    }



    render() {
        return <div className='watch-container'>
            <div className='watch-div'>
                {this.state.start}
                <button onClick={this.intervalHelper}>Start your timer</button>
                <button onClick={this.pauseTimer}>Stop Timer</button>
                <button>Reset</button>
            </div>
            
        </div>
    }
}

export default StopWatch