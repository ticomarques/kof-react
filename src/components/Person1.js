import React from 'react'
import styled from 'styled-components'
import p1 from '../images/Kyo.gif'

export default function Person(props) {
  return (
    <WrapperPerson1>
            <div className="imgP1">
                <img src={p1} alt="Player 1" />
            </div>
    </WrapperPerson1>
  )
}

const WrapperPerson1 = styled.div`
    float:left;
    margin-top:100px;
    .energyBarP1 {
        width:200px;
        height:20px;
        background: green;
        color: white;
    }
    .WrapperEnergyBarP1 {
        width:200px;
        height:20px;
        padding: 2px;
        border:1px solid white;
    }
    .WrapperSpecialBarP1 {
        width:100px;
        height:20px;
        padding: 2px;
        border:1px solid white;
        margin: 4px 0;
    }
    .specialBarP1 {
        width:100px;
        height:15px;
        margin-top: 5px;
        background: green;
        color: white;
    }
    .x {
        float: right;
    }
`
