import { Nav } from 'react-bootstrap'


export const LeftMenu = () => {
    return (
        <>
            <h5>Каталог</h5>
            <Nav className="flex-column">
                <Nav.Link href="/catalog#tool">Инструмент</Nav.Link>
                <Nav.Link href="/catalog#garden">Садовый инвертарь</Nav.Link>
                <Nav.Link href="/catalog#household">Бытовая химия</Nav.Link>
            </Nav>
        </>
    );
};
