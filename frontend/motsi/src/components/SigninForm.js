import React from 'react';
import './styles/SigninForm.css'
// import {signin_form} from '../apiValen';  //getTiposDeUsuario}  
import { Link } from "react-router-dom";
import axios from "axios";

const options= 
//getTiposDeUsuario().then((response)=>{
    //   setResults(response)
    // })
[
  {
    id:"1",
    value:"turista",
  },
  {
    id:"2",
    value:"proveedor",
  },
]
class SigninForm extends React.Component {
  
  handleClick = e => {
    const body= {
      first_name: this.props.formValues.firstName,
      second_name : this.props.formValues.lastName,
      email: this.props.formValues.email,
      password: this.props.formValues.password,
      type_user: "this.props.TipoDeUsuario"

    };
    console.log("Me diste click")
    axios.post("https://motsi-mintic2.herokuapp.com/api/v1/create_user/", body)
    .then(function (response){
      console.log(response);
      alert("Usuario registrado")
    })
    .catch(e=>{
      console.log(e)
      alert("Error al registrar el usuario")
    })
  };

  render() {
    return (
      <React.Fragment>
        <form className="formSignin" onSubmit={this.props.onSubmit}>
          {/* <h1>Registro</h1> */}

          <div className="formSignin-group">
            {/* <label>Nombre</label> */}
            <input
              onChange={this.props.onChange}
              className="formSignin-control "
              type="text"
              name="firstName"
              placeholder='Escribe tu nombre' required 
              value={this.props.formValues.firstName}
            />
          </div>
          <br></br>

          <div className="formSignin-group">
            {/* <label>Apellido</label> */}
            <input
              onChange={this.props.onChange}
              className="formSignin-control "
              type="text"
              name="lastName"
              placeholder='Escribe tu apellido' required 
              value={this.props.formValues.lastName}
            />
          </div><br></br>

          <div className="formSignin-group">
            {/* <label>Email</label> */}
            <input
              onChange={this.props.onChange}
              className="formSignin-control "
              type="email"
              name="email"
              placeholder='Escribe tu email' required 
              value={this.props.formValues.email}
            />
          </div><br></br>
        
          <div className="formSignin-group">
            {/* <label>Contraseña</label> */}
            <input
              onChange={this.props.onChange}
              className="formSignin-control "
              type="password"
              name="password"
              placeholder='Escribe tu contraseña' required minlength="6"
              value={this.props.formValues.password}
            />
          </div><br></br>

          <div className="formSignin-group">
            <label>Tipo de usuario</label>
            <select  className='select formSignin-control'
            name="TipoDeUsuario"
            value={this.props.TipoDeUsuario} onChange={this.props.onChange}>
            {options.map((option) => (
              <option className="option formSignin-control" value={option.id}>{option.value}</option>
            ))}
          </select>
          </div>
          <br></br>
          <button onClick={this.handleClick} className="botonSignin btn btn-primary">
            Registrarse
          </button>

          <p>¿Ya tienes cuenta?<br></br><Link to="/login">
              <u className="linkSignin">Inicia sesión</u>
          </Link>
          </p>
          
          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
        </form>


      </React.Fragment>
    );
  }
}

export default SigninForm;
