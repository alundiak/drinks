import React from 'react';
import { Table } from 'reactstrap';

/* Requirements
- show categorized list of drinks
- on row click show Drink image.
- manage add drinks from admin
- manage request/order drink from UI
*/

const Example = (props) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Alcohol</th> {/* vodka, tequila, gin, etc. or "many" or "none" */}
          <th>Name</th>
          <th>Type</th> {/* shake, stir, shot, blend */}
          <th>Recipe</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Vodka</td>
          <td>Pornstar Martini</td>
          <td>shake</td>
          <td>tbd</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Gin</td>
          <td>Aperol Spritz</td>
          <td>stir</td>
          <td>tbd</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Tequila</td>
          <td>Margarita</td>
          <td>shake</td>
          <td>tbd</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Vodka</td>
          <td>Pornstar Martini</td>
          <td>shake</td>
          <td>tbd</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Gin</td>
          <td>Aperol Spritz</td>
          <td>stir</td>
          <td>tbd</td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>Tequila</td>
          <td>Margarita</td>
          <td>shake</td>
          <td>tbd</td>
        </tr>
        <tr>
          <th scope="row">7</th>
          <td>Vodka</td>
          <td>Pornstar Martini</td>
          <td>shake</td>
          <td>tbd</td>
        </tr>
        <tr>
          <th scope="row">8</th>
          <td>Gin</td>
          <td>Aperol Spritz</td>
          <td>stir</td>
          <td>tbd</td>
        </tr>
        <tr>
          <th scope="row">9</th>
          <td>Tequila</td>
          <td>Margarita</td>
          <td>shake</td>
          <td>tbd</td>
        </tr>
        <tr>
          <th scope="row">10</th>
          <td>Vodka</td>
          <td>Pornstar Martini</td>
          <td>shake</td>
          <td>tbd</td>
        </tr>
        <tr>
          <th scope="row">11</th>
          <td>Gin</td>
          <td>Aperol Spritz</td>
          <td>stir</td>
          <td>tbd</td>
        </tr>
        <tr>
          <th scope="row">12</th>
          <td>Tequila</td>
          <td>Margarita</td>
          <td>shake</td>
          <td>tbd</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Example;