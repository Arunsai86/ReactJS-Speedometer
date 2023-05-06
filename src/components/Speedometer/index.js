import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  clickAccelerate = () => {
    this.setState(prevState =>
      prevState.speed < 200
        ? {speed: prevState.speed + 10}
        : {speed: prevState.speed},
    )
  }

  clickApplyBrake = () => {
    this.setState(prevState =>
      prevState.speed > 0
        ? {speed: prevState.speed - 10}
        : {speed: prevState.speed},
    )
  }

  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <h1 className="title">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="heading">{`Speed is ${speed}mph`}</h1>
        <p className="msg">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="buttons-container">
          <button
            className="button-acc"
            type="button"
            onClick={this.clickAccelerate}
          >
            Accelerate
          </button>
          <button
            className="button-app"
            type="button"
            onClick={this.clickApplyBrake}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
