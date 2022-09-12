import React from 'react'
import styled from 'styled-components'

import p1 from '../images/Kyo.gif'
import p1Attack from '../images/Kyo-attack3.gif'
import p1Hurt from '../images/Kyo-hit.gif'

export default function Person(props) {

  const attack = props.info.p1.attack;
  const hurt = props.info.p2.attack;
  let vai;

  if (!attack && !hurt) {
    vai = <img src={p1} alt="Player 1" className="p1_normal" />;
  } else if (attack){
    vai = <img src={p1Attack} alt="Player 1" className="p1_normal-attack" />;
  } else if (hurt){
    vai = <img src={p1Hurt} alt="Player 1" />;
  }

  return (
    <WrapperPerson1>
            <div className="imgP1">
                {vai}
            </div>
    </WrapperPerson1>
  )
}

const WrapperPerson1 = styled.div`
    float:left;
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
    .bottom{
        align-self: flex-end;
    }
    .p1_normal {
        margin-top:90px;
    }
    .p1_normal-attack{
        margin-top:56px;
    }
`
