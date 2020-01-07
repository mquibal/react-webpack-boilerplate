import React from 'react'
import NavBar from './components/NavBar'
import Body from '../modules/components/Body'
import Footer from '../modules/components/Footer'

const App = () => {
  return (
    <div className="app">
       <NavBar />
       <Body />
       <Footer />
    </div>
  )
}
  
export default App