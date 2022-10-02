import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import Navbar from "react-bootstrap/Navbar";

export default function Navibar(req, res) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
      <Container>
        <NavbarBrand id="navBrand">Derek Olsen</NavbarBrand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navebar-nav"/>
        <Nav >
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/software">Software</Nav.Link>
          <Nav.Link href="/music">Music</Nav.Link>
          <Nav.Link href= "/photography">Photography</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
