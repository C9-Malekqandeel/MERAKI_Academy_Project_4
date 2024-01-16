import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';


function Slides() {
  return (
    <Container>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/cyber-monday-shopping-sales_23-2148688502.jpg?size=626&ext=jpg&ga=GA1.2.1116360010.1699996058&semt=sph"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Leave your mark here!</h1>
          <h3>It's your chance to be a trader</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Second slide"
        />
        <Carousel.Caption>
        <h1>Your first step to trading!</h1>
          <h3>It's your chance to be a trader</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-photo/globe-surrounded-by-cardboard-boxes-as-image-global-business-logistics_124507-58021.jpg?w=740"
        />
        <Carousel.Caption>
        <h1>Leave your mark here!</h1>
          <h3>It's your chance to be a trader</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
  );
}

export default Slides;