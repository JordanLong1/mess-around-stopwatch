import React from 'react'

class StopWatch extends React.Component {

    state = {time: false, start: 0 }

    handleTime = () => {
        // setTimeout()
    }

    render() {
        return <div className='watch-container'>
            <div className='watch-div'>
                {this.state.time}
                <button onClick={this.handleTime}>Start your timer</button>
            </div>
            
        </div>
    }
}

export default StopWatch