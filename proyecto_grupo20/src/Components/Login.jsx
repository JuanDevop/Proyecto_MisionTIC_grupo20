import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table,Button,Container,Modal,ModalBody,ModalHeader, FormGroup , ModalFooter,Label,Input,Form,FormText} from 'reactstrap'

export const Login = () => {
    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <Form>
                <FormGroup>
                    <Label>Usuario</Label>
                    <Input type="text"></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Contraseña</Label>
                    <Input type="Password"></Input>
                </FormGroup>
                <br/>
                <div className="row">
                <Button >Ingresar</Button>
                </div>
                <br />
                <div className="row">
                <Button >Ingresar con Google</Button>
                </div>
            </Form>
        </div>
    )
}
export default Login;