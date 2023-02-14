import { useParams } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";

function ArticleForm() {
  const { id } = useParams();
  const [title, setTitle] = useState('');

  const submitHandler = (event) =>{
    event.preventDefault();
  }

  return (
    <>
      <h1>Contenido {id} - {title}</h1>
      <Form onSubmit={submitHandler}>
        <Row>
          <Col md="9">
            <Form.Group>
              <Form.Label>Titulo</Form.Label>
              <Form.Control type="text" placeholder="Titulo del articulo" value={title} onChange={e => setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Fuente</Form.Label>
              <Form.Control type="text" placeholder="Url de origen" />
            </Form.Group></Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Publicacion</Form.Label>
              <Form.Control type="text" readOnly="true" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Ultima actualizacion</Form.Label>
              <Form.Control type="text" readOnly="true" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Autor</Form.Label>
              <Form.Control type="text" placeholder="Autor" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Extracto</Form.Label>
              <Form.Control as="textarea" rows={4} />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">Guardar</Button>
        <Button variant="link">Cancelar</Button>
      </Form>
    </>
  );
}

export default ArticleForm;
