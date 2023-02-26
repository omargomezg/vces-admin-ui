import React from "react";
import { Pagination, Table } from "react-bootstrap";
import HeaderStatics from "../HeaderStatics";
import ArticleTableRow from "./ArticleTableRow";

const articles = [
  {
    id: 1,
    title: "Hoy se jugará el último partido del Mundialito Austral Cup de la sede Paillaco",
    author: "Omar Gómez",
    published: "14-11-2023"
  }, {
    id: 2,
    title: "Intento frustrado de \"portonazo\" afectó a fiscal en La Florida",
    author: "José Pardo",
    published: "15-11-2023"
  }, {
    id: 3,
    title: "Biden: Putin ha cometido un \"gran error\" con la suspensión de tratado nuclear",
    author: "Omar Gómez",
    published: "18-11-2023"
  }
];

function ArticleList() {
  const active = 2;
  const items = [];


  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>
      <h1>Contenidos</h1>
      <HeaderStatics/>
      <div className="end align-items-end">
        <a href="/content/create">Agregar nueva entrada</a>
      </div>
      <br/>
      <Table striped bordered hover>
        <thead>
        <tr>
          <th>Titulo</th>
          <th>Autor</th>
          <th>Fecha</th>
          <th>&nbsp;</th>
        </tr>
        </thead>
        <tbody>
        {articles.map(item => <ArticleTableRow key={item.id}
                                               item={item} />)}
        </tbody>
      </Table>
      <div style={{display: 'flex', justifyContent: 'right'}}>
        <Pagination size="sm">{items}</Pagination>
      </div>
    </>
  );
}

export default ArticleList;
