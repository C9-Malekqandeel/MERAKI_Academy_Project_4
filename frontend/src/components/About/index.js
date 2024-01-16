import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import './style.css';
import NavBarSignIn from '../NavBarSignIn';
import HeadBarHome from '../HeadBarHome';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Closure from '../Closure';



const index = () => {

    const isLoggedIn = localStorage.getItem("isLoggedIn");
    
  return (
    <>
    {isLoggedIn? <NavBarSignIn/> : <HeadBarHome/>}

    <Container>
<br></br>
<br></br>

    <Breadcrumb>
      <Breadcrumb.Item href="/Home">Home</Breadcrumb.Item>
      <Breadcrumb.Item active>
        Details
      </Breadcrumb.Item>
    </Breadcrumb>

    </Container>
    <br></br>
<Container>

<div ClName="cards">
    <div ClName="card red">
    <h2 ClName='tip'>
   The best way to get money is through trade and sale, and this is the basis of the Swap Store.
   </h2>
    </div>
    <div Cl="card blue">
    <h3 >
    The sale process takes place by communicating with the seller directly via the phone number and registered website.
    </h3>
    </div>
    <div Cl="card green">
        <p Cl="tip">Hover Me</p>
        <p Cl="second-text">Lorem Ipsum</p>
    </div>
</div>

    {/* <div Cl="main">
  <div Cl="card" id="c1">
   <h2>
   The best way to get money is through trade and sale, and this is the basis of the Swap Store.
   </h2>
  </div>
  <div Cl="card" id="c2">
    <h3>
    The sale process takes place by communicating with the seller directly via the phone number and registered website.
    </h3>
  </div>
  <div Cl="card" id="c3">
    <h4>
    You can publish your product on the site, and within a short period of time, site visitors will contact you to make a purchase and provide details about the product.
    </h4>
  </div>
  
  <div Cl="card" id="c4">
  <h4>
  You can publish your product on the site, and within a short period of time, site visitors will contact you to make a purchase and provide details about the product.
  </h4>
  </div>
</div> */}
</Container>

<Closure/>

    </>

    )
}

export default index