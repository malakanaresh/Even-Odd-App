import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {numbers: 0, bool: true}

  onEvenOrOdd = () => {
    const number = Math.ceil(Math.random() * 100)

    this.setState({numbers: number})
    const one =
      number % 2 === 0
        ? this.setState({bool: true})
        : this.setState({bool: false})
  }

  render() {
    const {numbers} = this.state
    const {bool} = this.state

    const two = bool ? 'Count is Even' : 'Count is Odd'
    return (
      <div className="container">
        <div className="bg-container">
          <h1> Count {numbers} </h1>
          <p>{two}</p>
          <button type="button" onClick={this.onEvenOrOdd}>
            Increment
          </button>
          <p>Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
