import React, { Component } from 'react'
import styled from 'styled-components'
import bg from './images/brazil.jpg'

import BarP1 from './Components/BarP1'
import BarP2 from './Components/BarP2'

import Person1 from './Components/Person1'
import Person2 from './Components/Person2'
import Controls from './Components/Controls'

import hitSound from './sound/hit.mp3';

const sound = new Audio(hitSound);

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

  

  hit = () => {
    sound.play();
  };

  handleAttack = () => {
    
    //calcula dano
    let damage = Math.floor((Math.random() * 5) + 1)
    
    if (this.state.turn){

        // Calcula o dano no P2 e adiciona o special
        var danoP2 = this.state.p2.energy - damage;
        this.setState(
          { turn: false,
            action: "p1Attack",
            p1: 
            { 
              css: true,
              name: 'Kyo',
              attack: true,
              hurt: false,
              energy: this.state.p1.energy,
              special: this.state.p1.special + (damage * 3)
            },
            p2: 
            { 
              css: false,
              name: 'Terry',
              attack: false,
              hurt: true,
              energy: danoP2, 
              special: this.state.p2.special
            }
          }
        )

        this.hit();
        // ****** FIM Calcula o dano no P2 e adiciona o special

        // 3 faz o flip de imagem de ataque p1
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
                special: this.state.p1.special
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
        }, 600);
        // **** FIM FAZ FLIP ATAQUE


    } else {


      //calcula dano
      var danoP1 = this.state.p1.energy - damage;
      // Calcula o dano no P1 e adiciona o special
      this.setState(
        { 
          turn: true,
          action: "p2Attack",
          p1: 
            { 
              css: false,
              name: 'Kyo',
              attack: false,
              hurt: true,
              energy: danoP1,
              special: this.state.p1.special
            },
          p2: 
            { name: 'Terry',
              attack: true,
              hurt: false,
              energy: this.state.p2.energy, 
              special: this.state.p2.special + (damage * 3)
            }
        }
      )
      this.hit();
      //FIM CALCULA Special 
       


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
              hurt: false,
              energy: this.state.p1.energy, 
              special: this.state.p1.special
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

      //FIM DO FLIP ATAQUE P2
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
          <Person1 info={this.state} />
          <Person2 info={this.state} />
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
