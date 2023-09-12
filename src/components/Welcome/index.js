// Write your code here
import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {sub: false}

  subs = () => {
    this.setState(prevstate => ({sub: !prevstate.sub}))
  }

  render() {
    const {sub} = this.state
    return (
      <div className="main">
        <div>
          <h1 className="head">Welcome</h1>
          <p className="par">Thank you! Happy Learning</p>
          {sub ? (
            <button type="button" className="btn" onClick={this.subs}>
              Subscribed
            </button>
          ) : (
            <button type="button" className="btn" onClick={this.subs}>
              Subscribe
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default Welcome
