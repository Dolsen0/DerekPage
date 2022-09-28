import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import Navbar from "react-bootstrap/Navbar";

export default function Navibar(req, res) {
  return (
    <Container>
      <Navbar>
        <NavbarBrand>Derek Olsen</NavbarBrand>
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#software">Software Engineer</Nav.Link>
        <Nav.Link href="#photography">Photography</Nav.Link>
        <Nav.Link href="#music">Music</Nav.Link>
      </Navbar>
    </Container>
  );
}
