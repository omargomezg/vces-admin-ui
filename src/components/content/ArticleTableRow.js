import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ArticleTableRow({ item }) {

  // const {id} = row;
  const navigate = useNavigate();
  // const {row} = props;
  //const showButtons = () => {
  //};

  const handleClickDetail = (id) => navigate("/content/" + id, { replace: true });

  return (
    <tr>
      <td>{item.title}</td>
      <td>{item.author}</td>
      <td>{item.published}</td>
      <td>
        <Button variant="link" onClick={() => handleClickDetail(item.id)}>Editar</Button>
      </td>
    </tr>
  );
}

export default ArticleTableRow;

/*<tr key={props.row.id}>
        <td onMouseEnter={showButtons}>
          {row.title}
          <div style={{ display: "flex", justifyContent: "right" }}>
            <Button variant="link" size="sm" onClick={() => handleClickDetail(item.id)}>Editar</Button>{" "}
            <Button variant="link" size="sm">Eliminar</Button>{" "}
          </div>
        </td>
        <td>{row.author}</td>
        <td>{row.published}</td>
      </tr>*/
