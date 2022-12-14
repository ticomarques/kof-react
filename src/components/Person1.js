import React from 'react'

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
    <div className="wrapperPerson1">
            <div className="imgP1">
                {vai}
            </div>
    </div>
  )
}
