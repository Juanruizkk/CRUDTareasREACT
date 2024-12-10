import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { PlusCircle } from "react-bootstrap-icons";
import ListaTareas from "./ListaTareas"
const FormularioTarea = () => {
  return (
    <section className="mb-4">
      <Form Form className="container d-flex" >
        <Form.Group controlId="formTarea" className="w-100">
          <Form.Control type="text" placeholder="Ingrese una tarea" />
        </Form.Group>
        <Button variant="primary" type="submit">
          <PlusCircle></PlusCircle>
        </Button>
      </Form >
      <ListaTareas className='mt-5'></ListaTareas>
    </section>
  );
};

export default FormularioTarea;