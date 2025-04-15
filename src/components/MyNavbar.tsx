import { Container, Nav, Navbar } from "react-bootstrap"

const MyNavbar = function () {
  return (
    <Navbar expand="lg" className="prince text-white">
      <Container>
        <Navbar.Brand href="#home" className=" text-white">
          <em>Armageddon</em>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
        <Navbar.Collapse id="basic-navbar-nav " className=" text-white">
          <Nav className="me-auto">
            <Nav.Link href="#home" className=" text-white">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className=" text-white">
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
