import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import "./HeaderNav.css";

const HeaderNav = () => {
  const [user, loading, error] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  }

  return (
    <Navbar bg="" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img width="70px" height="60px" className='mx-3 rounded-circle' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH_NiLC2ZGvVap_FUFUd_4fFd1-stBFp8wfQ&usqp=CAU" alt="" />
          The Treasure Chest
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/home">Home</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/manage">Manage-Items</Link>
            <Link to="/blogs">Blogs</Link>
            
            {
              user ?
                <span className='mt-1'> &nbsp; {user.displayName} {user.email} &nbsp; <Button onClick={handleSignOut}>Sign Out</Button></span>
                :
                <Link to="/login">Login</Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNav;
