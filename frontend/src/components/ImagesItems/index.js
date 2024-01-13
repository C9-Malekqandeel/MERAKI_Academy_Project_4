import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import './style.css'

function ImagesItems() {
  return (
    <>
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="https://images.pexels.com/photos/5727926/pexels-photo-5727926.jpeg?auto=compress&cs=tinysrgb&w=600" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image  src="https://images.pexels.com/photos/4246091/pexels-photo-4246091.jpeg?auto=compress&cs=tinysrgb&w=600" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://images.pexels.com/photos/6995253/pexels-photo-6995253.jpeg?auto=compress&cs=tinysrgb&w=600" thumbnail />
        </Col>
      </Row>

</Container>
    </>

  );
}

export default ImagesItems;