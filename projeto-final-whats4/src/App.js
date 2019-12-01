  
import React from 'react';
import './App.css';
import styled from 'styled-components'
import EnvioCard from './components/EnvioCard/EnvioCard'

const Page = styled.div`
  display: flex;
  justify-content: center;
`

const MainContainer = styled.div`
 width: 600px;
 height: 50vw;
 border: 1px solid black;
 display: flex;
 flex-direction: column;
 margin-top: 30px;
 justify-content: flex-end;
`

const ContainerDaMensagem = styled.div`
 display: flex;
 flex-direction: column;
 padding: 20px;
`
const NovoP = styled.p`
margin-bottom: 10px;
padding: 8px;
border: 1px solid grey;
width: 50%;
border-radius: 5px;
background-color: silver
`

  class App extends React.Component{
    constructor(){
      super()
      this.state = {
      mensagemEnviada:[]
      }
    }

  // função que adiciona uma nova mensagem fazendo a cópia do array
  adcNovaMensagem = (props) => {
    this.setState({mensagemEnviada: [...this.state.mensagemEnviada, props ]})
  }

// função pra enviar nova mensagem com enter 
  aoClicarEnter = (event) => {
    if (event.key === "Enter") {
     return this.adcNovaMensagem();
    }
  }  

  render(){
  return (
    <Page>
      <MainContainer>
        <ContainerDaMensagem>
          {this.state.mensagemEnviada.map((props) => 
          <NovoP><strong>{props.enviarusuario + ': '}</strong>{props.enviarmensagem}</NovoP>)}
        </ContainerDaMensagem>
        <EnvioCard aoClicarEnter={this.aoClicarEnter} adcNovaMensagem={this.adcNovaMensagem}></EnvioCard>
      </MainContainer>
    </Page>
  );
  }
  }
  

export default App;