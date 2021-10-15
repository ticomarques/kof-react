import React from 'react'
import styled from 'styled-components'

export default function BarP1(props) {
  return (
    <WrapperBarP1 className={props.info.css ? 'x' : 'nothing'}>
            <div className="WrapperEnergyBarP1">
                <div className="energyBarP1" style={{width: props.info.energy * 2}}>
                    <span>{props.info.name} - {props.info.energy}</span>
                </div>
            </div>
            
            <div className="WrapperSpecialBarP1">
                <div className="specialBarP1" style={{width: props.info.special}}>
                    <span>Special</span>
                </div>
            </div>
    </WrapperBarP1>
  )
}

const WrapperBarP1 = styled.div`
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
        padding: 1px;
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
`
