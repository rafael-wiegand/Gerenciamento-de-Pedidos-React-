//import { useState } from 'react'

import './App.css'
import { FooterComponent } from './Componets/Footer/Footer'
import { HeaderComponent } from './Componets/Header/Header'
import { SectionComponent } from './Componets/Section/Section'

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
      <HeaderComponent/>
      <SectionComponent/>
      <FooterComponent/>
    </>
  )
}

export default App
