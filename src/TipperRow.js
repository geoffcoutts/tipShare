import React from 'react';

const roundTipout = (tipout) => {
  return ((Math.ceil(tipout * 20 - 0.5) / 20).toFixed(2))
}

const TipperRow = ({ rowData, tipPercentage }) => (
  <tr>
    <td>{ rowData.id }</td>
    <td>{ rowData.name }</td>
    <td>{ rowData.foodSales }</td>
    <td>{ rowData.drinkSales }</td>
    <td className="foodtipout">{ roundTipout(rowData.foodSales * tipPercentage) }</td>
    <td className="foodtipout">{ roundTipout(rowData.drinkSales * tipPercentage) }</td>
  </tr>
);

export default TipperRow;