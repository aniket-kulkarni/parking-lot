import React from 'react';
import './parking.scss';

export class Parking extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let {slots, parkedCars} = this.props;
    return (
      <div className="parking">
        <div className="metadata">
          <div className="left">
            <p>Total marking slots: {slots}</p>
            <p>Available parking slots: {slots - parkedCars.length}</p>
          </div>
          <div className="right">
            <button>Park a car</button>
          </div>
        </div>
        <div className="data">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Car No</th>
                <th>Slot No</th>
                <th>Date time</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.props.parkedCars.map((car, i) => {
                return (
                  <tr key={car.carNo}>
                    <td>{i}</td>
                    <td>{car.slot}</td>
                    <td>{car.carNo}</td>
                    <td>{car.color}</td>
                    <td>{car.date}</td>
                    <td>
                      <button onClick={() => this.props.remove(car.slot)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
