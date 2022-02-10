
import { Component } from 'react';

class Counter extends Component {

  state = {
    count: 0
  }

  handleCountUp() {
    this.setState((state, props) => ({ count: state.count + 1 }));
  }

  handleCountDown() {
    this.setState((state, props) => ({ count: state.count - 1 }));
  }

  handleReset() {
    this.setState({ count: 0 });
  }

  render() {
    const { count } = this.state;
    return (
      <div className='d-flex flex-column bg-light rounded-3 p-2' style={{ maxWidth: '200px'}}>
        <h2 className='mb-2  align-self-center fw-light' onClick={() => this.handleReset()}>{count}</h2>
        <div className="g-grid align-self-center d-block"></div>
          <button className="btn btn-secondary me-2" onClick={() => this.handleCountDown()}>-</button>
          <button className="btn btn-primary" onClick={() => this.handleCountUp()}>+</button>
      </div>
    )
  }
}

export default Counter;