import { Container, Navbar, Nav, Row, Col } from "react-bootstrap"
import './Layuot.css'
import { LeftMenu } from "./components/LeftMenu/LeftMenu"
import { NavLink, Outlet} from "react-router-dom"

export const Layuot = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        Главная
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink to={'/'} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
                            Каталог
                        </NavLink>
                        <NavLink to={'products'} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
                           Новости
                        </NavLink>
                        <NavLink to={'about'} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
                           Контакты
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
            <Container>
                <Row style={{ marginTop: '10px'}}>
                    <Col sm={2} md={2} lg={2}>
                        <LeftMenu />
                    </Col>
                    <Col sm={10} md={10} lg={10}>
                        <Outlet />
                    </Col>
                </Row>
            </Container>
            </>
            )
   
}