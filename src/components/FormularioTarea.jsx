import React, { useState } from "react"; // Agrega useState aquí
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { PlusCircle } from "react-bootstrap-icons";
import ListaTareas from "./ListaTareas";
import { useForm } from "react-hook-form";

const FormularioTarea = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  /* la lista de tareas es un state */
  const [listaTareas, setListaTareas] = useState([]);


  const posteriorValidacion = (data) => {
    if (listaTareas.some((tarea) => tarea === data.tarea.trim())) {
      alert('Esta tarea ya existe');
    } else {
      /* ... operador spread */
      setListaTareas([...listaTareas, data.tarea]);
      reset();
    }

  }



  return (
    <section className="mb-4">
      <Form onSubmit={handleSubmit(posteriorValidacion)} className="container d-flex" >
        <Form.Group controlId="formTarea" className="w-100">
          <Form.Control type="text" placeholder="Ingrese una tarea" {...register("tarea", {
            required: 'La tarea es un dato obligatorio',
            minLength: {
              value: 3,
              message: 'La tarea debe tener 3 carateres como minimo'
            },
            maxLength: {
              value: 25,
              message: 'La tarea debe tener como maximo 25 caracteres'
            }
          })} />
          <Form.Text className="text-danger">{errors.tarea?.message}</Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          <PlusCircle></PlusCircle>
        </Button>
      </Form >
      <ListaTareas className='mt-5' listaTareas={listaTareas}></ListaTareas>
    </section>
  );
};

export default FormularioTarea;