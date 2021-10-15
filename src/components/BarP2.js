import React from 'react'
import styled from 'styled-components'

export default function BarP2(props) {
  return (
    <WrapperBarP2>
            <div className="WrapperEnergyBarP2">
                <div className="energyBarP2" style={{width: props.info.energy * 2}}>
                    <span>{props.info.name} - {props.info.energy}</span>
                </div>
            </div>

            <div className="WrapperSpecialBarP2">
                <div className="specialBarP2" style={{width: props.info.special}}>
                    <span>Special</span>
                </div>
            </div>
    </WrapperBarP2>
  )
}

const WrapperBarP2 = styled.div`
    float:right;
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
        padding: 1px;
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
