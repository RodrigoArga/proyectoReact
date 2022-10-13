import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import{faCartShopping} from "@fortawesome/free-solid-svg-icons"

const NavBarExample = () => {
    return(
       <>    
       <Navbar className="navBg" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/" >Sense Experience</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/" >Inicio</Nav.Link>
                <Nav.Link as={Link} to="/galeria">Galeria</Nav.Link>
                <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
                <FontAwesomeIcon icon={faCartShopping}/>                
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>  

        <section>
            <Outlet></Outlet>
        </section> 
       </> 
    )
}
export default NavBarExample