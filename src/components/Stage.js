import React from 'react'
import styled from 'styled-components'
import bg from '../images/brazil.jpg'



export default function Stage() {
  return (
    <WrapperStage />
  )
}

const WrapperStage = styled.div`
    background: url(${bg}) no-repeat top center; 
    height:466px;
`
