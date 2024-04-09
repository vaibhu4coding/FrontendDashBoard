import React from 'react'
import Cards from '../Card_Main/Cards'
import { CHeaderText } from '@coreui/react'
import Comparison from '../Comparison/Comparison'

const Main = () => {
  return (

    <div className='main' style={{
      backgroundColor: 'white',
      borderRadius: '23px',
      overflow: 'hidden',
      padding: '20px',
      margin: '10px',
      height:'100vh'
    }}>
      {/* <CHeaderText>Dashboard</CHeaderText */}
      <h3>Dashboard</h3>
      <Cards></Cards>
      <h4 style={{marginTop:'7%'}}>Comparison</h4>
      <Comparison></Comparison>
    </div>
  )
}

export default Main