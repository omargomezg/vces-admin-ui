import { useParams } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";

function ArticleForm() {

  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [url, setUrl] = useState("");
  const [file, setFile] = useState();
  const [created, setCreated] = useState(new Date().toLocaleDateString("es-CL") + "");
  const [updated, setUpdated] = useState(new Date().toLocaleDateString() + "");

  const modules = {
    toolbar: [
      [{ "header": [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ "list": "ordered" }, { "list": "bullet" }, { "indent": "-1" }, { "indent": "+1" }],
      ["link", "image"],
      ["clean"]
    ]
  };

  const formats = [
    "header",
    "bold", "italic", "underline", "strike", "blockquote",
    "list", "bullet", "indent",
    "link", "image"
  ];

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const handleCancel = () => navigate("/content/", { replace: true });

  const titleHandle = (title) => {
    setTitle(title);
    setUrl(title === undefined ? "" : title.normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9_]+/gi, "-")
      .toLowerCase());
  };

  const handleFile = (event) => {
    console.log(event);
    setFile(event.target.value);
  }

  return (
    <>
      <h1>Contenido {id} - {title}</h1>
      {file}
      <Form onSubmit={submitHandler}>
        <Row>
          <Col md="9">
            <Form.Group className="mb-3">
              <Form.Label>Titulo</Form.Label>
              <Form.Control type="text" placeholder="Titulo del articulo"
                            value={title}
                            onChange={e => titleHandle(e.target.value)} />
              <Form.Text muted>
                URL: {url}
              </Form.Text>
            </Form.Group>
            <ReactQuill className="mb-3" theme="snow"
                        value={body}
                        onChange={setBody}
                        modules={modules} formats={formats} />
            <Form.Group className="mb-3">
              <Form.Label>Fuente</Form.Label>
              <Form.Control type="text" placeholder="Url de origen" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Publicacion</Form.Label>
              <Form.Control type="text" readOnly
                            value={created}
                            onChange={e => setCreated(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Ultima actualizacion</Form.Label>
              <Form.Control type="text" readOnly
                            value={updated}
                            onChange={e => setUpdated(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Autor</Form.Label>
              <Form.Control type="text" placeholder="Autor" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Extracto</Form.Label>
              <Form.Control as="textarea" rows={4} />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Imagenes</Form.Label>
              <Form.Control type="file"
                            value={file}
                            onChange={e => handleFile(e)} />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">Publicar</Button>{" "}
        <Button variant="secondary" type="submit">Cambiar a borrador</Button>{" "}
        <Button variant="link" onClick={() => handleCancel()}>Cancelar</Button>
      </Form>
    </>
  );
}

export default ArticleForm;
