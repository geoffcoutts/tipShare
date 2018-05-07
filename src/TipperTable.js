import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import TipperRow from './TipperRow.js';
import AddRowModal from './AddRowModal.js';
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
// import BootstrapTable from 'react-bootstrap-table-next';
// import cellEditFactory from 'react-bootstrap-table2-editor';


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
      tableDrinkTips: 0,
      showAddRowModal: false
    };
    this.addRow = this.addRow.bind(this);
    this.roundTipout = this.roundTipout.bind(this);
    this.closeAddRowModal = this.closeAddRowModal.bind(this);
    // this.calculateTipouts = this.calculateTipouts.bind(this);
  }

  addRow(event) {
    event.preventDefault();
    this.setState({ showAddRowModal: !this.state.showAddRowModal })
  }

  closeAddRowModal() {
    this.setState({ showAddRowModal: false })
  }

  roundTipout(tipout) {
    return ((Math.ceil(tipout * 20 - 0.5) / 20).toFixed(2))
  }

  // calculateTipouts() {
  //   for (let row of this.state.rows) {
  //     let foodTipout = row.foodSales * this.state.tipPercentage;
  //     let drinkTipout = row.drinkSales * this.state.tipPercentage;
  //     this.setState({ rows: [row]concat(foodTipout, drinkTipout) })
  //     console.log(this.state.rows)
  //   }
  // }

  componentDidMount() {
    // this.calculateTipouts()
  }

  // render() {
  //   const TableHeader = () => <h3 style={{ textAlign: 'left', padding: '0.5em' }}>{ this.state.serverType }</h3>;

  //   const columns = [{
  //     dataField: "id",
  //     text: "#",
  //     editable: false
  //   }, {
  //     dataField: "name",
  //     text: "Name"
  //   }, {
  //     dataField: "foodSales",
  //     text: "Food Sales"
  //   }, {
  //     dataField: "drinkSales",
  //     text: "Drink Sales"
  //   }, {
  //     dataField: "foodTipout",
  //     text: "Food Tipout",
  //     editable: false
  //   }, {
  //     dataField: "drinkTipout",
  //     text: "Drink Tipout",
  //     editable: false
  //   }]
  //   return (
  //     <BootstrapTable
  //       keyField='id'
  //       caption={ <TableHeader /> }
  //       data={ this.state.rows }
  //       columns={ columns }
  //       cellEdit={ cellEditFactory({
  //         mode: 'click',
  //         blurToSave: true
  //       })}
  //     />
  //   )
  render() {
    const tableRows = this.state.rows.map(row => (
      <TipperRow
        key={ row.id }
        rowData={ row }
        tipPercentage={ this.state.tipPercentage }
      />
      )
    )

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
          { tableRows }
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
        { this.state.showAddRowModal ?
          <AddRowModal
            serverType={ this.state.serverType }
            handleClose={ this.closeAddRowModal }
            addServer={ this.props.addServer }
          />
          : null
        }
      </React.Fragment>
    );
  }
}

export default TipperTable;