import React, { Component } from 'react'
import styled from 'styled-components'
import Stage from './components/Stage'
import Person from './components/Person'
import Controls from './components/Controls'

export default class App extends Component {

  state = {
      turn: true,
      p1: {
          name: 'Kyo',
          image: '../images/Kyo.gif',
          energy: 100,
          special: 0
      },
      p2: {
          name: 'Terry',
          image: '../images/Terry.gif',
          energy: 100,
          special: 0
      }
  }

  handleTurn = () => {
    console.log('Changed the player')
  }

  handleAttack = () => {
    let damage = Math.floor((Math.random() * 5) + 1)
    var valor = this.state.p2.energy - damage;
    this.setState({p2: { name: 'Terry',
    image: '../images/Terry.gif', energy: valor, special: 0}})
  }

  handleSpecial = () => {
    console.log('Special')
  }

  handleGiveUp = () => {
    console.log('Give up!')
  }


  render() {
    return (
      <WrapperApp>
        <h1>KOF RPG</h1>

        <Stage />
        
        <Person info={this.state.p1} player="player1" />

        <Person info={this.state.p2} />

        <Controls handleAttack={this.handleAttack} handleSpecial={this.handleSpecial} handleGiveUp={this.handleGiveUp} />
      </WrapperApp>
    )
  }
}

const WrapperApp = styled.div`
  position: relative;
`
