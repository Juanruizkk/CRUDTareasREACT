import { ListGroup } from "react-bootstrap";
import Tarea from "./Tarea";


const ListaTareas = () => {
    return (
        <section className="container">
            <ListGroup>
                <Tarea></Tarea>
                <Tarea></Tarea>
                <Tarea></Tarea>
            </ListGroup>
        </section>
    );
};

export default ListaTareas;