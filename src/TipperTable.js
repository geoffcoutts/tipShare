import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';

class TipperTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serverType: this.props.serverType,
      rows: this.props.data,
      tipPercentage: this.props.tipPercentage,
      tableFoodSales: 0,
      tableDrinkSales: 0,
      tableFoodTips: 0,
      tableDrinkTips: 0
    };
    this.addRow = this.addRow.bind(this);
    this.roundTipout = this.roundTipout.bind(this);
  }

  addRow(event){
    event.preventDefault();

  }

  roundTipout(tipout) {
    return ((Math.ceil(tipout * 20 - 0.5) / 20).toFixed(2))
  }

  componentDidMount() {
    let table = document.getElementById(this.state.serverType)
    console.log(table)

  }

  render() {

    const rows = this.state.rows.map(row => {
      return (<tr key={ row.id }>
        <td>{ row.id }</td>
        <td>{ row.name }</td>
        <td>{ row.foodSales }</td>
        <td>{ row.drinkSales }</td>
        <td>{ this.roundTipout(row.foodSales * this.state.tipPercentage) }</td>
        <td>{ this.roundTipout(row.drinkSales * this.state.tipPercentage) }</td>
      </tr>)
    })

    return (
      <React.Fragment>
        <Table responsive id={ this.state.serverType }>
          <thead>
            <tr><th>{ this.state.serverType }</th></tr>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Food Sales</th>
              <th>Drink Sales</th>
              <th>Food Tipout</th>
              <th>Drink Tipout</th>
            </tr>
          </thead>
          <tbody>
          { rows }
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </tfoot>
        </Table>
        <Button onClick={ this.addRow }>+
        </Button>
      </React.Fragment>
    );
  }
}

export default TipperTable;