import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { useSelector } from 'react-redux';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar2() {
  const status = useSelector((state) => state.database.status);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img src="/resources/images/logo.png" alt="logo" width={70} height={30} className="mr-3" />
          AGE Viewer
        </Navbar.Brand>
        <Nav className="ml-auto">
          <div className="text-white text-lg">
            Connection Status:
            <div className="d-inline ml-2 text-lg-center">
              {status === 'connected' ? <FontAwesomeIcon className="mr-1" icon={faCircle} color="green" style={{ fontSize: '0.60rem' }} /> : ''}
              {status}
            </div>
          </div>
        </Nav>
      </Navbar>
    </>
  );
}
export default Navbar2;
