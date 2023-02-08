// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      limitTime: 25,
      minutes: 0,
      second1: 0,
      second2: 0,
      status: false,
    }
  }

  componentDidMount() {
    this.setState(prevState => ({
      minutes: prevState.limitTime,
    }))
  }

  increaseLimit = () => {
    this.setState(prevState => ({
      limitTime: prevState.limitTime + 1,
    }))
    this.setState(prevState => ({
      minutes: prevState.limitTime,
    }))
  }

  decreaseLimit = () => {
    this.setState(prevState => ({
      limitTime: prevState.limitTime - 1,
    }))
    this.setState(prevState => ({
      minutes: prevState.limitTime,
    }))
  }

  onClickStart = () => {
    this.setState(prevState => ({
      minutes: prevState.minutes,
      second1: prevState.second1,
      second2: prevState.second2,
    }))
    this.secondsID = setInterval(this.second, 1000)
    this.setState(prevState => ({
      status: !prevState.status,
    }))
  }

  onClickStop = () => {
    clearInterval(this.secondsID)
    this.setState(prevState => ({
      status: !prevState.status,
    }))
  }

  onClickReset = () => {
    const {status} = this.state
    this.setState(prevState => ({
      minutes: prevState.limitTime,
      second1: 0,
      second2: 0,
    }))
    clearInterval(this.secondsID)

    if (status === true) {
      return this.setState({
        status: false,
      })
    }
    return this.setState({
      status: false,
    })
  }

  second = () => {
    const {second1, second2} = this.state
    if (second1 === 0 && second2 === 0) {
      return this.setState(prevState => ({
        minutes: prevState.minutes - 1,
        second1: 5,
        second2: 9,
      }))
    }
    if (second2 === 0) {
      return this.setState(prevState => ({
        second1: prevState.second1 - 1,
        second2: 9,
      }))
    }

    return this.setState(prevState => ({
      second2: prevState.second2 - 1,
    }))
  }

  render() {
    const {minutes, second1, second2, status, limitTime} = this.state
    return (
      <div className="bg-container">
        <h1 className="digital-heading">Digital Timer</h1>
        <div className="content-container">
          <div className="img-container">
            <div className="heading-time">
              <h1 className="time-content">
                {minutes}:{second1}
                {second2}
              </h1>
              <p className="status-time">{status ? 'Running' : 'Paused'}</p>
            </div>
          </div>
          <div className="buttons-container">
            <div className="start-reset">
              <div className="start-container">
                {status ? (
                  <button
                    type="button"
                    className="button"
                    onClick={this.onClickStop}
                  >
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                      alt="play icon"
                      className="img-size"
                    />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="button"
                    onClick={this.onClickStart}
                  >
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                      alt="pause icon"
                      className="img-size"
                    />
                  </button>
                )}

                <p className="status-time">{status ? 'Pause' : 'Start'}</p>
              </div>
              <div className="start-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.onClickReset}
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="reset icon"
                    className="img-size"
                  />
                </button>
                <p className="status-time">Reset</p>
              </div>
            </div>
            <p className="set-para">Set Timer limit</p>
            <div className="setLimit-container">
              <button
                type="button"
                className="button status-time"
                onClick={this.decreaseLimit}
              >
                -
              </button>
              <p className="status-time colored">{limitTime}</p>
              <button
                type="button"
                className="button status-time"
                onClick={this.increaseLimit}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
