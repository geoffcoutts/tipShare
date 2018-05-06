import React, { Component } from 'react';
// import { Col } from 'react-bootstrap';
import Navigation from './Nav.js';
import TipperTable from './TipperTable.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      servers: [
        { type: "server",
          tipPercentage: 0.03,
          rows: [
            {id: 1, name: "bob", foodSales: 123, drinkSales: 456},
            {id: 2, name: "george", foodSales: 234, drinkSales: 345}
          ]},
        { type: "bartender",
          tipPercentage: 0.02,
          rows: [
            {id: 101, name: "gramps", foodSales: 932, drinkSales: 33},
            {id: 102, name: "senior", foodSales: 43, drinkSales: 654}
          ]
        }
      ],
      support: {}
    };
    this.addTipper = this.addTipper.bind(this);
  }

  addTipper() {

  }

  render() {
    const servers = this.state.servers.map(serverGroup => (
      <TipperTable
        key= { serverGroup.type }
        serverType= { serverGroup.type }
        tipPercentage={ serverGroup.tipPercentage }
        data={ serverGroup.rows }
      />
    ));

    return (
      <div className="App">
        <div className="content">
          <Navigation />
          { servers }
        </div>
      </div>
    );
  }
}

export default App;
