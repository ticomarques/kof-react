import React from 'react'

export default function Controls(props) {
  return (
    <div>
        <button onClick={props.handleAttack}>Attack</button>
        <button onClick={props.handleSpecial}>Special</button>
        <button onClick={props.handleGiveUp}>Give up</button>
    </div>
  )
}
