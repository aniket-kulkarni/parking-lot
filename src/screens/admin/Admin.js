import React from 'react';
import './admins.scss';

export class Admin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slots: '',
      carsParked: ''
    }

    this.onSlotChange = this.onSlotChange.bind(this);
    this.onCarsParkedChanged = this.onCarsParkedChanged.bind(this);
    this.submit = this.submit.bind(this);
  }

  onSlotChange(e) {
    this.setState({
      slots: e.target.value
    })
  }

  onCarsParkedChanged(e) {
    this.setState({
      carsParked: e.target.value
    })
  }

  submit() {
    let {slots, carsParked} = this.state;

    if (isNaN(slots) || isNaN(carsParked) || !slots || !carsParked) {
      alert('Please enter numbers for Slots or cars parked')
    } else if (parseInt(carsParked) > parseInt(slots)) {
      alert('Cars parked cant be greater than slots')
    }
    else {
      this.props.initialize(parseInt(slots), parseInt(carsParked));
    }
  }

  render() {
    console.log('testing admin');
    return (
      <div className="admin">
        <div className='input-wrap'>
          <label>No of slots</label>
          <input type="text" value={this.state.slots} onChange={this.onSlotChange} />
        </div>
        <div className='input-wrap'>
          <label>No of cars parked</label>
          <input type="text" value={this.state.carsParked} onChange={this.onCarsParkedChanged} />
        </div>
        <button onClick={this.submit}>Submit</button>
      </div>
    );
  }
}
