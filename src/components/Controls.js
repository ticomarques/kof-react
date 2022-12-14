import React from 'react'

export default function Controls(props) {
  return (
    <div>
        {props.player ? 
            <div className="wrapperControl1">
                <button onClick={props.handleAttack}>Attack</button>
                <button onClick={props.handleSpecial}>Special</button>
            </div>
            : 
            <div className="wrapperControl2">
                <button onClick={props.handleAttack}>Attack</button>
                <button onClick={props.handleSpecial}>Special</button>
            </div>
        }
    </div>
    )
}