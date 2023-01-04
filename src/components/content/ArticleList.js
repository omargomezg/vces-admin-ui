import React from 'react';
import {Button, Pagination, Table} from 'react-bootstrap';
import HeaderStatics from '../HeaderStatics';

function ArticleList() {
  const active = 2;
  const items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <>
      <h1>Contenidos</h1>
      <HeaderStatics/>
      <div className="end align-items-end">
        <a href="/new-article">Agregar nueva entrada</a>
      </div>
      <br/>
      <Table striped bordered hover>
        <thead>
        <tr>
          <th>Titulo</th>
          <th>Autor</th>
          <th>Fecha</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Hoy se jugará el último partido del Mundialito Austral Cup de la
            sede Paillaco
          </td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>
            Cuentos inclusivos llegan a las bibliotecas públicas de Los Ríos
            <div style={{display: 'flex', justifyContent: 'right'}}>
              <Button variant="link" size="sm">Editar</Button>{' '}
              <Button variant="link" size="sm">Eliminar</Button>{' '}
            </div>
          </td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>
            <small>Juan Perez</small>
            <p>Paillaco hacen un llamado a prevenir incendios forestales ante
              alerta por altas temperaturas</p>
          </td>
          <td>aas</td>
          <td>@twitter</td>
        </tr>
        </tbody>
      </Table>
      <div style={{display: 'flex', justifyContent: 'right'}}>
        <Pagination size="sm">{items}</Pagination>
      </div>
    </>
  );
}

export default ArticleList;
