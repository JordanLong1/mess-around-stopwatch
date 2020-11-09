import React from 'react'
import StopWatch from './components/StopWatch'

class App extends React.Component {
  render() {
    return (
      <div className='container-holder'>
        <StopWatch />
      </div>
    )
  }
}

export default App