import React from 'react'
import style from '../styles/Dispensar.module.css'
import Button from '../components/Buttons';
import Image from 'next/image'
function DispensarPastilla() {
  return (
    <div className={style.container}>
    <Image
      src={'/Image/DISPENSAR.png'}
      alt="Dispensar"
      width={350}
      height={350}
     />
       <button text="dispensar" className={style.dispensar} onClick={() => turnOn()} /> <br />
        
    </div>
  )
}

export default DispensarPastilla