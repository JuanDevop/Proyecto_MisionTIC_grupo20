import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table,Button,Container,Modal,ModalBody,ModalHeader, FormGroup , ModalFooter,Label,Input,Form,FormText} from 'reactstrap'
import nuevoUsuario from './nuevoUsuario'

const data = [{
    cedula:"1014300000", nombre: "Juan Pablo",rol: "Administrador",estado:"Autorizado"
}];

export class maestroUsuarios extends React.Component {
    state={
        data:data,
        form:{
            cedula:'',
            nombre:'',
            rol:'',
            estado:'Pendiente',
        },
        modalInsertar:false,
    }

    handleChange=e=>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value,
            }  
        })
        console.log(this.state) 
    }

    mostrarModalInsertar=()=>{
        this.setState({modalInsertar:true})
    }

    ocultarModalInsertar=()=>{
        this.setState({modalInsertar:false})
    }

    insertar=()=>{
        var valorNuevo={...this.state.form};
        var lista=this.state.data;
        lista.push(valorNuevo);
        this.setState({data:lista,modalInsertar:false})
    }

    render() {
    return (
        <div>
            <Container>
                <br />   
                    <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear Nuevo Usuario</Button>
                <br /><br />   

                <Table>
                    <thead>
                        <tr>
                            <th>Cedula</th>
                            <th>Nombre</th>
                            <th>ROL</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((elemento)=>(
                            <tr>
                                <td>{elemento.cedula}</td>
                                <td>{elemento.nombre}</td>
                                <td>{elemento.rol}</td>
                                <td>{elemento.estado}</td>
                                <td><Button color="primary">Editar</Button>
                                <Button color="danger">Eliminar</Button></td>
                            </tr>   
                        ))}
                    </tbody>

                </Table>

            </Container>         
            <Modal  className="modal-dialog modal-dialog-centered" isOpen={this.state.modalInsertar}>
            <ModalHeader>
                Crear Nuevo Usuario
            </ModalHeader>    
            <ModalBody>
                <Form>
                <FormGroup>
                    <Label for= "cedula"> Cedula</Label>
                    <Input type="text" id="cedula" name="cedula" onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for= "nombre" > Nombre</Label>
                    <Input type="text" id="nombre" name="nombre" onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for= "ROL"> Rol</Label>
                    <Input type="select" id="rol" name="rol" onChange={this.handleChange}>
                       <option>Administrador</option> 
                       <option>Vendedor</option> 
                    </Input>
                </FormGroup>
                </Form>
            </ModalBody>

            <ModalFooter>
                <Button color="Primary" onClick={()=>this.insertar()}> Insertar</Button>
                <Button color="Primary" onClick={()=>this.ocultarModalInsertar()}> Cancelar</Button>
            </ModalFooter>


        </Modal>   
        </div>
    )
    }
}


export default maestroUsuarios;