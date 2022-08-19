import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Articles from './components/articles/Articles'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Articles />
        <Contacts />
        <Footer />
    </>
  )
}

export default App