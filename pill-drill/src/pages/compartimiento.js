import React from 'react'
import style from '../styles/compartimiento.module.css'
import Button from '../components/Buttons';
function compartimiento() {
  return (
    <div className={style.container}>
        <button text="compartmeinto1" className={style.botonComp1} onClick={() => turnOn()} /> <br />
        <button text="compartmeinto2" className={style.botonComp2} onClick={() => turnOn()} /> <br />
        <button text="compartmeinto3" className={style.botonComp3} onClick={() => turnOn()} /> <br />
        <button text="compartmeinto4" className={style.botonComp4} onClick={() => turnOn()} /> <br />
        
    </div>
  )
}

export default compartimiento
