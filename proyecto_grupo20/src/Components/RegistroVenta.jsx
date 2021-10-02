import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table,Button,Container,Modal,ModalBody,ModalHeader, FormGroup , ModalFooter,Label,Input,Form,FormText} from 'reactstrap'

const data = [{
    producto:"gaseosa", cantidad: "1",precio: "2500",valorTotal:"2500"
}];
export class registroVentas extends React.Component {
    
    state={
        data:data,
    }

    
    render() {
    return (
        <div>
            <Container>
                <br />   
                    <Form>
                        <div className="row">
                            <input className="col" type="text" value="02/10/2021" readonly />
                            <input className="col" type="text" value="Natalia" readonly />
                            <div className="col"></div>
                            <div className="col"></div>
                        </div>
                        <br />
                        <div className="row">
                    <FormGroup className="col">
                            <Label>Identificacion Cliente</Label>
                            <Input type="text"></Input>
                        </FormGroup>
                        <FormGroup className="col">
                            <Label>Nombre Cliente</Label>
                            <Input type="text"></Input>
                        </FormGroup>
                        </div>
                        <div className="row">
                        <FormGroup className="col">
                            <Label>Identificador Producto</Label>
                            <Input type="select">
                            <option>gaseosa</option>
                            <option>ponque</option>
                            <option>galletas</option>
                            </Input>
                        </FormGroup>
                        <FormGroup className="col">
                            <Label>Cantidad</Label>
                            <Input type="number"></Input>
                        </FormGroup>
                        <FormGroup className="col">
                            <Label>PrecioUnitario</Label>
                            <Input type="number"></Input>
                        </FormGroup>
                        </div>
                        <br />
                        <Button>Agregar</Button>
                    </Form>
                    <Table>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio unitario</th>
                            <th>Valor total</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((elemento)=>(
                            <tr>
                                <td>{elemento.producto}</td>
                                <td>{elemento.cantidad}</td>
                                <td>{elemento.precio}</td>
                                <td>{elemento.valorTotal}</td>
                                <td><Button color="primary">Editar</Button>
                                <Button color="danger">Eliminar</Button></td>
                            </tr>   
                        ))}
                    </tbody>

                </Table>
            </Container>         
              
        </div>
    )
    }
}


export default registroVentas;