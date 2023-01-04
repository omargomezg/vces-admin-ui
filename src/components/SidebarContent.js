import {Button, Form} from 'react-bootstrap';

const SidebarContent = () => {
  const sites = [{name: 'Todos'}, {name: 'Paillaco'}, {name: 'Valdivia'}];

  const statuses = [{value: 'Pendiente'}, {value: 'Finalizada'}];

  const getSelectWithValue = (object, index) => {
    return <option key={index}>{object.value}</option>;
  };

  const getSelectWithName = (object, index) => {
    return <option key={index}>{object.name}</option>;
  };

  return (<Form>
    <Form.Group>
      <Form.Label>Portal</Form.Label>
      <Form.Select>
        {sites.map(getSelectWithName)}
      </Form.Select>
    </Form.Group>
    <Form.Group>
      <Form.Label>Migracion</Form.Label>
      <Form.Select>
        {statuses.map(getSelectWithValue)}
      </Form.Select>
    </Form.Group>
    <Button type="submit">
      Submit
    </Button>
  </Form>);
};

export default SidebarContent;
