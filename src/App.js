import React from 'react';
import './App.css';

import { Admin } from './screens/admin/Admin'
import { Parking } from './screens/parking/Parking';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slots: 0,
      parkedCars: []
    };

    this.initialize = this.initialize.bind(this);
    this.remove = this.remove.bind(this);
  }

  remove(slotNo) {
    let slotIndex = this.state.parkedCars.findIndex((car) => {
      return car.slot === slotNo;
    });

    let newParkedCars = this.state.parkedCars.filter((car, index) => {
      return index !== slotIndex;
    });

    this.setState({parkedCars: newParkedCars})
  }

  initialize(slots, noParkedCars) {

    let parkedCars = [];
    let colors = ["red", "blue", "green"]

    for (let i = 0; i < noParkedCars; i++) {
      let car = {
        carNo: `KA25 EG062${i}`,
        color: colors[i % 3],
        slot: i,
        date: '24 May 2019, 3:29PM'
      };
      parkedCars.push(car);
    }

    this.setState({
      slots, parkedCars
    });
  }

  render() {
   return (<div className="App">
      {this.state.slots > 0 ? (
        <Parking slots={this.state.slots} 
        parkedCars={this.state.parkedCars} remove={this.remove}/>
      ) : (
        <Admin initialize={this.initialize} />
      )}
    </div>)
  }
}

export default App;
