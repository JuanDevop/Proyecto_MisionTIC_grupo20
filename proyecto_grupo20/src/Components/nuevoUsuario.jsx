import React from 'react'
import {Table,Button,Container,Modal,ModalBody,ModalHeader, FormGroup , ModalFooter, Label, Input} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export class nuevoUsuario extends React.Component{
    state = {
        abierto: false,
    }

    abrirModal=()=>{
        this.setState({abierto: !this.state.abierto});
    }

    render(){
    return (
        <>
        <maestroUsuarios abrir={this.abrirModal}/>
        <Modal isOpen={this.state.abierto}>
            <ModalHeader>
                Crear Nuevo Usuario
            </ModalHeader>    
            <ModalBody>
                <FormGroup>
                    <Label for= "Cedula"> Cedula</Label>
                    <Input type="text" id="Cedula"/>
                </FormGroup>
                <FormGroup>
                    <Label for= "nombre"> Nombre</Label>
                    <Input type="text" id="nombre"/>
                </FormGroup>
                <FormGroup>
                    <Label for= "ROL"> Nombre</Label>
                   
                </FormGroup>
            </ModalBody>

            <ModalFooter>

            </ModalFooter>


        </Modal>
        </>
    )
}
}

export default nuevoUsuario;