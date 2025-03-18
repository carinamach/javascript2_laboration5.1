import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  const [activePage, setActivePage] = useState("Home")

  const onItemClicked = (newPage) => {
    setActivePage(newPage)
  }


  return (
    <>
      <Header activePage={activePage} onItemClicked={onItemClicked}></Header>
      <Main activePage={activePage}></Main>
      <Footer></Footer>
    </>
  )
}

export default App