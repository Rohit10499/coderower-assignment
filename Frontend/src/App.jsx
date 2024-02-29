
import { useState } from 'react'
import './App.css'
import FetchData from './components/FetchData'
import Tab from './components/Tab'
import UpdateData from './components/UpdateData'

function App() {
const [activeTab, setActiveTab]= useState(0);

  return (
    <>
      <Tab active={activeTab} onClickTab={(index)=> setActiveTab(index)}/>
     {activeTab===0 &&  <FetchData/>}
     {activeTab===1 &&  <UpdateData/>}
    
    </>
  )
}

export default App
