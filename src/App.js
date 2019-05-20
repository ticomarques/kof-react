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
    

    if (this.state.turn){
      var changeEnergy = this.state.p2.energy - damage;
      this.setState(
        { p2: 
          { name: 'Terry',
            image: '../images/Terry.gif', 
            energy: changeEnergy, 
            special: this.state.p2.special
          }
        }
      )
      this.setState(
        { turn: false,
          p1: 
          { name: 'Kyo',
            image: '../images/Kyo.gif', 
            energy: this.state.p1.energy, 
            special: this.state.p1.special + (damage * 3)
          }
        }
      )
    } else {
      var valorp2 = this.state.p1.energy - damage;
      this.setState(
        { p1: 
          { name: 'Terry',
            image: '../images/Terry.gif', 
            energy: valorp2, 
            special: this.state.p1.special
          }
        }
      )
      this.setState(
        { turn: true,
          p2: 
          { name: 'Kyo',
            image: '../images/Kyo.gif', 
            energy: this.state.p2.energy, 
            special: this.state.p2.special + (damage * 3)
          }
        }
      )
    }
    

    
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

        {
          this.state.turn ? 
            <Controls handleAttack={this.handleAttack} handleSpecial={this.handleSpecial} handleGiveUp={this.handleGiveUp} player="player1"/> 
            : 
            <Controls handleAttack={this.handleAttack} handleSpecial={this.handleSpecial} handleGiveUp={this.handleGiveUp} />
        }
        
      </WrapperApp>
    )
  }
}

const WrapperApp = styled.div`
  position: relative;
`
