import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
import gifImage from './output-onlinegiftools.gif';

function Header() {
  return (
    <>
      <MDBNavbar style={{backgroundColor:'rgb(159, 166, 178)'}}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#' className='text-light'>
            <img className='m-1'
              src={gifImage}
              height='30'
              alt=''
              loading='lazy'
            />
            Show-Hide
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  )
}

export default Header