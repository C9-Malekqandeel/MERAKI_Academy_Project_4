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

<div className="cards">
    <div className="card red">
        <p className="tip">Opportunity </p>
        <p className="second-text">   The best way to get money is through trade and sale, and this is the basis of the Swap Store.</p>
    </div>
    <div className="card blue">
        <p className="tip">How does it work?</p>
        <p className="second-text">    The sale process takes place by communicating with the seller directly via the phone number and registered website.</p>
    </div>
    <div className="card green">
        <p className="tip">How can you benefit?</p>
        <p className="second-text">You can publish your product on the site, and within a short period of time, site visitors will contact you to make a purchase and provide details about the product.</p>
    </div>
</div>
</Container>
<br></br>
<br></br>
<Container className='says' >

<div class="notification">
    <div class="notiglow"></div>
    <div class="notiborderglow"></div>
    <div class="notititle">Time is running out! L</div>
    <div class="notibody">Get ahead of the crowd with our game-changing SWAP.</div>
  </div>
  <div class="notification">
    <div class="notiglow"></div>
    <div class="notiborderglow"></div>
    <div class="notititle">Time is running out! </div>
    <div class="notibody">Brace yourself for SWAP—it’s here!</div>
  </div>
</Container>

<Closure/>

    </>

    )
}

export default index