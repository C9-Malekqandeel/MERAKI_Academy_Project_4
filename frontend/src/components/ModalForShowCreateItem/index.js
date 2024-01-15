import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CreateItem from '../CreateItem';

function ModalForShowCreateItem(props) {
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
        
        {<CreateItem id={props.show} />}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalForShowCreateItem;