import React from 'react'
import p2 from '../images/Terry.gif'
import p2Attack from '../images/Terry-attack.gif'
import p2Hurt from '../images/Terry-hurt.gif'

export default function Person(props) {

  const attack = props.info.p2.attack;
  const hurt = props.info.p2.hurt;
  let vai;

  if (!attack && !hurt) {
    vai = <img src={p2} alt="Player 2" />;
  } else if (attack){
    vai = <img src={p2Attack} alt="Player 2" />;
  } else if (hurt){
    vai = <img src={p2Hurt} alt="Player 2" />;
  }
    
  return (
    <div className="wrapperPerson2">
        <div className="imgP2">
            {vai}
        </div>
    </div >
  )
}

