import {Nav} from 'react-bootstrap';

/**
 * The Menu app
 * @constructor
 */
function Menu() {
  return (<>
      <Nav activeKey="/">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/content">Contenidos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/user">Usuarios</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/migracion">Migracion</Nav.Link>
        </Nav.Item>
      </Nav>
  </>);
}

export default Menu;
