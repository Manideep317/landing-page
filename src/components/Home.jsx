import React from 'react'
import homeimg from '../assets/images/mucover.jpeg';
import Header from './Header';
import Mainhome from './Mainhome';
import Form from './Form';
import Middle from './Middle';
import About from './About';
import Footer from './Footer';
export default function Home() {
  return (
    <div className="">
      <Header />
      <Mainhome/>
      <Middle/>
      <About/>
      <Form/>
      <Footer/>
    </div>
  )
}
