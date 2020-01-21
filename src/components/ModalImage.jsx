import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import img1 from '../images/drinks/pornstar-martini.jpg';

const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
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
    </div>
  );
}

export default ModalExample;