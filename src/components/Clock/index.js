import {Component} from 'react'
import './index.css'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
    console.log('contructor method called')
  }

  componentDidMount() {
    console.log('Component Did Mount Called')
    this.timerID = setInterval(() => {
      this.tick()
    }, 1000)
  }

  componentWillUnmount() {
    console.log('Component will unmount called')

    clearInterval(this.timerID)
  }

  tick = () => {
    this.setState({date: new Date()})
  }

  render() {
    const {date} = this.state
    console.log('render called', date)
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
