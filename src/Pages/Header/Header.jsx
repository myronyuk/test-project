import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import ModalWind from '../../Components/Modal/ModalWind';
import { useState } from 'react';

function Header() {
    const [modalState, setModalState] = useState(false);

    return (
        <>
            <ModalWind call={modalState} onDestroy={() => setModalState(false)} />
            <div className='Header-Container navbar-default'>
                <div className='container'>
                    <Navbar  expand="lg" className="w-100">
                        <Navbar.Brand as={Link} to="/">Military-Group</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <div className="col">
                        <Nav className="me-auto d-flex justify-content-end text-end">
                                <Nav.Link as={Link} to="/delivery">Вартість доставки</Nav.Link>
                                <Nav.Link as={Link} to="/reviews">Відгуки</Nav.Link>
                                <Nav.Link as={Link} to="#3" onClick={() => setModalState(true)}>Зворотній зв'язок</Nav.Link>
                            </Nav>
                            <div className="coljustify-content-end text-end">
                                <div className="phone-number">
                                    <span>+38 (050) 123-45-67</span>
                                    <span>+38 (050) 123-45-67</span>
                                </div>
                            </div>
                            </div>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        </>
    );
}

export default Header;
