import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UpdateItem from '../UpdateItem';
import React,{useContext} from 'react';
import { ItemContext } from '../ItemsForUser';

function ModalForUpdateItem(props) {
    const {item} = useContext(ItemContext)
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Let us Post New Item!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        {<UpdateItem id={props.show} />}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalForUpdateItem;