import React, {useState} from 'react'

const FormUseState = () => {
    const [getNombre, setNombre] = useState("")
    const [getApellido, setApellido] = useState("")
    const [getEmail, setEmail] = useState("")
    const [getPassword, setPassword] = useState("")
    const [getConfirmPass, setConfirmPass] = useState("")

    const crearUsuario = (evento) => {
        evento.preventDefault();
        console.log(evento.target);
    }

    return (
        <>
        <form onSubmit = {crearUsuario}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Nombre</label>
                <input onChange={(evento) => setNombre(evento.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre" />
                {/* validar campo nombre */}
                {(getNombre.length < 3 && getNombre !== "") ? <p className= 'text-danger'>Nombre debe tener mas de tres caracteres</p>: null }            

            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Apellido</label>
                <input onChange={(evento) => setApellido(evento.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Apellido" />
                {/* validar apellido */}
                {(getApellido.length < 3 && getApellido !== "") ? <p className = 'text-danger'> Apellido debe tener mas de tres caracteres</p>: null}
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input onChange={(evento) => setEmail(evento.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input onChange={(evento) => setPassword(evento.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                {/* validar password */}
                {(getPassword.length < 7 ) ? <p className = 'text-danger'> La Contraseña es demasiado corta </p>: null}
                
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Confirm Password</label>
                <input onChange= {(evento) => setConfirmPass(evento.target.value)}  type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password" />
                {/* valida confirmacion de password */}
                {( getConfirmPass != getPassword ) ? <p className = 'text-danger'> Las Contraseñas no coincide </p>: null}

            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        
        <div>
            <p>Nombre: {getNombre}</p>
            <p>Apellido: {getApellido}</p>
            <p>Email: {getEmail}</p>
            <p>Password: {getPassword}</p>
            <p>Confirm Password: {getConfirmPass}</p>
            

            

        </div>
        </>
    )
}

export default FormUseState