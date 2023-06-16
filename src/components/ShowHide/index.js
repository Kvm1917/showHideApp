import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    showFirstName: false,
    showLastName: false,
  }

  onShowFirstName = () => {
    this.setState(prevState => ({showFirstName: !prevState.showFirstName}))
  }

  getState = () => {
    const {showFirstName} = this.state
    return showFirstName ? <p className="name">Joe</p> : ''
  }

  onShowLastName = () => {
    this.setState(prevState => ({showLastName: !prevState.showLastName}))
  }

  getState1 = () => {
    const {showLastName} = this.state
    return showLastName ? <p className="name">Jamn</p> : ''
  }

  render() {
    // eslint-disable-next-line
    const ButtonText = this.getState()
    const ButtonText1 = this.getState1()

    return (
      <div className="app-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="name-container">
            <button
              type="button"
              className="show-hide-button"
              onClick={this.onShowFirstName}
            >
              show/Hide FirstName
            </button>
            {ButtonText}
          </div>
          <div className="name-container">
            <button
              type="button"
              className="show-hide-button"
              onClick={this.onShowLastName}
            >
              Show/Hide LastName
            </button>
            {ButtonText1}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
