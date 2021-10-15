import React from 'react'
import styled from 'styled-components'

export default function Controls(props) {
  return (
    <div>
        {props.player ? 
            <WrapperControl1>
                <button onClick={props.handleAttack}>Attack</button>
                <button onClick={props.handleSpecial}>Special</button>
            </WrapperControl1>
            : 
            <WrapperControl2>
                <button onClick={props.handleAttack}>Attack</button>
                <button onClick={props.handleSpecial}>Special</button>
            </WrapperControl2>
        }
    </div>
    )
}

const WrapperControl1 = styled.div`
    width:185px;
    height:20px;
    padding: 10px 5px;
    background: #f6f6f6;
    border: 1px solid #e5e5e5;
    float:left;
    clear:both;
`
const WrapperControl2 = styled.div`
    width:185px;
    height:20px;
    padding: 10px 5px;
    background: #f6f6f6;
    border: 1px solid #e5e5e5;
    float:right;
    clear:both;
`