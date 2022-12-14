import React from 'react'

export default function BarP1(props) {
  return (
    <div className={props.info.css ? 'wrapperBarP1 x' : 'wrapperBarP1 nothing'}>
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
    </div>
  )
}
