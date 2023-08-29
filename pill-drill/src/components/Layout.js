import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Headercomponent from './Header'

const Layout = ({children, pagina}) => {
  return (
    <div> 
      <Head>
        <title> PILL-DRILL - {pagina} </title>
      </Head>

       <Headercomponent/>

       
      {children}

      <Footer />
    </div>
   
  )
}

export default Layout
