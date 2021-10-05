import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter, Label, Input, Form, FormText } from 'reactstrap'



const data = [{
    id: "1010001", descripcion: "Manzana verde", valorunitario: 1750, estado: true
}];

export class maestroProductos extends React.Component {
    state = {
        data: data,
        form: {
            id: '',
            descripcion: '',
            valorunitario: 0,
            estado: false,
        },
        modalInsertar: false,
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
        console.log(this.state)
    }

    mostrarModalInsertar = () => {
        this.setState({ modalInsertar: true })
    }

    ocultarModalInsertar = () => {
        this.setState({ modalInsertar: false })
    }

    insertar = () => {
        var valorNuevo = { ...this.state.form };
        var lista = this.state.data;
        lista.push(valorNuevo);
        this.setState({ data: lista, modalInsertar: false })
    }


    render() {
        return (
            <div>
                <Container>
                    <br />
                    <br />
                    <br />
                    <Button color="success" onClick={() => this.mostrarModalInsertar()}>Crear Nuevo Producto</Button>
                    <br /><br />



                    <Table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Descripcion</th>
                                <th>Valor Unitario</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((elemento) => (
                                <tr>
                                    <td>{elemento.id}</td>
                                    <td>{elemento.descripcion}</td>
                                    <td>{elemento.valorunitario}</td>
                                    <td>{elemento.estado}</td>
                                    <td><Button color="primary">Editar</Button>
                                        <Button color="danger">Eliminar</Button></td>
                                </tr>
                            ))}
                        </tbody>

                    </Table>

                </Container>

                <Modal className="modal-dialog modal-dialog-centered" isOpen={this.state.modalInsertar}>
                    <ModalHeader>
                        Crear Nuevo Producto
                    </ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="id">Id</Label>
                                <Input type="text" id="id" name="id" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="descripcion" > Descripcion</Label>
                                <Input type="text" id="descripcion" name="descripcion" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="valorunitario" > Valor Unitario</Label>
                                <Input type="number" step="1" id="valorunitario" name="valorunitario" onChange={this.handleChange} />
                            </FormGroup>
                            <br />
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" id="estado" name="estado" onChange={this.handleChange}  />{' '}
                                    ¿Esta disponible?
                                </Label>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    
                    <ModalFooter>
                        <Button color="Primary" onClick={() => this.insertar()}> Insertar</Button>
                        <Button color="Primary" onClick={() => this.ocultarModalInsertar()}> Cancelar</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}


export default maestroProductos;