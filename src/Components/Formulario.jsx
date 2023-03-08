import React, { useState } from 'react'
import Card from './Card';
import style from '../style.module.css'


export default function Formulario() {

    const [nombre , setNombre] = useState('');
    const [juego , setJuego] = useState('');
    const [mensaje, setMensaje] = useState(false)

    const onChangeinput = (event)=>{
        setNombre(event.target.value)
    }

    const onChangeJuego = (event)=>{
        setJuego(event.target.value)
    }

    const onSubmitForm = (event)=>{

        event.preventDefault();
        const nombreValido = nombre.trim();
        const juegoValido = juegoValido.trim()

        if(nombreValido.length > 3 && juegoValido.length > 6){
            setMensaje(true)
        }
        else{
            setMensaje(false)
            alert('Por favor chequea que la información sea correcta')
        }
    }
  return (
    <>
    <h1>Mi formulario</h1>
    <form className={style.form} onSubmit={onSubmitForm}>
        <input type="text" placeholder='Por favor ingrese su nombre' onChange={onChangeinput} value={nombre}/>
        <input type="text" placeholder='Por favor ingrese su juego preferido'onChange={onChangeJuego} value={juego}/>
        <button>Enviar</button>
    </form>

    {mensaje ? <Card userName={nombre} game={juego} /> : null}
    </>

  )
}