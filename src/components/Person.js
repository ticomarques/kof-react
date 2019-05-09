import React from 'react'
import styled from 'styled-components'
import p1 from '../images/Kyo.gif'
import p2 from '../images/Terry.gif'

export default function Person(props) {
  return (
    <div>
    {props.player ? 

    <WrapperPerson1>
        <div>
            <div className="energyBarP1">
                <span>{props.info.name} - {props.info.energy}</span>
            </div>

            <div className="specialBarP1">
                <span>Special - {props.info.special}</span>
            </div>

            <img src={p1} alt="Player 1" />
        </div>
    </WrapperPerson1>

    :

    <WrapperPerson2>
        <div>
            <div className="energyBarP2">
                <span>{props.info.name} - {props.info.energy}</span>
            </div>
            <div className="specialBarP2">
                <span>Special - {props.info.special}</span>
            </div>

            <img src={p2} alt="Player 2" />
        </div>
    </WrapperPerson2>

    }
    </div>
  )
}

const WrapperPerson1 = styled.div`
    position:absolute;
    top: 240px;
    .energyBarP1 {
        width:200px;
        height:20px;
        background: green;
        color: white;
    }
    .specialBarP1 {
        width:100px;
        height:15px;
        background: green;
        color: white;
    }
`

const WrapperPerson2 = styled.div`
    position:absolute;
    top: 240px;
    right: 20px;
    .energyBarP2 {
        width:200px;
        height:20px;
        background: green;
        color: white;
    }
    .specialBarP2 {
        width:100px;
        height:15px;
        background: green;
        color: white;
    }
`
