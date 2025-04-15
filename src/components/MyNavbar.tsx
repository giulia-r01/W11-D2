import { Container, Nav, Navbar } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"

const MyNavbar = function () {
  const location = useLocation()
  return (
    <Navbar expand="lg" className="prince text-white">
      <Container>
        <Link className="navbar-brand text-white" to="/">
          <em>Armageddon</em>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
        <Navbar.Collapse id="basic-navbar-nav " className=" text-white">
          <Nav className="me-auto">
            <Link
              className={
                location.pathname === "/"
                  ? "nav-link active text-white"
                  : "nav-link text-white-50"
              }
              to="/"
            >
              Home
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
