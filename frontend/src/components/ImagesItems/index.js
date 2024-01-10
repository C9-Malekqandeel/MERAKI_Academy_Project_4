import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function ImagesItems() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="https://autocraftequipment.co.uk/wp-content/uploads/2022/11/red-sale-sign-sticker-illustration-isolated-white-background-31436582-200x200.jpg" rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://autocraftequipment.co.uk/wp-content/uploads/2022/11/red-sale-sign-sticker-illustration-isolated-white-background-31436582-200x200.jpg" roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://autocraftequipment.co.uk/wp-content/uploads/2022/11/red-sale-sign-sticker-illustration-isolated-white-background-31436582-200x200.jpg" thumbnail />
        </Col>
      </Row>

      //! Full Screen 
      <Image src="https://autocraftequipment.co.uk/wp-content/uploads/2022/11/red-sale-sign-sticker-illustration-isolated-white-background-31436582-200x200.jpg" fluid />
    </Container>

    //! Let's try to use CARDs 3 here!
  );
}

export default ImagesItems;