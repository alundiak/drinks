import React, { useState } from 'react';
import { Table } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import ModalImage from './ModalImage';
import img1 from '../images/drinks/pornstar-martini.jpg';
import img2 from '../images/drinks/margarita.jpg';

/* Requirements
- show categorized list of drinks
- on row click show Drink image.
- manage add drinks from admin
- manage request/order drink from UI
- Type or drink by method: shake, stir, shot, blend, etc. can be represented in Recipe and/or Picture.
*/

const Example = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
    {/* <ModalImage></ModalImage> */}
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Alcohol</th> {/* vodka, tequila, gin, etc. or "many" or "none" */}
          <th>Name</th>
          <th>Picture</th>
          <th>Recipe</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Vodka</td>
          <td>Pornstar Martini</td>
          <td onClick={toggle}><img src={img1} className="drink-image" alt="tbd" /></td>
          <td>tbd</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Gin</td>
          <td>Aperol Spritz</td>
          <td><img src={img1} className="drink-image" alt="tbd" /></td>
          <td>tbd</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Tequila</td>
          <td>Margarita</td>
          <td><img src={img2} className="drink-image" alt="tbd" /></td>
          <td>tbd</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Vodka</td>
          <td>Pornstar Martini</td>
          <td><img src={img1} className="drink-image" alt="tbd" /></td>
          <td>tbd</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Gin</td>
          <td>Aperol Spritz</td>
          <td><img src={img1} className="drink-image" alt="tbd" /></td>
          <td>tbd</td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>Tequila</td>
          <td>Margarita</td>
          <td><img src={img1} className="drink-image" alt="tbd" /></td>
          <td>tbd</td>
        </tr>
        <tr>
          <th scope="row">7</th>
          <td>Vodka</td>
          <td>Pornstar Martini</td>
          <td><img src={img1} className="drink-image" alt="tbd" /></td>
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
    <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>Pornstar Martini</ModalHeader>
        <ModalBody>
            <img src={img1} className="drink-image-bigger" alt="tbd" />
          <b>Recipe!</b><br />
          TBD data
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Order</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default Example;