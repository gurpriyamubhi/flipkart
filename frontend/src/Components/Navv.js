import "../App.css";
import {
  Navbar,
  Container,
  FormControl,
  Button,
  Nav,
  InputGroup,
} from "react-bootstrap";
import FlipkartLogo from "../Pics/flipkartLogo.png";
import { Link } from "react-router-dom";
import CartContext from "../CartContext";
import { useContext } from "react";

function Navv({ user }) {
  const { items } = useContext(CartContext);

  return (
    <div className="shittyNav">
      <Navbar
        fixed="top"
        expand="lg"
        variant="dark"
        style={{ backgroundColor: "rgb(62,114,232)" }}
      >
        <Container>
          <Link className="navLinks" to={"/"}>
            <Navbar.Brand href="#">
              <img
                className="flipkartLogo"
                src={FlipkartLogo}
                alt={"flipkart.com"}
              />
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              
            </Nav>
            <Nav.Link>
                <Link className="navLinks" to="/user">
                  Hello, <b>{user}</b>
                </Link>
              </Nav.Link>
            <Nav.Link>
              <Link className="navLinks" to="/cart">
                Cart{" "}
                <i
                  style={{ fontSize: "1.5rem" }}
                  class="las la-shopping-cart"
                ></i>
                <span> {items.length}</span>
              </Link>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navv;
