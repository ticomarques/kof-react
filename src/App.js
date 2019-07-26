import React, { Component } from 'react'
import styled from 'styled-components'
import bg from './images/brazil.jpg'

import BarP1 from './components/BarP1'
import BarP2 from './components/BarP2'

import Person1 from './components/Person1'
import Person2 from './components/Person2'
import Controls from './components/Controls'

export default class App extends Component {

  state = {
      turn: true,
      action: null,
      p1: {
          css: false,
          name: 'Kyo',
          attack: false,
          hurt:false,
          energy: 100,
          special: 0
      },
      p2: {
          css: false,
          name: 'Terry',
          attack: false,
          hurt:false,
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

      //calcula dano e subtrai do personagem
      var changeEnergy = this.state.p2.energy - damage;
      this.setState(
        { p2: 
          { 
            css: false,
            name: 'Terry',
            energy: changeEnergy, 
            special: this.state.p2.special
          }
        }
      )

      //calcula special e adiciona no special
      this.setState(
        { turn: false,
          action: "p1Attack",
          p1: 
          { 
            css: true,
            name: 'Kyo',
            attack: true,
            energy: this.state.p1.energy, 
            special: this.state.p1.special + (damage * 3)
          }
        }
      )

      //faz o flip de imagem de ataque p1
      setTimeout(() => { 
        this.setState(
          { turn: false,
            action: null,
            p1: 
            { 
              css: false,
              name: 'Kyo',
              attack: false,
              hurt: false,
              energy: this.state.p1.energy, 
              special: this.state.p1.special + (damage * 3)
            },
            p2: 
            { 
              css: false,
              name: 'Terry',
              attack: false,
              hurt: false,
              energy: this.state.p2.energy, 
              special: this.state.p2.special
            }
          }
        )
      }, 1000);

    } else {
      //calcula dano e subtrai do personagem
      var valorp2 = this.state.p1.energy - damage;
      this.setState(
        { p1: 
          { name: 'Kyo',
            energy: valorp2, 
            special: this.state.p1.special
          }
        }
      )

      //calcula special e adiciona no special
      this.setState(
        { turn: true,
          action: "p2Attack",
          p2: 
          { name: 'Terry',
            attack: true,
            energy: this.state.p2.energy, 
            special: this.state.p2.special + (damage * 3)
          }
        }
      )
       
      //faz o flip de imagem de ataque p2
      setTimeout(() => { 
        this.setState(
          { turn: true,
            action: null,
            p1: 
            { 
              css: false,
              name: 'Kyo',
              attack: false,
              energy: this.state.p2.energy, 
              special: this.state.p2.special + (damage * 3)
            },
            p2: 
            { 
              css: false,
              name: 'Terry',
              attack: false,
              hurt: false,
              energy: this.state.p2.energy, 
              special: this.state.p2.special
            }

          }
        )
      }, 650);
    }
  }

  handleSpecial = () => {
    console.log('Special')
  }

  handleGiveUp = () => {
    console.log('Give up!')
  }


  render() {

    let action = this.state.action;
    let vai;
    
    if (action === "p1Attack"){
      vai = "arena p1Attack";
    } else if (action === "p2Attack"){
      vai = "arena p2Attack";
    } else {
      vai = "arena";
    }

    return (
      <WrapperApp>
        <section className="topBar">
          <BarP1 info={this.state.p1} />
          <BarP2 info={this.state.p2} />
        </section>
        
        <section className={vai}>
          <Person1 info={this.state.p1} />
          <Person2 info={this.state.p2} />
        </section>
        
        <section className="scontrols">
          {
            this.state.turn ? 
              <Controls 
                handleAttack={this.handleAttack} 
                handleSpecial={this.handleSpecial} 
                handleGiveUp={this.handleGiveUp} 
                player="player1"
              /> 
              : 
              <Controls 
                handleAttack={this.handleAttack} 
                handleSpecial={this.handleSpecial} 
                handleGiveUp={this.handleGiveUp} 
              />
          }
        </section>
      </WrapperApp>
    )
  }
}

const WrapperApp = styled.div`
  background: url(${bg}) no-repeat top center; 
  height:466px;

  .topBar{
    height:100px;
    padding:15px 10px 0;
  }
  .arena{
    height: 350px;
    display:flex;
    justify-content:space-between;
  }
  .p1Attack {
    justify-content: flex-end;
  }
  .p2Attack {
    justify-content: flex-start;
  }

  @keyframes example {
  100% {background-color:red; left:0px; top:0px;}
}
`
