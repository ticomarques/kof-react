import React from 'react'
import styled from 'styled-components'
import p2 from '../images/Terry.gif'

export default function Person(props) {
  return (
    <WrapperPerson2>
        <div className="imgP2">
            <img src={p2} alt="Player 2" />
        </div>
    </WrapperPerson2>
  )
}

const WrapperPerson2 = styled.div`
    float:right;
    margin-top:100px;
    .energyBarP2 {
        width:200px;
        height:20px;
        background: green;
        color: white;
        float:right;
        text-align:right;
    }
    .WrapperEnergyBarP2 {
        width:200px;
        height:20px;
        padding: 2px;
        border:1px solid white;
    }
    .WrapperSpecialBarP2 {
        width:100px;
        height:20px;
        padding: 2px;
        border:1px solid white;
        margin: 4px 0;
        float:right;
    }
    .specialBarP2 {
        width:100px;
        height:15px;
        margin-top: 5px;
        background: green;
        color: white;
        text-align:right;
    }
`
