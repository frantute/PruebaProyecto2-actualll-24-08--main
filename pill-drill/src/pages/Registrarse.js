 import React, { useRef } from 'react'
import Layout from '../components/Layout'
 import Link from 'next/link';
 import style from '../styles/Registrarse.module.css'
 import Button from '../components/Buttons';


 const Registrarse = () => {
  const form = useRef();
  const Registrarse1 = (e) => {
    e.preventDefault();
    console.log(form.current);
    // fetch('http://localhost:5000/registrarse')
  };

  return (
     
        <form ref={form}>
          <div class= {style.flexbox}>
          <h1 className={style.title}>CREA TU CUENTA</h1>

          <div className={style.contenedorflotante}>
            <input type="INPUT" className="form-control" id="floatingInput1" placeholder="Nombre Completo" />
          </div>


          <div className={style.contenedorflotante}>
            <input type="INPUT" className="form-control" id="floatingInput2" placeholder="nombre@ejemplo.com" />
          </div>

           
            <div className={style.contenedorflotante}>
            <input type="password" className="form-control" id="floatingPassword1" placeholder="Contraseña" />
            </div>

            <div className={style.contenedorflotante}>
            <input type="password" className="form-control" id="floatingPassword2" placeholder="Repita la Contraseña" />
            </div>

            <Button text="Registrarse" onClick={Registrarse1} /> <br />

          <div>
            <label className={style.seguimiento}>
            Hay alguna persona que te hará un seguimiento en tu app?
            </label>
          </div>

          <div className={style.checkBox}> 
            <label>
              <input type="checkbox" value="yes" /> SI
            </label>
          </div>

          </div>

         
          <div className={style.labels}>
          <button text="IR" className={style.IR} onClick={() => turnOn()} /> <br />
         
            <label className={style.cuenta}>
            ¿Ya tienes cuenta? 
            </label>
            <Link href="/InicioSesion"> Iniciar sesion </Link>
          
           </div>
          </form>
    

   )
 }
 
 export default Registrarse
 