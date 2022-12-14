import React from 'react'

export default function BarP2(props) {
  return (
    <div className="wrapperBarP2">
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
    </div>
  )
}
