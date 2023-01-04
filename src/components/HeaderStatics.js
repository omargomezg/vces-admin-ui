import {Card, Col, Row} from 'react-bootstrap';

function HeaderStatics() {
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col>Publicados: 34122</Col>
          <Col>Borrador: 12</Col>
          <Col>Eliminados: 112</Col>
          <Col>Ocultos: 12</Col>
        </Row>
      </Card.Body>
    </Card>);

}

export default HeaderStatics;
