import React, {useState, useEffect} from 'react'
import clock from "./imagenes/clock.png"
import vara from "./imagenes/vara.png"
import './Fecha.css'

export const Fecha = () => {
    var [fecha,setFecha] = useState(new Date());

    useEffect(() => {
        var temporizador = setInterval(()=>setFecha(new Date()), 1000 )
        return function cleanup() {
            clearInterval(temporizador)
        }
    });

    return(
        <div>
            <h1> <img src = {clock} alt="reloj imagen"/> Bienvenido a mi página! <img src = {clock} alt="reloj imagen"/></h1>
            <h2> A continuación podrá ver la fecha y hora en tiempo real </h2>
            <p> La fecha actual es: {fecha.toLocaleDateString()} </p>
            <p> Y el tiempo actual es: {fecha.toLocaleTimeString()} </p>
            <p> Esta pagina humilde fue desarrollada por Mauricio Carrillo para el curso Devops de Azure </p>
            <h3> La verdadera <img src = {vara} alt="vara imagen" className="vara" /> mágia <img src = {vara} alt="vara imagen" className="vara"/> se encuentra en el deployment </h3>
        </div>
    )
}

export default Fecha

    